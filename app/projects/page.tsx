import Image from "next/image";
import Link from "next/link";
import { projectSummaries } from "../../lib/content";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const copy = {
  zh: { title: "项目经历", heading: "代表项目", intro: "项目详情包括设计内容、本人负责部分、实现过程、仿真或测试结果。", open: "查看项目 →", meta: "郜周豪的模拟 IC、数字 IC、RTL、SoC 与硬件项目。" },
  en: { title: "Projects", heading: "Engineering evidence across the IC stack.", intro: "Each page separates objective, personal contribution, implementation, verification, results, limitations, and third-party boundaries.", open: "Open project →", meta: "IC design, RTL, SoC, ASIC flow, verification, and hardware projects by Gao Zhouhao." },
} as const;

export const metadata = pageMetadata("项目经历", copy.zh.meta, "/projects", "zh");

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.title}</p><h1 className="page-title">{t.heading}</h1><p className="lead" style={{ marginTop: "1.5rem" }}>{t.intro}</p>
    <div className="card-grid section" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
      {projectSummaries.map(project => <article className="card" key={project.slug}>
        {project.image && project.width && project.height && <Image src={project.image} alt={locale === "zh" ? project.titleZh : project.imageAlt ?? project.title} width={project.width} height={project.height} sizes="(max-width: 800px) 100vw, 33vw" style={{ width: "100%", height: "12rem", objectFit: "cover", borderRadius: ".65rem" }} />}
        <p className="eyebrow" style={{ marginTop: project.image ? "1rem" : 0 }}>{locale === "zh" ? project.directionZh : project.direction}</p><h2 style={{ fontSize: "1.35rem", margin: ".7rem 0" }}>{locale === "zh" ? project.titleZh : project.title}</h2><p>{locale === "zh" ? project.summaryZh : project.summary}</p><Link className="card-link" href={localizedPath(`/projects/${project.slug}`, locale)}>{t.open}</Link>
      </article>)}
    </div>
  </main>;
}
export default function Page() { return <ProjectsPage locale="zh" />; }
