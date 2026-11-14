import ReadingText from "../../../components/ReadingText";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("数字集成电路设计实验", "NM6008：GF 22 nm CMOS 下的数字 IC 设计流程实践。", "/projects/digital-ic-flow", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · 设计流程", title: "数字集成电路设计实验",
    lead: "基于 GF 22 nm CMOS 工艺库的 NM6008 课程实验，涵盖基础单元设计、RTL 验证、逻辑综合与布局布线。课程属于南洋理工大学与慕尼黑工业大学联合集成电路设计硕士项目。",
    work: "完成内容",
    workItems: [
      { title: "电路与版图", text: "使用 Cadence Virtuoso 设计 CMOS 反相器和与非门并完成版图，通过 Calibre 进行 DRC/LVS 检查及寄生参数提取。" },
      { title: "RTL 与验证", text: "使用 Verilog 实现并验证全加器、有限状态机和矩阵乘法器。" },
      { title: "综合与布局布线", text: "使用 Synopsys Design Compiler 完成逻辑综合与时序分析，并使用 Cadence Innovus 完成矩阵乘法器的布局布线练习。" },
    ],
    scope: "项目性质", scopeValue: "NM6008 课程实验", tools: "工具", result: "课程成绩", resultValue: "数字集成电路设计实验（二）— A",
  },
  en: {
    label: "Digital IC · Design Flow", title: "Digital IC Design Lab",
    lead: "An NM6008 course lab using GF 22 nm CMOS libraries, covering basic-cell design, RTL verification, synthesis and place and route. Part of the joint NTU–TUM M.Sc. in Integrated Circuit Design.",
    work: "Completed work",
    workItems: [
      { title: "Circuits and layout", text: "Designed CMOS inverter and NAND cells in Cadence Virtuoso, completed their layouts, and ran Calibre DRC/LVS and parasitic extraction." },
      { title: "RTL and verification", text: "Implemented and verified a full adder, finite-state machine and matrix multiplier in Verilog." },
      { title: "Synthesis and place and route", text: "Completed synthesis and timing analysis in Synopsys Design Compiler, then practised matrix-multiplier place and route in Cadence Innovus." },
    ],
    scope: "Scope", scopeValue: "NM6008 course lab", tools: "Tools", result: "Course result", resultValue: "Laboratory 2 Digital IC Design — A",
  },
} as const;

export function DigitalIcFlowPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t.label}</ReadingText><ReadingText as="h1" className="page-title">{t.title}</ReadingText><ReadingText as="p" className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</ReadingText>
    <section className="section split">
      <div className="prose-section" style={{ marginTop: 0 }}>
        <ReadingText as="h2">{t.work}</ReadingText>
        <ul>{t.workItems.map(item => <ReadingText as="li" key={item.title}><strong>{item.title}</strong>{locale === "zh" ? "：" : ": "}{item.text}</ReadingText>)}</ul>
      </div>
      <dl className="fact-panel"><dt>{t.scope}</dt><ReadingText as="dd">{t.scopeValue}</ReadingText><dt>{t.tools}</dt><ReadingText as="dd">Cadence Virtuoso, Calibre, VCS/DVE, Verilog, Design Compiler, Innovus</ReadingText><dt>{t.result}</dt><ReadingText as="dd">{t.resultValue}</ReadingText></dl>
    </section>
    <ProjectNavigation />
  </main>;
}
export default function Page() { return <DigitalIcFlowPage locale="zh" />; }
