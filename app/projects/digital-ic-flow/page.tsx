import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Digital IC Design Lab", "NM6008：GF 22 nm CMOS 下的数字 IC 设计流程实践。", "/projects/digital-ic-flow", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · 设计流程", title: "Digital IC Design Lab",
    lead: "NTU-TUM MSc (IC Design) NM6008 课程项目。基于 GF 22 nm CMOS 工艺库，完成从 CMOS 基础单元、Verilog RTL 到综合、布局布线和物理验证的数字 IC 设计流程练习。",
    work: "完成内容", workText: "使用 Virtuoso 设计 CMOS Inverter 和 NAND Gate，并完成版图与 Calibre DRC/LVS/PEX。使用 Verilog 实现并验证 Full Adder、FSM 和 Matrix Multiplier；随后在 Design Compiler 中完成综合与时序分析，并在 Innovus 中对 Matrix Multiplier 进行布局布线练习。",
    takeaway: "项目收获", takeawayText: "熟悉标准单元 ASIC 从 RTL 到物理实现的基本链路，以及 Cadence 与 Synopsys 工具之间的交接方式。",
    scope: "项目性质", scopeValue: "NM6008 课程实验", tools: "工具", result: "课程成绩", resultValue: "数字集成电路设计实验（二）— A",
    boundary: "课程项目，展示已完成的设计流程练习；不作为独立流片或签核成果表述。",
  },
  en: {
    label: "Digital IC · Design Flow", title: "Digital IC Design Lab",
    lead: "An NM6008 project in the NTU-TUM MSc (IC Design), using GF 22 nm CMOS libraries to practise a digital IC flow from CMOS basic cells and Verilog RTL through synthesis, place and route, and physical verification.",
    work: "Completed work", workText: "Designed CMOS inverter and NAND cells in Virtuoso with layout and Calibre DRC/LVS/PEX. Implemented and verified a full adder, FSM, and matrix multiplier in Verilog, then practised synthesis and timing analysis in Design Compiler and matrix-multiplier place and route in Innovus.",
    takeaway: "What I took from it", takeawayText: "Familiarity with the basic standard-cell ASIC path from RTL to physical implementation and the hand-off between Cadence and Synopsys tools.",
    scope: "Scope", scopeValue: "NM6008 course lab", tools: "Tools", result: "Course result", resultValue: "Laboratory 2 Digital IC Design — A",
    boundary: "Coursework demonstrating completed flow practice; it is not presented as an independent tape-out or sign-off result.",
  },
} as const;

export function DigitalIcFlowPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.label}</p><h1 className="page-title">{t.title}</h1><p className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</p>
    <section className="section split"><div className="prose-section"><h2>{t.work}</h2><p>{t.workText}</p><h2>{t.takeaway}</h2><p>{t.takeawayText}</p></div><dl className="fact-panel"><dt>{t.scope}</dt><dd>{t.scopeValue}</dd><dt>{t.tools}</dt><dd>Cadence Virtuoso, Calibre, VCS/DVE, Verilog, Design Compiler, Innovus</dd><dt>{t.result}</dt><dd>{t.resultValue}</dd></dl></section>
    <p className="status-note prose-section">{t.boundary}</p><ProjectNavigation />
  </main>;
}
export default function Page() { return <DigitalIcFlowPage locale="zh" />; }
