import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Digital IC Design Lab — ASIC Design Flow Implementation", "NM6008：基于 GF 22 nm CMOS 的 RTL、综合、时序分析、布局布线与物理验证流程实践。", "/projects/digital-ic-flow", "zh");

const stages = ["RTL Design", "Functional Simulation (VCS)", "Logic Synthesis (Design Compiler)", "Gate-level Simulation", "Place & Route (Innovus)", "DRC/LVS Verification", "Post-layout Analysis"];

const copy = {
  zh: {
    label: "数字集成电路 · ASIC 设计流程", title: "Digital IC Design Lab — ASIC Design Flow Implementation",
    lead: "完成 NTU-TUM MSc (IC Design) NM6008 Digital IC Design Lab，基于 GF 22 nm CMOS 工艺进行从 RTL 设计到物理实现的完整数字 IC 设计流程实践，覆盖逻辑设计、仿真验证、综合、时序分析、布局实现和物理验证。",
    custom: "全定制 CMOS 单元设计", customText: "使用 Cadence Virtuoso 完成 CMOS Inverter 与 NAND Gate 的晶体管级设计，包括 schematic、symbol 和 custom layout。使用 Calibre 完成 DRC、LVS 与寄生参数提取（PEX），并对比 pre-layout 与 post-layout simulation，观察寄生参数对延迟和电路行为的影响。",
    rtl: "RTL 设计与功能验证", rtlText: "使用 Verilog HDL 完成 1-bit Full Adder、FSM 控制器和 Matrix Multiplier 等数字模块设计，并编写 testbench 生成测试向量。通过 VCS/DVE 开展 RTL simulation 与 waveform analysis，建立从功能实现到波形定位的验证闭环。",
    synthesis: "逻辑综合与时序分析", synthesisText: "使用 Synopsys Design Compiler 将 RTL 综合为基于 CMOS standard-cell library 的 gate-level netlist。流程包括 constraint 设置、technology mapping 和 timing analysis；随后进行 post-synthesis simulation，检查 timing annotation 后的功能一致性。",
    physical: "物理实现", physicalText: "使用 Cadence Innovus 完成 Matrix Multiplier 的 Place & Route 练习：floorplanning、power ring generation、power/GND routing、standard-cell placement、clock routing 和 signal routing。该过程对应从 synthesized netlist 到 physical layout 的实现链路。",
    methodology: "ASIC 设计方法", methodologyText: "本项目强调基于 standard-cell 的 ASIC 设计方法，而非逐个课程模块的罗列。它把 HDL design、simulation、synthesis、layout、DRC/LVS 与 post-layout analysis 连接成一条可追溯的工程流程。",
    factScope: "项目性质", factValue: "NTU-TUM MSc (IC Design) NM6008 实验", tools: "EDA 工具链", result: "课程成绩", resultValue: "数字集成电路设计实验（二）— A",
    boundary: "本页描述的是课程中完成的 ASIC flow 实践与工具训练，不将其表述为量产芯片签核或独立流片成果。",
  },
  en: {
    label: "Digital IC · ASIC Flow", title: "Digital IC Design Lab — ASIC Design Flow Implementation",
    lead: "NM6008 Digital IC Design Lab in the NTU-TUM MSc (IC Design), covering an end-to-end digital IC flow in GF 22 nm CMOS: RTL design, functional verification, synthesis, timing analysis, physical implementation, and physical verification.",
    custom: "Full-Custom CMOS Cell Design", customText: "Built CMOS inverter and NAND-gate transistor-level designs in Cadence Virtuoso, including schematics, symbols, and custom layouts. Calibre DRC, LVS, and PEX were used to compare pre-layout and post-layout simulation behavior and observe parasitic effects.",
    rtl: "RTL Design & Functional Verification", rtlText: "Implemented digital exercises including a 1-bit full adder, an FSM controller, and a matrix multiplier in Verilog HDL. Testbenches, VCS/DVE RTL simulation, and waveform analysis formed the functional-verification loop.",
    synthesis: "Logic Synthesis & Timing Analysis", synthesisText: "Used Synopsys Design Compiler to synthesize RTL into a gate-level netlist against a CMOS standard-cell library. The work included constraints, technology mapping, timing analysis, and post-synthesis simulation with timing annotation.",
    physical: "Physical Design Implementation", physicalText: "Used Cadence Innovus for the matrix-multiplier Place & Route exercise: floorplanning, power-ring generation, power/GND routing, standard-cell placement, clock routing, and signal routing from the synthesized netlist to physical layout.",
    methodology: "ASIC Design Methodology", methodologyText: "The project is presented as a standard-cell ASIC design methodology exercise rather than a list of course modules, connecting HDL design, simulation, synthesis, layout, DRC/LVS, and post-layout analysis into one traceable engineering flow.",
    factScope: "Scope", factValue: "NTU-TUM MSc (IC Design) NM6008 lab", tools: "EDA stack", result: "Course result", resultValue: "Laboratory 2 Digital IC Design — A",
    boundary: "This page describes completed coursework and EDA-flow practice. It does not claim production sign-off or an independent tape-out.",
  },
} as const;

export function DigitalIcFlowPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const sections: Array<[string, string]> = [[t.custom, t.customText], [t.rtl, t.rtlText], [t.synthesis, t.synthesisText], [t.physical, t.physicalText]];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.label}</p><h1 className="page-title">{t.title}</h1><p className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</p>
    <section className="section split"><div className="prose-section"><h2>{t.methodology}</h2><p>{t.methodologyText}</p></div><dl className="fact-panel"><dt>{t.factScope}</dt><dd>{t.factValue}</dd><dt>{t.tools}</dt><dd>Cadence Virtuoso, Calibre, VCS/DVE, Verilog, Synopsys Design Compiler, Cadence Innovus</dd><dt>{t.result}</dt><dd>{t.resultValue}</dd></dl></section>
    <section className="section"><div className="challenge-grid">{sections.map(([title, text], index) => <article className="challenge-card" key={title}><p className="eyebrow">0{index + 1}</p><h2>{title}</h2><p>{text}</p></article>)}</div></section>
    <section className="prose-section"><h2>{t.methodology}</h2><div className="asic-flow">{stages.map((stage, index) => <span key={stage}>{stage}{index < stages.length - 1 && <b>↓</b>}</span>)}</div></section>
    <p className="status-note prose-section">{t.boundary}</p><ProjectNavigation />
  </main>;
}
export default function Page() { return <DigitalIcFlowPage locale="zh" />; }
