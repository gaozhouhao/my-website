import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("刺绣短路过孔纺织 HMSIC 天线", "基于刺绣短路过孔的带宽增强型纺织半模基片集成腔体天线论文项目。", "/projects/textile-hmsic-antenna", "zh");

export function TextileHmsicAntennaPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
    <p className="eyebrow">{zh ? "可穿戴天线 · 电磁仿真 · 论文" : "Wearable antenna · EM simulation · Paper"}</p>
    <h1 className="page-title">{zh ? "基于刺绣短路过孔的带宽增强型纺织 HMSIC 天线" : "Textile Bandwidth-Enhanced HMSIC Antenna with Embroidered Shorting Vias"}</h1>
    <p className="lead" style={{ marginTop: "1.5rem" }}>{zh ? "发表于 Micromachines 的纺织半模基片集成腔体天线研究。论文通过刺绣短路过孔调节谐振模式，使多个模式的工作频段合并，从而扩大 5 GHz WLAN 应用的阻抗带宽。" : "A Micromachines study of a textile half-mode substrate-integrated cavity antenna. Embroidered shorting vias tune the resonant modes so their operating bands merge, expanding the impedance bandwidth for 5 GHz WLAN use."}</p>
    <section className="section split"><figure className="evidence"><Image src="/papers/HMSIC.webp" alt={zh ? "纺织半模基片集成腔体天线论文插图" : "Textile HMSIC antenna from the published paper"} width={1071} height={681} sizes="(max-width:800px) 100vw,50vw" /><figcaption>{zh ? "论文中的纺织天线结构与样机。" : "Antenna structure and prototype from the paper."}</figcaption></figure><dl className="fact-panel"><dt>{zh ? "论文身份" : "Publication role"}</dt><dd>{zh ? "第四作者；参与验证工作" : "Fourth author; contributed to validation"}</dd><dt>{zh ? "期刊" : "Journal"}</dt><dd>Micromachines, 2024, 15(9), 1081</dd><dt>{zh ? "目标频段" : "Target band"}</dt><dd>5 GHz WLAN</dd><dt>{zh ? "实测 −10 dB 阻抗带宽" : "Measured −10 dB impedance band"}</dt><dd>4.87–6.17 GHz (23.5%)</dd></dl></section>
    <section className="prose-section"><h2>{zh ? "论文工作" : "What the paper does"}</h2><p>{zh ? "研究以基本 HMSIC 天线的电场分布为起点，在高阶模式 TM₂₁₀ᴴᴹ 与 TM₀₂₀ᴴᴹ 的零电场轨迹交点布置两个方形中空刺绣短路过孔。这样可将基模 TM₀₁₀ᴴᴹ 的频段向高频移动，并与两个高阶模式的频段合并，得到更宽的阻抗带宽。样机采用电脑刺绣制作，并通过仿真和实测评估自由空间、近人体和弯曲条件下的频率响应。" : "Starting from the electric-field distributions of a basic HMSIC antenna, the work places two square hollow embroidered shorting vias at the zero-field-trace intersections of the TM210HM and TM020HM higher-order modes. This shifts the TM010HM fundamental-mode band upward so it merges with the two higher-order bands. A computerized-embroidery prototype is evaluated in simulation and measurement in free space, near the body, and under bending."}</p></section>
    <section className="prose-section"><h2>{zh ? "项目边界" : "Scope"}</h2><p>{zh ? "本页将论文作为一个独立项目展示，主要说明研究方法和已发表结果；个人贡献按论文作者贡献声明表述，不延伸为未记录的设计或测试工作。" : "This page presents the paper as a distinct project and limits the stated personal role to the published author-contribution record."}</p></section>
    <div className="button-row"><a className="button button-primary" href="https://doi.org/10.3390/mi15091081" target="_blank" rel="noreferrer">{zh ? "查看论文" : "Read the paper"}</a></div><ProjectNavigation />
  </main>;
}
export default function Page() { return <TextileHmsicAntennaPage locale="zh" />; }
