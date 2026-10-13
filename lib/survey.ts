export const surveyChoices = ["recruiting", "technical", "browsing"] as const;
export const SURVEY_DELAY = 60_000;
export function localDay(now = new Date()) {
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}
export function shouldOffer(completed: string | null, dismissed: string | null, now = new Date()) {
  return completed !== "yes" && dismissed !== localDay(now);
}
export function activeElapsed(elapsed: number, since: number, now: number, visible: boolean) {
  return Math.min(SURVEY_DELAY, elapsed + (visible ? Math.max(0, now - since) : 0));
}
