import ReadingText from "../../components/ReadingText";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "../../lib/i18n";
import { localizedPath } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

const areas = {
  zh: [
    ["数字 IC / SoC", "RTL 设计与系统调试", "使用 Verilog 和 SystemVerilog 实现 RV32E 五级流水线处理器与 2-bit 分支预测，完成 AXI/APB 总线集成、NEMU 差分测试和波形调试。", "/projects/riscv-cpu"],
    ["模拟 IC 设计", "电路设计与全定制版图", "使用 Virtuoso 完成 Class-AB 音频放大器原理图与全定制版图设计，用 Calibre 完成物理验证与寄生参数提取，并进行后仿真。", "/projects/class-ab-amplifier"],
    ["嵌入式 / 硬件", "电路板设计与整车联调", "负责电路板设计、焊接与硬件调试，参与蓝牙串口通信、PID 参数整定和整车联调。", "/projects/smart-car"],
  ],
  en: [
    ["Digital IC / SoC", "RTL design and system debugging", "Implemented a five-stage RV32E CPU with 2-bit branch prediction in Verilog and SystemVerilog. Completed AXI/APB integration, differential testing against NEMU, and waveform debugging.", "/projects/riscv-cpu"],
    ["Analog IC Design", "Circuit design and full-custom layout", "Designed the Class-AB amplifier schematic and full-custom layout in Virtuoso. Completed physical verification and parasitic extraction in Calibre, followed by post-layout simulation.", "/projects/class-ab-amplifier"],
    ["Hardware / Embedded", "PCB design and vehicle integration", "Handled PCB design, assembly, and hardware debugging. Contributed to Bluetooth-UART communication, PID tuning, and vehicle integration.", "/projects/smart-car"],
  ],
} as const;

export const metadata = pageMetadata("教育背景与技能方向", "郜周豪的教育背景、技术方向和相关项目。", "/about", "zh");

export function AboutPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
    <ReadingText as="h1" className="page-title">{zh ? "集成电路设计硕士在读" : "About me"}</ReadingText>

    <section className="section">
      <ReadingText as="h2" className="section-heading">{zh ? "学校与学位" : "Universities and degrees"}</ReadingText>
      <div className="school-grid">
        <article className="school-profile school-profile-graduate">
          <div className="school-logo-row">
            <Image src="/brand/tum.svg" alt="Technical University of Munich" width={112} height={58} className="school-logo school-logo-tum" />
            <Image src="/brand/ntu-logo.png" alt="Nanyang Technological University Singapore" width={180} height={84} className="school-logo school-logo-ntu" />
          </div>
          <ReadingText as="h3">{zh ? "慕尼黑工业大学 / 南洋理工大学" : "Technical University of Munich / Nanyang Technological University"}</ReadingText>
          <ReadingText as="p">{zh ? "集成电路设计理学硕士 · 2025.08–2027.07（预计）" : "M.Sc. Integrated Circuit Design · Aug 2025–Jul 2027 (expected)"}</ReadingText>
          <ReadingText as="p">{zh ? "全日制联合培养项目，学位由两校联合授予。" : "A full-time joint programme leading to a jointly awarded degree."}</ReadingText>
        </article>
        <article className="school-profile">
          <div className="school-logo-row"><Image src="/brand/jsnu.png" alt="Jiangsu Normal University" width={74} height={74} className="school-logo school-logo-jsnu" /></div>
          <ReadingText as="h3">{zh ? "江苏师范大学" : "Jiangsu Normal University"}</ReadingText>
          <ReadingText as="p">{zh ? "电子信息工程工学学士 · 2020.09–2024.06" : "B.Eng. Electronic Information Engineering · Sep 2020–Jun 2024"}</ReadingText>
        </article>
      </div>
      <ReadingText as="p" className="section-intro" style={{ marginTop: "1.5rem" }}>{zh ? "英语：雅思 7.0，通过大学英语四、六级。" : "English: IELTS 7.0; passed CET-4 and CET-6."}</ReadingText>
    </section>

    <section className="section"><ReadingText as="h2" className="section-heading">{zh ? "数字 IC、模拟电路与硬件开发" : "Digital IC, analog circuits, and hardware"}</ReadingText><div className="card-grid">{areas[locale].map(([label, title, text, href]) => <article className="card" key={href}><ReadingText as="p" className="eyebrow">{label}</ReadingText><ReadingText as="h3">{title}</ReadingText><ReadingText as="p">{text}</ReadingText><Link className="card-link" href={localizedPath(href, locale)}>{zh ? "查看项目 →" : "View project →"}</Link></article>)}</div></section>

    <section className="section"><ReadingText as="h2" className="section-heading">{zh ? "动手制作与日常兴趣" : "Making, music & life"}</ReadingText><ReadingText as="p" className="section-intro">{zh ? "三维打印、手工制作、音乐与校园生活记录。" : "3D printing, crafts, music, and moments from university life."}</ReadingText><Link className="card-link" href={localizedPath("/beyond", locale)}>{zh ? "查看更多 →" : "View interests →"}</Link></section>
  </main>;
}

export default function Page() { return <AboutPage locale="zh" />; }
