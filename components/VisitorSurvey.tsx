"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { localeFromPathname } from "../lib/i18n";
import { activeElapsed, localDay, shouldOffer, SURVEY_DELAY, surveyChoices } from "../lib/survey";

const keys = { done: "visitor-survey:v1:done", dismissed: "visitor-survey:v1:dismissed", elapsed: "visitor-survey:v1:elapsed", id: "visitor-survey:v1:id" };
const copy = {
  zh: {
    label: "一个小问题 · 自愿回答", title: "你是为什么来到这里？",
    intro: "想了解谁在看这些项目，帮助我把作品集做得更好。",
    choices: ["招聘 / HR / 用人团队", "技术交流 / 学习参考", "随便逛逛"],
    privacy: "不询问姓名或联系方式，仅用于汇总统计。浏览器会记住你的选择，避免重复打扰。",
    submit: "提交", sending: "提交中…", later: "暂时跳过", close: "关闭问卷",
    thanks: "谢谢，已收到你的回答。", finish: "继续浏览", error: "暂时未能提交，请稍后重试或跳过。",
  },
  en: {
    label: "ONE QUICK QUESTION · OPTIONAL", title: "What brings you here?",
    intro: "Knowing who visits helps me make this portfolio more useful.",
    choices: ["Recruiting / HR / Hiring team", "Technical exchange / Learning", "Just browsing"],
    privacy: "No name or contact details requested. Answers are counted in aggregate. This browser remembers your choice to avoid asking again.",
    submit: "Submit", sending: "Submitting…", later: "Skip for now", close: "Close survey",
    thanks: "Thank you — your answer has been received.", finish: "Keep browsing", error: "Could not submit right now. Please retry later or skip.",
  },
};

export default function VisitorSurvey() {
  const pathname = usePathname();
  const t = copy[localeFromPathname(pathname)];
  const dialog = useRef<HTMLDialogElement>(null);
  const requestId = useRef<string | null>(null);
  const [open, setOpen] = useState(false);
  const [choice, setChoice] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    let elapsed = 0;
    let since = performance.now();
    let visible = document.visibilityState === "visible";
    let checked = false;
    let disposed = false;
    const abort = new AbortController();
    const eligible = () => {
      try { return shouldOffer(localStorage.getItem(keys.done), localStorage.getItem(keys.dismissed)); }
      catch { return false; } // Respect blocked browser storage; avoid repeated prompts.
    };
    try { elapsed = Math.max(0, Math.min(SURVEY_DELAY, Number(sessionStorage.getItem(keys.elapsed)) || 0)); }
    catch { return; }
    const tick = () => {
      const now = performance.now();
      elapsed = activeElapsed(elapsed, since, now, visible);
      since = now;
      try { sessionStorage.setItem(keys.elapsed, String(elapsed)); } catch { /* optional persistence */ }
      if (!visible || checked || elapsed < SURVEY_DELAY || !eligible()) return;
      checked = true;
      void fetch("/api/visitor-survey", { cache: "no-store", signal: abort.signal })
        .then(r => r.ok ? r.json() : null)
        .then(data => {
          if (disposed || !data?.enabled || !eligible()) return;
          if (document.visibilityState === "visible") setOpen(true);
          else checked = false;
        })
        .catch(() => { /* Quietly omit the optional survey when unavailable. */ });
    };
    const visibility = () => { tick(); visible = document.visibilityState === "visible"; since = performance.now(); tick(); };
    const storageChanged = () => { if (!eligible()) setOpen(false); };
    const timer = window.setInterval(tick, 1000);
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("pagehide", tick);
    window.addEventListener("storage", storageChanged);
    return () => {
      disposed = true; abort.abort(); clearInterval(timer);
      document.removeEventListener("visibilitychange", visibility);
      window.removeEventListener("pagehide", tick);
      window.removeEventListener("storage", storageChanged);
    };
  }, []);

  useEffect(() => {
    const element = dialog.current;
    if (open && element && !element.open) element.showModal();
    if (!open && element?.open) element.close();
  }, [open]);

  function dismiss() {
    try { localStorage.setItem(keys.dismissed, localDay()); } catch { /* current tab still closes */ }
    setOpen(false);
  }
  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!choice || status === "sending") return;
    setStatus("sending");
    try {
      if (!requestId.current) {
        requestId.current = localStorage.getItem(keys.id) || crypto.randomUUID();
        localStorage.setItem(keys.id, requestId.current);
      }
      const response = await fetch("/api/visitor-survey", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ choice, id: requestId.current }), signal: AbortSignal.timeout(12000),
      });
      if (!response.ok || !(await response.json()).ok) throw new Error("submission failed");
      try { localStorage.setItem(keys.done, "yes"); } catch { /* response was still saved */ }
      setStatus("success");
    } catch { setStatus("error"); }
  }

  return <dialog ref={dialog} className="visitor-survey" aria-labelledby="visitor-survey-title" aria-describedby="visitor-survey-intro" lang={localeFromPathname(pathname)} onCancel={dismiss} onClose={() => setOpen(false)}>
    <button type="button" className="survey-close" onClick={dismiss} aria-label={t.close}>×</button>
    <p className="eyebrow">{t.label}</p>
    <h2 id="visitor-survey-title">{t.title}</h2>
    <p id="visitor-survey-intro" className="survey-intro">{t.intro}</p>
    {status === "success" ? <div aria-live="polite"><p className="survey-thanks">{t.thanks}</p><button type="button" className="button button-primary" onClick={dismiss}>{t.finish}</button></div> :
      <form onSubmit={submit}>
        <fieldset disabled={status === "sending"}>
          <legend className="survey-sr-only">{t.title}</legend>
          {surveyChoices.map((value, i) => <label key={value} className="survey-option"><input type="radio" name="visitor-purpose" value={value} checked={choice === value} onChange={() => setChoice(value)} required /><span>{t.choices[i]}</span></label>)}
        </fieldset>
        <p className="survey-privacy">{t.privacy}</p>
        {status === "error" && <p role="alert" className="survey-error">{t.error}</p>}
        <div className="survey-actions"><button className="button button-primary" disabled={!choice || status === "sending"} type="submit">{status === "sending" ? t.sending : t.submit}</button><button type="button" className="survey-skip" onClick={dismiss}>{t.later}</button></div>
      </form>}
  </dialog>;
}
