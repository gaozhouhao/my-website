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
    role: "我参与制定芯片规格、规划系统架构，具体负责超低压启动电路设计。",
    result: "我完成了启动电路的原理图设计，实现了 0.1 V 供电启动，并通过 PVT 仿真分析工艺角、电源电压和温度变化对启动过程的影响。",
    next: "下一阶段将设计 Boost 升压电路。",
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
    role: "I helped define the chip specifications and system architecture. My circuit design work focuses on startup at ultra-low supply voltages.",
    result: "I completed the schematic and achieved startup from a 0.1 V supply. I then ran PVT simulations to study how process, supply voltage and temperature affect startup.",
    next: "The next stage is to design the boost converter.",
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
        <ReadingText>{t.role}</ReadingText>
        <ReadingText>{t.result}</ReadingText>
        <ReadingText>{t.next}</ReadingText>
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
