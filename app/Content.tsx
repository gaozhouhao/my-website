import ReadingText from "../components/ReadingText";
import CompetitionVideo from "../components/CompetitionVideo";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../lib/i18n";
import { localizedPath } from "../lib/i18n";
import { pageMetadata, site } from "../lib/site";

const copy = {
  zh: {
    meta: "郜周豪的集成电路设计作品集，重点展示数字集成电路、寄存器传输级设计、片上系统与硬件项目。",
    degree: "慕尼黑工业大学与南洋理工大学 · 集成电路设计理学硕士 · 2027 届",
    internship: "英飞凌科技（新加坡亚太总部）· 混合信号设计工程师",
    direction: "数字集成电路 · 寄存器传输级与片上系统设计 · 混合信号设计",
    projects: "项目经历",
    email: "邮箱",
    resume: "简历整理中",
    selected: "代表项目",
    selectedIntro: "部分电路、处理器与智能车项目。",
    view: "项目详情",
    experience: "实习经历",
    ongoing: "进行中",
    experienceText: "参与能量收集芯片设计；芯片可在 0.1 V 输入电压下启动并工作。",
    more: "更多项目",
    publications: "论文与专利",
    awards: "奖项荣誉",
    education: "教育背景",
    allProjects: "查看全部项目",
  },
  en: {
    meta: "Gao Zhouhao's IC design portfolio with projects across analog IC, RTL, SoC, ASIC flow, and hardware.",
    degree: "TUM / NTU · M.Sc. Integrated Circuit Design · Expected graduation: 2027",
    internship: "Infineon Technologies Singapore · Mixed-Signal Design Engineer",
    direction: "Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design",
    projects: "Projects",
    email: "Email",
    resume: "Resume coming soon",
    selected: "Selected Projects",
    selectedIntro: "A selection of my work in circuit design, processors, and embedded hardware.",
    view: "Project details",
    experience: "Experience",
    ongoing: "Ongoing",
    experienceText: "Currently working on an energy-harvesting chip that can start up and operate at an input voltage of 0.1 V.",
    more: "More Engineering Work",
    publications: "Publications & Patent",
    awards: "Awards",
    education: "Education",
    allProjects: "View all projects",
  },
} as const;

export const metadata = pageMetadata("集成电路设计作品集", copy.zh.meta, "/", "zh");

