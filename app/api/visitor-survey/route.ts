import { submitSurvey, surveyReady } from "../../../lib/survey-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export function GET() {
  return Response.json({ enabled: surveyReady() }, { headers: { "Cache-Control": "no-store" } });
}
export async function POST(request: Request) {
  return submitSurvey(request);
}
