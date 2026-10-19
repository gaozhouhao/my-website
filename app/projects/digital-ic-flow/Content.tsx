import ReadingText from "../../../components/ReadingText";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("数字集成电路设计实验", "NM6008：GF 22 nm CMOS 下的数字 IC 设计流程实践。", "/projects/digital-ic-flow", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · 设计流程", title: "数字集成电路设计实验",
    lead: "南洋理工大学与慕尼黑工业大学联合集成电路设计硕士项目中的 NM6008 课程实验。基于 GF 22 nm CMOS 工艺库，完成从 CMOS 基础单元、Verilog RTL 到综合、布局布线和物理验证的数字 IC 设计流程练习。",
    work: "完成内容", workText: "使用 Cadence Virtuoso 设计 CMOS 反相器和与非门，完成版图，并用 Calibre 进行设计规则检查（DRC）、版图与原理图一致性检查（LVS）和寄生参数提取（PEX）。使用 Verilog 实现并验证全加器、有限状态机（FSM）和矩阵乘法器，再用 Synopsys Design Compiler 完成综合与时序分析，用 Cadence Innovus 完成矩阵乘法器的布局布线练习。",
    takeaway: "项目收获", takeawayText: "熟悉标准单元 ASIC 从 RTL 到物理实现的基本链路，以及 Cadence 与 Synopsys 工具之间的交接方式。",
    scope: "项目性质", scopeValue: "NM6008 课程实验", tools: "工具", result: "课程成绩", resultValue: "数字集成电路设计实验（二）— A",
  },
  en: {
    label: "Digital IC · Design Flow", title: "Digital IC Design Lab",
    lead: "An NM6008 lab project in the joint NTU–TUM M.Sc. in Integrated Circuit Design, using GF 22 nm CMOS libraries to practise a digital IC flow from CMOS basic cells and Verilog RTL through synthesis, place and route, and physical verification.",
    work: "Completed work", workText: "Designed CMOS inverter and NAND cells in Virtuoso with layout and Calibre DRC/LVS/PEX. Implemented and verified a full adder, FSM, and matrix multiplier in Verilog, then practised synthesis and timing analysis in Design Compiler and matrix-multiplier place and route in Innovus.",
    takeaway: "What I took from it", takeawayText: "Familiarity with the basic standard-cell ASIC path from RTL to physical implementation and the hand-off between Cadence and Synopsys tools.",
    scope: "Scope", scopeValue: "NM6008 course lab", tools: "Tools", result: "Course result", resultValue: "Laboratory 2 Digital IC Design — A",
  },
} as const;

export function DigitalIcFlowPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t.label}</ReadingText><ReadingText as="h1" className="page-title">{t.title}</ReadingText><ReadingText as="p" className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</ReadingText>
    <section className="section split"><div className="prose-section"><ReadingText as="h2">{t.work}</ReadingText><ReadingText as="p">{t.workText}</ReadingText><ReadingText as="h2">{t.takeaway}</ReadingText><ReadingText as="p">{t.takeawayText}</ReadingText></div><dl className="fact-panel"><dt>{t.scope}</dt><ReadingText as="dd">{t.scopeValue}</ReadingText><dt>{t.tools}</dt><ReadingText as="dd">Cadence Virtuoso, Calibre, VCS/DVE, Verilog, Design Compiler, Innovus</ReadingText><dt>{t.result}</dt><ReadingText as="dd">{t.resultValue}</ReadingText></dl></section>
    <ProjectNavigation />
  </main>;
}
export default function Page() { return <DigitalIcFlowPage locale="zh" />; }
