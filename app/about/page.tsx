import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const areas = {
  zh: [
    ["数字集成电路 / 片上系统", "寄存器传输级设计与系统调试", "使用 Verilog 和 SystemVerilog 开发多周期 RV32E 处理器，完成有效—就绪控制、AXI/APB 总线集成、NEMU 差分测试和波形调试。", "/projects/riscv-cpu"],
    ["混合信号设计", "晶体管级电路与全定制版图", "使用 Cadence Virtuoso 完成电路和版图设计，用 Calibre 进行版图检查和寄生参数提取，并开展后仿真。", "/projects/class-ab-amplifier"],
    ["嵌入式 / 硬件", "印制电路板与整机调试", "参与印制电路板设计、焊接返修，以及微控制器外设、传感器、电机控制和整车系统调试。", "/projects/smart-car"],
  ],
  en: [
    ["Digital IC / SoC", "RTL, interfaces, and debug", "Verilog/SystemVerilog, a multi-cycle RV32E CPU, valid-ready control, AXI/APB integration, NEMU difftest, Verilator, waveform and transaction-level debugging.", "/projects/riscv-cpu"],
    ["Analog / Mixed-Signal", "Analog circuit design and layout", "My Class-AB amplifier project covers schematic design and custom layout in Virtuoso, physical verification in Calibre, and post-layout simulation.", "/projects/class-ab-amplifier"],
    ["Hardware / Embedded", "Boards and system bring-up", "PCB design, assembly, soldering and rework, MCU interfaces, sensors, motor-control integration, and system-level debugging.", "/projects/smart-car"],
  ],
} as const;

export const metadata = pageMetadata("教育背景与技能方向", "郜周豪的教育背景、技术方向和相关项目。", "/about", "zh");

export function AboutPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
    <p className="eyebrow">{zh ? "教育背景" : "About"}</p>
    <h1 className="page-title">{zh ? "集成电路设计硕士在读" : "About me"}</h1>
    <p className="lead" style={{ marginTop: "1.5rem" }}>{zh ? "就读于慕尼黑工业大学与南洋理工大学联合培养的集成电路设计硕士项目。学习和项目经历以数字集成电路、寄存器传输级设计、片上系统和混合信号设计为主。" : "I am a full-time M.Sc. student in Integrated Circuit Design in the joint TUM–NTU programme. My work spans transistor-level analog design, RTL and SoC integration, verification, and hands-on hardware development."}</p>

    <section className="section"><p className="eyebrow">{zh ? "技术方向" : "Technical scope"}</p><h2 className="section-heading">{zh ? "数字集成电路、混合信号与硬件开发" : "What I work on"}</h2><div className="card-grid">{areas[locale].map(([label, title, text, href]) => <article className="card" key={href}><p className="eyebrow">{label}</p><h3>{title}</h3><p>{text}</p><Link className="card-link" href={localizedPath(href, locale)}>{zh ? "查看项目 →" : "Explore the project →"}</Link></article>)}</div></section>

    <section className="section"><p className="eyebrow">{zh ? "教育经历" : "Education"}</p><h2 className="section-heading">{zh ? "学校与学位" : "Universities and degrees"}</h2><div className="school-grid"><article className="school-profile school-profile-graduate"><div className="school-logo-row"><Image src="/brand/tum.svg" alt="Technical University of Munich" width={112} height={58} className="school-logo school-logo-tum" /><Image src="/brand/ntu-logo.png" alt="Nanyang Technological University Singapore" width={180} height={84} className="school-logo school-logo-ntu" /></div><h3>{zh ? "慕尼黑工业大学 / 南洋理工大学" : "Technical University of Munich / NTU Singapore"}</h3><p>{zh ? "集成电路设计理学硕士 · 2025.08–2027.07（预计）" : "M.Sc. Integrated Circuit Design · Aug 2025–Jul 2027 (expected)"}</p><p>{zh ? "两校联合培养的全日制硕士项目，毕业后由两校联合授予学位。" : "A full-time joint programme leading to a degree jointly awarded by both universities."}</p></article><article className="school-profile"><div className="school-logo-row"><Image src="/brand/jsnu.png" alt="Jiangsu Normal University" width={74} height={74} className="school-logo school-logo-jsnu" /></div><h3>{zh ? "江苏师范大学" : "Jiangsu Normal University"}</h3><p>{zh ? "电子信息工程工学学士 · 2020.09–2024.06" : "B.Eng. Electronic Information Engineering · Sep 2020–Jun 2024"}</p><p>{zh ? "通过 CET-4 和 CET-6；雅思 7.0。" : "IELTS 7.0; Passed CET-4 and CET-6."}</p></article></div></section>

    <section className="section"><p className="eyebrow">{zh ? "个人兴趣" : "Beyond the portfolio"}</p><h2 className="section-heading">{zh ? "动手制作与日常兴趣" : "Hands-on making"}</h2><p className="section-intro">{zh ? "三维打印、手工制作、音乐，以及部分校园生活记录。" : "Outside IC design, I enjoy 3D printing, crafts, and music. Here are some things I have made and moments from university life."}</p><Link className="card-link" href={localizedPath("/beyond", locale)}>{zh ? "查看更多 →" : "View Beyond Engineering →"}</Link></section>
  </main>;
}

export default function Page() { return <AboutPage locale="zh" />; }
