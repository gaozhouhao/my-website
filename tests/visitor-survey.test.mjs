import test from 'node:test';
import assert from 'node:assert/strict';
import { submitSurvey, surveyReady } from '../lib/survey-server.ts';
import { activeElapsed, shouldOffer, localDay } from '../lib/survey.ts';

const config = { enabled: true, url: 'https://example.upstash.io', token: 'test-only-token' };
const id = '11111111-1111-4111-8111-111111111111';
function request(body = { choice: 'technical', id }, headers = {}) {
  return new Request('https://www.gaozhouhao.com/api/visitor-survey', {
    method: 'POST', headers: { origin: 'https://www.gaozhouhao.com', 'content-type': 'application/json', ...headers },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}
test('active time excludes hidden time and stops at one minute', () => {
  assert.equal(activeElapsed(20000, 20000, 80000, false), 20000);
  assert.equal(activeElapsed(20000, 80000, 95000, true), 35000);
  assert.equal(activeElapsed(35000, 95000, 140000, true), 60000);
});
test('dismissal expires next local day, completed stays suppressed', () => {
  const today = new Date(2026, 9, 14, 23, 59);
  assert.equal(shouldOffer(null, localDay(today), today), false);
  assert.equal(shouldOffer(null, localDay(today), new Date(2026, 9, 15)), true);
  assert.equal(shouldOffer('yes', null, today), false);
});
test('disabled or missing storage is not offered', () => {
  assert.equal(surveyReady({enabled: false, url: config.url, token: config.token}), false);
  assert.equal(surveyReady({enabled: true}), false);
});
test('reject cross-origin, invalid options, oversized and malformed requests before storage', async () => {
  const never = () => { throw new Error('must not access database'); };
  for (const [req, code] of [
    [request(undefined, { origin: 'https://evil.example' }), 403],
    [request(undefined, { 'content-type': 'text/plain' }), 415],
    [request({ choice: 'admin', id }), 400],
    [request({ choice: 'technical', id: 'bad' }), 400],
    [request('not-json'), 400], [request('x'.repeat(513)), 413],
  ]) assert.equal((await submitSurvey(req, config, never)).status, code);
});
test('success and duplicate replies both acknowledge durable answers', async () => {
  for (const result of [1, 0]) {
    const response = await submitSurvey(request(), config, async (url, options) => {
      assert.equal(url, config.url);
      const command = JSON.parse(options.body);
      assert.equal(command[0], 'EVAL');
      assert.equal(command[2], 5);
      assert.equal(command.at(-1), 'technical');
      assert.equal(options.body.includes(id), false);
      return Response.json({ result });
    });
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { ok: true });
  }
});
test('rate limits and storage failures never acknowledge success', async () => {
  for (const [mock, code] of [
    [async () => Response.json({result: -1}), 429],
    [async () => Response.json({error: 'provider error'}), 503],
    [async () => new Response('', {status: 500}), 503],
    [async () => { throw new Error('timeout'); }, 503],
  ]) assert.equal((await submitSurvey(request(), config, mock)).status, code);
});
