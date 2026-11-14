import ReadingText from "../../components/ReadingText";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const copy = {
  zh: {
    label: "实习经历",
    title: "英飞凌科技",
    place: "新加坡亚太总部",
    lead: "混合信号设计工程师 · 全职实习",
    project: "超低压能量收集芯片",
    overview: "参与 TSMC 22 nm 能量收集芯片设计，工作包括规格制定、系统架构规划与启动电路设计。",
    scope: "工作进展",
    work: [
      { title: "规格与系统架构", text: "参与芯片规格制定与系统架构规划。" },
      { title: "启动电路原理图", text: "完成启动电路原理图设计，实现 0.1 V 供电启动。" },
      { title: "PVT 仿真", text: "完成启动电路的 PVT 仿真，分析不同工艺角、电压和温度下的启动特性。" },
      { title: "后续计划", text: "下一阶段将开展 Boost 升压电路设计。" },
    ],
    status: "项目状态",
    wip: "进行中",
    process: "工艺",
    period: "实习时间",
    projects: "查看个人项目",
    meta: "郜周豪在英飞凌科技新加坡亚太总部的混合信号设计实习，完成 TSMC 22 nm 能量收集芯片启动电路原理图设计与 PVT 仿真，实现 0.1 V 供电启动。",
  },
  en: {
    label: "Experience",
    title: "Infineon Technologies",
    place: "Asia-Pacific headquarters · Singapore",
    lead: "Mixed-Signal Design Engineer · Full-time internship",
    project: "Ultra-low-voltage energy-harvesting chip",
    overview: "Contributing to specifications, system architecture, and startup-circuit design for a TSMC 22 nm energy-harvesting chip.",
    scope: "Work and progress",
    work: [
      { title: "Specifications and system architecture", text: "Contributing to chip specifications and system architecture." },
      { title: "Startup-circuit schematic", text: "Completed the startup-circuit schematic, achieving startup from a 0.1 V supply." },
      { title: "PVT simulations", text: "Completed startup-circuit simulations to examine startup behavior across process, voltage, and temperature variations." },
      { title: "Next stage", text: "Boost-converter design is planned next." },
    ],
    status: "Project status",
    wip: "In progress",
    process: "Process",
    period: "Internship period",
    projects: "View personal projects",
    meta: "Gao Zhouhao’s mixed-signal design internship at Infineon in Singapore: TSMC 22 nm startup-circuit schematic design and PVT simulations, achieving startup from a 0.1 V supply.",
  },
} as const;

export const metadata = pageMetadata("实习经历", copy.zh.meta, "/experience", "zh");
export const experienceMetadataEn = pageMetadata("Experience", copy.en.meta, "/experience", "en");

export function ExperiencePage({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return <main id="main-content" className="page-shell experience-page" lang={locale === "zh" ? "zh-CN" : "en"}>
    <header>
      <ReadingText as="p" className="eyebrow">{t.label}</ReadingText>
      <Image src="/brand/infineon.svg" alt="Infineon" width={180} height={80} className="brand-logo brand-logo-feature" priority />
      <ReadingText as="h1" className="page-title">{t.title}</ReadingText>
      <ReadingText as="p" className="experience-location">{t.place}</ReadingText>
      <ReadingText as="p" className="lead">{t.lead}</ReadingText>
    </header>

    <section className="section split experience-overview" aria-labelledby="experience-project">
      <div>
        <ReadingText as="h2" id="experience-project" className="section-heading">{t.project}</ReadingText>
        <ReadingText as="p" className="section-intro">{t.overview}</ReadingText>
        <section className="prose-section experience-work" aria-labelledby="experience-work">
          <ReadingText as="h3" id="experience-work">{t.scope}</ReadingText>
          <ul>
            {t.work.map(item => <ReadingText as="li" key={item.title}>
              <strong>{item.title}</strong>{locale === "zh" ? "：" : ": "}{item.text}
            </ReadingText>)}
          </ul>
        </section>
      </div>
      <dl className="fact-panel">
        <dt>{t.status}</dt><ReadingText as="dd">{t.wip}</ReadingText>
        <dt>{t.process}</dt><ReadingText as="dd">TSMC 22 nm</ReadingText>
        <dt>{t.period}</dt><ReadingText as="dd">2026.06–2027.04</ReadingText>
      </dl>
    </section>
    <div className="button-row"><Link className="button" href={localizedPath("/projects", locale)}>{t.projects}</Link></div>
  </main>;
}

export default function Page() { return <ExperiencePage locale="zh" />; }