export function HomePage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const zh = locale === "zh";
  const href = (path: string) => localizedPath(path, locale);

  return <main id="main-content" lang={zh ? "zh-CN" : "en"}>
    <section className="page-shell hero-compact">
      <ReadingText as="p" className="eyebrow">{locale === "zh" ? "2027 届 · 集成电路设计" : "2027 · IC Design"}</ReadingText>
      <ReadingText as="h1" className="display-title">{zh ? "郜周豪" : "Gao Zhouhao"}</ReadingText>
      <div className="hero-facts">
        <ReadingText as="p">{t.degree}</ReadingText><ReadingText as="p">{t.internship}</ReadingText><ReadingText as="p">{t.direction}</ReadingText>
      </div>
      <div className="button-row compact-buttons">
        <Link className="button button-primary" href={href("/projects")}>{t.projects}</Link>
        <a className="button" href={site.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="button" href={`mailto:${site.email}`}>{t.email}</a>
        <span className="button button-muted" aria-disabled="true">{t.resume}</span>
      </div>
    </section>

    <section className="page-shell home-section">
      <div className="section-bar"><div><ReadingText as="p" className="eyebrow">01 / {zh ? "项目选集" : "Selected work"}</ReadingText><ReadingText as="h2" className="home-heading">{t.selected}</ReadingText></div><ReadingText as="p">{t.selectedIntro}</ReadingText></div>
      <div className="showcase-grid">
        <article className="showcase-card showcase-wide">
          <Link href={href("/projects/riscv-cpu")} className="showcase-media"><Image src="/projects/riscv32-layout.png" alt={locale === "zh" ? "RV32E RISC-V 处理器版图" : "RV32E RISC-V processor layout"} width={765} height={762} sizes="(max-width: 800px) 100vw, 55vw" priority /></Link>
          <div className="showcase-copy"><ReadingText as="p" className="eyebrow">{locale === "zh" ? "数字集成电路 · 寄存器传输级设计 · 片上系统" : "Digital IC · RTL · SoC"}</ReadingText><ReadingText as="h3">{zh ? "五级流水 RISC-V 处理器与片上系统" : "Five-Stage RISC-V CPU / SoC"}</ReadingText><ReadingText as="p">{zh ? "从处理器 RTL 到片上系统集成，完成一套可运行程序的 RV32E 处理器。" : "An RV32E processor built from RTL through SoC integration, with NEMU differential testing and memory bring-up."}</ReadingText><div className="project-facts"><span>{zh ? "五级流水线" : "Five-stage pipeline"}</span><span>{zh ? "2-bit 分支预测" : "2-bit branch prediction"}</span></div><Link className="card-link" href={href("/projects/riscv-cpu")}>{t.view} →</Link></div>
        </article>
        <article className="showcase-card showcase-wide">
          <Link href={href("/projects/int8-systolic-npu")} className="showcase-media"><Image src="/projects/npu-project-cover.png" alt={zh ? "INT8 NPU 模块级架构图" : "INT8 NPU block architecture"} width={1492} height={1492} style={{objectFit:"contain"}} sizes="(max-width: 800px) 100vw, 55vw" /></Link>
          <div className="showcase-copy"><ReadingText as="p" className="eyebrow">{zh ? "数字 IC · NPU 微架构 · RTL" : "Digital IC · NPU Architecture · RTL"}</ReadingText><ReadingText as="h3">{zh ? "自研 INT8 NPU 与 ResNet-50 整数执行" : "INT8 NPU and ResNet-50 Integer Execution"}</ReadingText><ReadingText as="p">{zh ? "独立设计 4×4 脉动阵列与 TFLite/ONNX 编译工具。ResNet-50 的 72 条硬件任务全部通过 RTL 数值校验。" : "A custom 4×4 INT8 array and TFLite/ONNX compiler. All 72 ResNet-50 hardware tasks pass numerical checks in RTL simulation."}</ReadingText><div className="project-facts"><span>{zh ? "ResNet-50 周期 −59.65%" : "ResNet-50 cycles −59.65%"}</span><span>{zh ? "同频加速 2.48× · 相比 Burst 串行基线" : "2.48× at equal clock · vs. Burst serial baseline"}</span></div><Link className="card-link" href={href("/projects/int8-systolic-npu")}>{t.view} →</Link></div>
        </article>
        <article className="showcase-card">
          <Link href={href("/projects/class-ab-amplifier")} className="showcase-media"><Image src="/projects/opamp-layout.webp" alt={locale === "zh" ? "Class AB 音频放大器全定制版图" : "Class-AB amplifier full-custom layout"} width={937} height={759} sizes="(max-width: 800px) 100vw, 45vw" /></Link>
          <div className="showcase-copy"><ReadingText as="p" className="eyebrow">{locale === "zh" ? "模拟集成电路 · 版图 · 寄生参数提取" : "Analog IC · Layout · PEX"}</ReadingText><ReadingText as="h3">{locale === "zh" ? "Class AB 音频放大器" : "Class-AB Audio Amplifier"}</ReadingText><ReadingText as="p">{zh ? "基于 GF 0.18 µm 工艺，完成晶体管级设计、全定制版图、物理验证与寄生参数提取，以及后仿真和工艺角仿真。" : "Designed a Class-AB amplifier in GF 0.18 µm CMOS, from transistor-level circuits to custom layout. Completed DRC, LVS, parasitic extraction, and post-layout and process-corner simulations."}</ReadingText><Link className="card-link" href={href("/projects/class-ab-amplifier")}>{t.view} →</Link></div>
        </article>
        <article className="showcase-card video-card">
          <div className="video-preview"><CompetitionVideo bvid="BV1hiQXBFEzB" title={locale === "zh" ? "多车编队智能车比赛演示" : "Multi-vehicle smart car competition demo"} /></div>
          <div className="showcase-copy"><ReadingText as="p" className="eyebrow">{locale === "zh" ? "嵌入式 · 印制电路板 · 系统联调" : "Embedded · PCB · System Bring-Up"}</ReadingText><ReadingText as="h3">{zh ? "多车编队智能车" : "Multi-Vehicle Smart Car Formation"}</ReadingText><ReadingText as="p">{zh ? "我主要负责电路板设计和焊接、车辆间蓝牙通信，以及控制参数调整和整车调试。团队获全国总决赛二等奖。" : "Our team won second prize at the national finals. I worked on the boards, inter-vehicle communication, control tuning, and vehicle integration."}</ReadingText><div className="inline-links"><Link className="card-link" href={href("/projects/smart-car")}>{t.view} →</Link></div></div>
        </article>
        <article className="showcase-card video-card">
          <CompetitionVideo bvid="BV1QXQQBbEMi" title={zh ? "TI 杯双车跟随系统比赛演示" : "TI Cup dual-vehicle following demo"} />
          <div className="showcase-copy">
            <ReadingText as="p" className="eyebrow">{zh ? "电子设计竞赛 · 江苏省一等奖" : "TI Cup · Jiangsu First Prize"}</ReadingText>
            <ReadingText as="h3">{zh ? "双车跟随系统" : "Dual-Vehicle Following System"}</ReadingText>
            <ReadingText as="p">{zh ? "采用 MSP430F5529 控制器，通过灰度传感器循迹、超声测距和蓝牙通信，实现两辆车的协同跟随。" : "Built around the MSP430F5529, the two cars follow a track and maintain their spacing using line sensors, ultrasonic ranging, and Bluetooth communication."}</ReadingText>
            <Link className="card-link" href={href("/projects/dual-vehicle-following")}>{t.view} →</Link>{" · "}<a className="card-link" href="/certificates/awards/previews/ti-cup-2022.webp" target="_blank" rel="noreferrer">{zh ? "查看奖状" : "View certificate"} ↗</a>
          </div>
        </article>
        <article className="showcase-card">
          <Link href={href("/projects/sspp-filter")} className="showcase-media"><Image src="/papers/SSPP.webp" alt={locale === "zh" ? "交指结构人工表面等离子体激元滤波器结构、样机与响应" : "Interdigital SSPP filter structure, prototype, and response"} width={1105} height={859} sizes="(max-width: 800px) 100vw, 45vw" /></Link>
          <div className="showcase-copy"><ReadingText as="p" className="eyebrow">{locale === "zh" ? "射频 · 电磁仿真 · 电路板测试" : "RF · CST · PCB Measurement"}</ReadingText><ReadingText as="h3">{zh ? "交指结构 SSPP 低通滤波器" : "Interdigital SSPP Low-Pass Filter"}</ReadingText><ReadingText as="p">{zh ? "从结构设计和电磁仿真，到制作电路板并测试，完成了一款小型滤波器。成果以第一作者发表于 Micromachines。" : "I designed, built, and measured a compact RF filter. This work led to a first-author paper in Micromachines."}</ReadingText><Link className="card-link" href={href("/projects/sspp-filter")}>{t.view} →</Link></div>
        </article>
      </div>
    </section>

    <section className="page-shell home-section compact-grid">
      <article className="compact-panel experience-panel"><ReadingText as="p" className="eyebrow">{t.experience}</ReadingText><div className="compact-title"><div className="brand-title"><Image src="/brand/infineon.svg" alt="Infineon" width={120} height={53} className="brand-logo brand-logo-infineon" /><ReadingText as="h2">{locale === "zh" ? "英飞凌科技（新加坡亚太总部）" : "Infineon Technologies Singapore"}</ReadingText></div><span>{t.ongoing}</span></div><ReadingText as="p"><strong>{locale === "zh" ? "混合信号设计工程师" : "Mixed-Signal Design Engineer"}</strong> · 2026.06–2027.04</ReadingText><ReadingText as="p">{t.experienceText}</ReadingText><Link className="card-link" href={href("/experience")}>{zh ? "实习详情" : "Experience details"} →</Link></article>
      <article className="compact-panel"><ReadingText as="p" className="eyebrow">{t.more}</ReadingText><div className="mini-project"><div><ReadingText as="h3">{locale === "zh" ? "NM6008 数字集成电路设计实验" : "NM6008 Digital IC Design Lab"}</ReadingText><ReadingText as="p">{locale === "zh" ? "课程基础实验 · 逻辑综合 · 布局布线" : "Introductory coursework · Synthesis · Place and route"}</ReadingText></div><Link href={href("/projects/digital-ic-flow")} aria-label={zh ? "查看数字集成电路设计实验" : "View Digital IC Design Lab"}>→</Link></div><div className="mini-project"><div><ReadingText as="h3">{locale === "zh" ? "带隙基准电压" : "Bandgap Reference"}</ReadingText><ReadingText as="p">{locale === "zh" ? "台积电 0.18 微米 · 原理图 · 温度扫描" : "TSMC 0.18 µm · Schematic · Temperature Sweep"}</ReadingText></div><Link href={href("/projects/bandgap-reference")} aria-label={zh ? "查看带隙基准电压电路" : "View Bandgap Reference"}>→</Link></div><Link className="card-link" href={href("/projects")}>{t.allProjects} →</Link></article>
    </section>

    <section className="page-shell home-section support-grid">
      <article className="support-card"><ReadingText as="p" className="eyebrow">{t.publications}</ReadingText><ReadingText as="h3">{locale === "zh" ? "Micromachines 2023 · 第一作者" : "Micromachines 2023 · First Author"}</ReadingText><ReadingText as="p">{locale === "zh" ? "基于交指结构的超紧凑低通人工表面等离子体激元滤波器" : "Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter Based on Interdigital Structure"}</ReadingText><Link href={href("/publications")}>{zh ? "论文与专利" : "Publications"} →</Link></article>
      <article className="support-card"><ReadingText as="p" className="eyebrow">{t.awards}</ReadingText><ReadingText as="h3">{zh ? "全国大学生智能汽车竞赛 · 全国二等奖" : "National Smart Car Competition · National Finals Second Prize"}</ReadingText><ReadingText as="p">{zh ? "另获江苏省 TI 杯一等奖、全国大学生电子设计竞赛江苏赛区二等奖。" : "Also awarded a Jiangsu TI Cup First Prize and a Jiangsu Division Electronic Design Contest Second Prize."}</ReadingText><Link href={href("/awards")}>{zh ? "全部奖项" : "All awards"} →</Link></article>
    </section>

    <section className="page-shell education-strip"><ReadingText as="p" className="eyebrow">{t.education}</ReadingText><div className="education-entry"><span>2025–2027</span><div className="education-copy"><div className="education-logos"><Image src="/brand/tum.svg" alt="Technical University of Munich" width={82} height={43} className="education-logo education-logo-tum" /><Image src="/brand/ntu-logo.png" alt="Nanyang Technological University Singapore" width={180} height={64} className="education-logo education-logo-ntu" /></div><strong>{locale === "zh" ? "慕尼黑工业大学 / 南洋理工大学" : "TUM / NTU"}</strong><ReadingText as="p">{locale === "zh" ? "集成电路设计理学硕士" : "M.Sc. Integrated Circuit Design"}</ReadingText></div></div><div className="education-entry"><span>2020–2024</span><div className="education-copy"><div className="education-logos education-logos-single"><Image src="/brand/jsnu.png" alt="Jiangsu Normal University" width={48} height={48} className="education-logo education-logo-jsnu" /></div><strong>{zh ? "江苏师范大学" : "Jiangsu Normal University"}</strong><ReadingText as="p">{locale === "zh" ? "电子信息工程工学学士" : "B.Eng. Electronic Information Engineering"}</ReadingText></div></div></section>
  </main>;
}

export default function Home() { return <HomePage locale="zh" />; }
