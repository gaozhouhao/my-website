import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../lib/i18n";
import { localizedPath } from "../lib/i18n";
import { pageMetadata, site } from "../lib/site";

const copy = {
  zh: {
    meta: "郜周豪的 IC 设计作品集，包含模拟 IC、数字 IC、RTL、SoC 与硬件项目。",
    degree: "TUM / NTU · Integrated Circuit Design M.Sc. · 2027 届",
    internship: "Infineon Technologies Singapore · Analog IC Design Intern",
    direction: "Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design",
    projects: "项目经历",
    email: "邮箱",
    resume: "简历整理中",
    selected: "代表项目",
    selectedIntro: "直接查看架构、schematic、layout、仿真结果和实车演示。",
    view: "项目详情",
    demo: "实车视频",
    experience: "实习经历",
    ongoing: "进行中",
    experienceText: "参与能量采集系统低压启动电路项目。首页仅展示适合公开的岗位和项目方向。",
    more: "更多项目",
    publications: "论文与专利",
    awards: "奖项荣誉",
    education: "教育背景",
    allProjects: "查看全部项目",
  },
  en: {
    meta: "Gao Zhouhao's IC design portfolio with projects across analog IC, RTL, SoC, ASIC flow, and hardware.",
    degree: "TUM / NTU · M.Sc. Integrated Circuit Design · 2027 Graduate",
    internship: "Infineon Technologies Singapore · Analog IC Design Intern",
    direction: "Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design",
    projects: "Projects",
    email: "Email",
    resume: "Resume in review",
    selected: "Selected Projects",
    selectedIntro: "Architecture, schematics, layout, simulation results, and a live vehicle demo.",
    view: "Project details",
    demo: "Vehicle demo",
    experience: "Experience",
    ongoing: "Ongoing",
    experienceText: "Working on a low-voltage startup circuit for an energy-harvesting system. Only the public role and project context are shown here.",
    more: "More Engineering Work",
    publications: "Publications & Patent",
    awards: "Awards",
    education: "Education",
    allProjects: "View all projects",
  },
} as const;

