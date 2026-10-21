import ReadingText from "../../components/ReadingText";
import CompetitionVideo from "../../components/CompetitionVideo";
import Image from "next/image";
import Link from "next/link";
import { projectSummaries } from "../../lib/content";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const copy = {
  zh: { title: "项目经历", heading: "代表项目", intro: "我的项目主要涉及芯片设计与硬件开发。这里记录各项目中负责的工作、设计过程和测试结果。", open: "查看项目 →", meta: "郜周豪的芯片设计与硬件开发项目，包括模拟电路、处理器、神经网络加速器和嵌入式系统。" },
  en: { title: "Portfolio", heading: "Selected Projects", intro: "Circuit design, processor RTL and embedded hardware, with a look at my contributions, design decisions and test results.", open: "Explore project →", meta: "Analog IC, processor RTL, neural accelerator and embedded hardware projects by Gao Zhouhao." },
} as const;

export const metadata = pageMetadata("项目经历", copy.zh.meta, "/projects", "zh");

export function ProjectsPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t.title}</ReadingText><ReadingText as="h1" className="page-title">{t.heading}</ReadingText><ReadingText as="p" className="lead" style={{ marginTop: "1.5rem" }}>{t.intro}</ReadingText>
    <div className="card-grid project-grid section">
      {projectSummaries.map(project => <article className="card" key={project.slug}>
        {project.image && project.width && project.height && <Link href={localizedPath(`/projects/${project.slug}`, locale)}><Image src={project.image} alt={locale === "zh" ? project.titleZh : project.imageAlt ?? project.title} width={project.width} height={project.height} sizes="(max-width: 800px) 100vw, 33vw" style={{ width: "100%", height: "auto", display: "block" }} /></Link>}
        <ReadingText as="p" className="eyebrow" style={{ marginTop: project.image ? "1rem" : 0 }}>{locale === "zh" ? project.directionZh : project.direction}</ReadingText><ReadingText as="h2" style={{ fontSize: "1.35rem", margin: ".7rem 0" }}>{locale === "zh" ? project.titleZh : project.title}</ReadingText><ReadingText as="p">{locale === "zh" ? project.summaryZh : project.summary}</ReadingText><Link className="card-link" href={localizedPath(`/projects/${project.slug}`, locale)}>{t.open}</Link>
      </article>)}
    </div>
    <section className="section" id="competition-videos">
      <ReadingText as="h2" className="section-heading">{locale === "zh" ? "比赛演示" : "Competition demos"}</ReadingText>
      <div className="showcase-grid" style={{ marginTop: "1.5rem" }}>
        <article className="showcase-card">
          <CompetitionVideo bvid="BV1hiQXBFEzB" title={locale === "zh" ? "多车编队智能车比赛演示" : "Multi-vehicle smart car competition demo"} />
          <div className="showcase-copy"><ReadingText as="h3">{locale === "zh" ? "多车编队智能车" : "Multi-Vehicle Formation"}</ReadingText><ReadingText as="p">{locale === "zh" ? "第十七届全国大学生智能汽车竞赛 · 全国总决赛二等奖" : "National Finals Second Prize, 17th National College Student Smart Car Competition"}</ReadingText></div>
        </article>
        <article className="showcase-card">
          <CompetitionVideo bvid="BV1QXQQBbEMi" title={locale === "zh" ? "TI 杯双车跟随系统比赛演示" : "TI Cup dual-vehicle following demo"} />
          <div className="showcase-copy"><ReadingText as="h3">{locale === "zh" ? "TI 杯双车跟随系统" : "TI Cup: Dual-Vehicle Following"}</ReadingText><ReadingText as="p">{locale === "zh" ? "通过灰度传感器循迹、超声测距和蓝牙通信，实现双车协同跟随。获江苏省一等奖。" : "Two cars coordinate their movement using line sensors, ultrasonic ranging, and Bluetooth. Awarded First Prize in Jiangsu."}</ReadingText><Link className="card-link" href={localizedPath("/projects/dual-vehicle-following", locale)}>{t.open}</Link></div>
        </article>
      </div>
    </section>
  </main>;
}
export default function Page() { return <ProjectsPage locale="zh" />; }
