import { createHmac } from "node:crypto";

type Config = { url?: string; token?: string; enabled: boolean };
export function surveyConfig(): Config {
  return {
    url: process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN,
    enabled: process.env.VISITOR_SURVEY_ENABLED === "true",
  };
}
export function surveyReady(config = surveyConfig()) {
  return Boolean(config.enabled && config.url && config.token);
}
// A single atomic operation prevents retries from counting the same answer twice.
// Only aggregates persist; deduplication and anonymous abuse-control keys expire.
export const recordSurveyScript = `
if redis.call('EXISTS', KEYS[1]) == 1 then return 0 end
local rate = redis.call('INCR', KEYS[2])
if rate == 1 then redis.call('EXPIRE', KEYS[2], 3600) end
if rate > 20 then return -1 end
local daily = tonumber(redis.call('GET', KEYS[3]) or '0')
if daily >= 500 then return -1 end
redis.call('INCR', KEYS[3])
redis.call('EXPIRE', KEYS[3], 172800)
redis.call('HINCRBY', KEYS[4], ARGV[1], 1)
redis.call('HINCRBY', KEYS[4], 'total', 1)
redis.call('HINCRBY', KEYS[5], ARGV[1], 1)
redis.call('HINCRBY', KEYS[5], 'total', 1)
redis.call('SET', KEYS[1], '1', 'EX', 31536000)
return 1
`;
const json = (data: unknown, status = 200) => Response.json(data, {
  status, headers: { "Cache-Control": "no-store" },
});
export async function submitSurvey(request: Request, config = surveyConfig(), send: typeof fetch = fetch) {
  // Browsers must submit from this site's origin, never a third-party form.
  if (request.headers.get("origin") !== new URL(request.url).origin) return json({ error: "origin" }, 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return json({ error: "content_type" }, 415);
  if (!surveyReady(config)) return json({ error: "unavailable" }, 503);
  let body: unknown;
  try {
    // Read a bounded stream instead of trusting Content-Length supplied by a client.
    const reader = request.body?.getReader();
    if (!reader) return json({ error: "invalid" }, 400);
    const chunks: Uint8Array[] = [];
    let bytes = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      bytes += value.length;
      if (bytes > 512) { await reader.cancel(); return json({ error: "too_large" }, 413); }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch { return json({ error: "invalid" }, 400); }
  if (!body || typeof body !== "object") return json({ error: "invalid" }, 400);
  const { choice, id } = body as Record<string, unknown>;
  if (typeof choice !== "string" || !["recruiting", "technical", "browsing"].includes(choice) ||
      typeof id !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(id)) {
    return json({ error: "invalid" }, 400);
  }
  const day = new Date().toISOString().slice(0, 10);
  const hash = (value: string) => createHmac("sha256", config.token!).update(value).digest("hex");
  // Vercel overwrites this header. Never store the raw network address.
  const address = process.env.VERCEL ? request.headers.get("x-vercel-forwarded-for") || "unknown" : "local";
  try {
    const response = await send(config.url!, {
      method: "POST", headers: { Authorization: `Bearer ${config.token}`, "Content-Type": "application/json" },
      body: JSON.stringify(["EVAL", recordSurveyScript, 5,
        `survey:v1:seen:${hash(id)}`, `survey:v1:rate:${hash(`${day}:${address}`)}`,
        `survey:v1:daily:${day}`, "survey:v1:results", `survey:v1:month:${day.slice(0, 7)}`, choice]),
      cache: "no-store", signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return json({ error: "unavailable" }, 503);
    const result = await response.json();
    if (result.result === -1) return json({ error: "limited" }, 429);
    if (result.error || ![0, 1].includes(result.result)) return json({ error: "unavailable" }, 503);
    return json({ ok: true });
  } catch { return json({ error: "unavailable" }, 503); }
}