export const metadata = pageMetadata("IC 设计作品集", copy.zh.meta, "/", "zh");

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const zh = locale === "zh";
  const href = (path: string) => localizedPath(path, locale);

  return <main id="main-content" lang={zh ? "zh-CN" : "en"}>
    <section className="page-shell hero-compact">
      <p className="eyebrow">2027 · IC Design</p>
      <h1 className="display-title">{zh ? "郜周豪" : "Gao Zhouhao"}</h1>
      <div className="hero-facts">
        <p>{t.degree}</p><p>{t.internship}</p><p>{t.direction}</p>
      </div>
      <div className="button-row compact-buttons">
        <Link className="button button-primary" href={href("/projects")}>{t.projects}</Link>
        <a className="button" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="button" href={`mailto:${site.email}`}>{t.email}</a>
        <span className="button button-muted" aria-disabled="true">{t.resume}</span>
      </div>
    </section>

    <section className="page-shell home-section">
      <div className="section-bar"><div><p className="eyebrow">{t.selected}</p><h2 className="home-heading">{t.selected}</h2></div><p>{t.selectedIntro}</p></div>
      <div className="showcase-grid">
        <article className="showcase-card showcase-wide">
          <Link href={href("/projects/riscv-cpu")} className="showcase-media"><Image src="/projects/cpu_arch.webp" alt="Multi-cycle RISC-V CPU architecture" width={1087} height={868} sizes="(max-width: 800px) 100vw, 55vw" priority /></Link>
          <div className="showcase-copy"><p className="eyebrow">Digital IC · RTL · SoC</p><h3>{zh ? "多周期 RISC-V CPU / SoC" : "Multi-Cycle RISC-V CPU / SoC"}</h3><p>{zh ? "RV32E CPU RTL、valid-ready 控制、AXI/APB 集成、NEMU Difftest，以及 SDRAM / QSPI PSRAM 与 bootloader 调试。" : "RV32E CPU RTL, valid-ready control, AXI/APB integration, NEMU Difftest, memory models, and bootloader debug."}</p><Link className="card-link" href={href("/projects/riscv-cpu")}>{t.view} →</Link></div>
        </article>
        <article className="showcase-card">
          <Link href={href("/projects/class-ab-amplifier")} className="dual-media"><Image src="/projects/bias-schematic.webp" alt="Class-AB amplifier bias and startup schematic" width={1920} height={1080} sizes="(max-width: 800px) 50vw, 24vw" /><Image src="/projects/opamp-layout.webp" alt="Class-AB amplifier full-custom layout" width={937} height={759} sizes="(max-width: 800px) 50vw, 24vw" /></Link>
          <div className="showcase-copy"><p className="eyebrow">Analog IC · Layout · PEX</p><h3>Class-AB Audio Amplifier</h3><p>{zh ? "GF 0.18 µm 晶体管级设计、full-custom layout、DRC/LVS/PEX、后仿与 process-corner 仿真。" : "GF 0.18 µm transistor-level design, full-custom layout, DRC/LVS/PEX, post-layout and process-corner simulation."}</p><Link className="card-link" href={href("/projects/class-ab-amplifier")}>{t.view} →</Link></div>
        </article>
        <article className="showcase-card video-card">
          <div className="video-preview"><iframe src="https://player.bilibili.com/player.html?bvid=BV1hiQXBFEzB&autoplay=0" title="Multi-vehicle smart car demo" loading="lazy" allowFullScreen /></div>
          <div className="showcase-copy"><p className="eyebrow">Embedded · PCB · System Bring-Up</p><h3>{zh ? "多车编队智能车" : "Multi-Vehicle Formation Smart Car"}</h3><p>{zh ? "主要负责 PCB、装配焊接、Bluetooth-UART 车辆通信、PID 参数整定与整车联调。全国总决赛二等奖。" : "PCB design and bring-up, Bluetooth-UART communication, PID tuning, and vehicle integration. National Second Prize."}</p><div className="inline-links"><Link className="card-link" href={href("/projects/smart-car")}>{t.view} →</Link><a className="card-link" href="https://www.bilibili.com/video/BV1hiQXBFEzB" target="_blank" rel="noreferrer">{t.demo} ↗</a></div></div>
        </article>
        <article className="showcase-card">
          <Link href={href("/projects/sspp-filter")} className="showcase-media"><Image src="/papers/SSPP.webp" alt="Interdigital SSPP filter structure, prototype, and response" width={1105} height={859} sizes="(max-width: 800px) 100vw, 45vw" /></Link>
          <div className="showcase-copy"><p className="eyebrow">RF · CST · PCB Measurement</p><h3>{zh ? "交指结构 SSPP 低通滤波器" : "Interdigital SSPP Low-Pass Filter"}</h3><p>{zh ? "CST 结构设计与仿真、FR-4 PCB 样机、Keysight VNA 测试及第一作者论文。" : "CST design and simulation, an FR-4 PCB prototype, Keysight VNA measurement, and a first-author paper."}</p><Link className="card-link" href={href("/projects/sspp-filter")}>{t.view} →</Link></div>
        </article>
      </div>
    </section>

    <section className="page-shell home-section compact-grid">
      <article className="compact-panel experience-panel"><p className="eyebrow">{t.experience}</p><div className="compact-title"><h2>Infineon Technologies Singapore</h2><span>{t.ongoing}</span></div><p><strong>Analog IC Design Intern</strong> · 2026.06–2027.04</p><p>{t.experienceText}</p><Link className="card-link" href={href("/experience")}>{zh ? "实习详情" : "Experience details"} →</Link></article>
      <article className="compact-panel"><p className="eyebrow">{t.more}</p><div className="mini-project"><div><h3>GF 22 nm ASIC Design Flow</h3><p>Design Compiler · STA · Innovus · CTS · PnR</p></div><Link href={href("/projects/digital-ic-flow")}>→</Link></div><div className="mini-project"><div><h3>Bandgap Reference</h3><p>TSMC 0.18 µm · Schematic · Temperature Sweep</p></div><Link href={href("/projects/bandgap-reference")}>→</Link></div><Link className="card-link" href={href("/projects")}>{t.allProjects} →</Link></article>
    </section>

    <section className="page-shell home-section support-grid">
      <article className="support-card"><p className="eyebrow">{t.publications}</p><h3>Micromachines 2023 · First Author</h3><p>Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter Based on Interdigital Structure</p><Link href={href("/publications")}>{zh ? "论文与专利" : "Publications"} →</Link></article>
      <article className="support-card"><p className="eyebrow">{t.awards}</p><h3>{zh ? "全国大学生智能汽车竞赛 · 全国二等奖" : "National Smart Car Competition · Second Prize"}</h3><p>{zh ? "另获江苏省 TI 杯一等奖、全国大学生电子设计竞赛江苏赛区二等奖。" : "Also awarded a Jiangsu TI Cup First Prize and a Jiangsu Division Electronic Design Contest Second Prize."}</p><Link href={href("/awards")}>{zh ? "全部奖项" : "All awards"} →</Link></article>
    </section>

    <section className="page-shell education-strip"><p className="eyebrow">{t.education}</p><div><span>2025–2027</span><strong>TUM / NTU</strong><p>M.Sc. Integrated Circuit Design</p></div><div><span>2020–2024</span><strong>{zh ? "江苏师范大学" : "Jiangsu Normal University"}</strong><p>B.Eng. Electronic Information Engineering</p></div></section>
  </main>;
}

export default function Home() { return <HomePage locale="zh" />; }
