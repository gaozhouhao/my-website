import ReadingText from "../../components/ReadingText";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const copy = {
  zh: { label:"实习经历", title:"英飞凌科技（新加坡亚太总部）", lead:"混合信号设计工程师 · 全职实习", role:"混合信号设计工程师", place:"新加坡亚太总部 · 2026.06–2027.04", work:"正在参与能量收集芯片设计，芯片可在 0.1 V 输入电压下启动并工作。", status:"项目状态", wip:"进行中", public:"项目方向", private:"工作内容", publicScope:"能量收集芯片", privateScope:"低电压启动与工作电路设计", projects:"查看个人项目", meta:"郜周豪在英飞凌科技新加坡亚太总部担任混合信号设计工程师，参与可在 0.1 V 下启动并工作的能量收集芯片项目。" },
  en: { label:"Experience", title:"Infineon Technologies Singapore", lead:"Mixed-Signal Design Engineer · Full-time internship", role:"Mixed-Signal Design Engineer", place:"Singapore · 2026.06–2027.04", work:"Currently working on an energy-harvesting chip that can start up and operate at an input voltage of 0.1 V.", status:"Status", wip:"In progress", public:"Project", private:"Work focus", publicScope:"Energy-harvesting chip", privateScope:"Low-voltage startup and operating circuits", projects:"View personal projects", meta:"Gao Zhouhao’s mixed-signal design internship at Infineon, working on an energy-harvesting chip that starts up and operates at 0.1 V." },
} as const;
export const metadata = pageMetadata("实习经历", copy.zh.meta, "/experience", "zh");
export function ExperiencePage({locale}:{locale:Locale}) { const t=copy[locale]; return <main id="main-content" className="page-shell" lang={locale==="zh"?"zh-CN":"en"}><ReadingText as="p" className="eyebrow">{t.label}</ReadingText><Image src="/brand/infineon.svg" alt="Infineon" width={180} height={80} className="brand-logo brand-logo-feature" priority /><ReadingText as="h1" className="page-title">{t.title}</ReadingText><ReadingText as="p" className="lead" style={{marginTop:"1.5rem"}}>{t.lead}</ReadingText><section className="section split"><div><ReadingText as="p" className="eyebrow">2026.06 — 2027.04</ReadingText><ReadingText as="h2" className="section-heading">{t.role}</ReadingText><ReadingText as="p" className="section-intro">{t.place}</ReadingText><ReadingText as="p" className="section-intro">{t.work}</ReadingText></div><dl className="fact-panel"><dt>{t.status}</dt><ReadingText as="dd">{t.wip}</ReadingText><dt>{t.public}</dt><ReadingText as="dd">{t.publicScope}</ReadingText><dt>{t.private}</dt><ReadingText as="dd">{t.privateScope}</ReadingText></dl></section><div className="button-row"><Link className="button" href={localizedPath("/projects",locale)}>{t.projects}</Link></div></main> }
export default function Page(){return <ExperiencePage locale="zh"/>}
