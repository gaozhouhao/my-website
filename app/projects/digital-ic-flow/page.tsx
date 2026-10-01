import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("NM6008 数字集成电路设计实验", "NM6008 课程实验：Verilog、逻辑综合、时序分析与布局布线。", "/projects/digital-ic-flow", "zh");

const fullAdderCode = `module FullAdder (
  input Cin, A, B, clk, RSTbar,
  input [3:0] n,
  output reg [15:0] S,
  output reg C = 0
);
  parameter s0 = 0, s1 = 1;
  reg [2:0] state, next_state;
  reg [3:0] cnt = 0;

  always @(posedge clk or posedge RSTbar) begin
    if (RSTbar) begin
      S <= 0; cnt <= 0; C <= 0; state <= s0;
    end else begin
      state <= next_state;
      if (next_state == s0) begin
        S[cnt] <= A ^ B ^ C;
        C <= (A & B) | (C & (A ^ B));
        cnt <= cnt + 1;
      end
    end
  end

  always @(*) begin
    if (cnt != n) next_state = s0;
    else next_state = s1;
  end
endmodule`;

const copy = {
  zh: {
    label: "数字集成电路 · 课程实验", title: "NM6008 数字集成电路设计实验",
    lead: "以熟悉数字集成电路设计工具和基本流程为主的课程实验，使用 GF 22 nm 工艺库，完成从简单逻辑单元到矩阵乘法器的练习。",
    scope: "实验内容", items: ["绘制反相器、与非门的原理图与版图，进行仿真和基本物理验证。", "在课程提供的代码框架下，完成全加器、有限状态机和矩阵乘法器的 Verilog 设计与仿真练习。", "使用 Design Compiler 练习逻辑综合与静态时序分析，使用 Innovus 练习布局规划、单元布局、时钟树综合和布线。"],
    type: "实验性质", typeValue: "基础课程实验", tools: "使用工具", result: "课程成绩", resultValue: "数字集成电路设计实验（二）— A",
    codeTitle: "全加器 Verilog 练习", codeIntro: "以下为课程实验中完成的行为级 Verilog 代码。设计以寄存器 C 保存进位状态，通过计数器逐位写入 S；它用于教学仿真与流程练习，不将其作为综合后的电路实现或性能结论展示。",
    note: "主要收获是熟悉工具操作、设计流程和报告阅读。部分代码基于课程模板，完成范围为教学仿真与流程练习。",
  },
  en: {
    label: "Digital IC · Coursework", title: "NM6008 Digital IC Design Lab",
    lead: "An introductory course lab focused on digital IC tools and workflow, using GF 22 nm libraries for exercises from basic logic cells to a matrix multiplier.",
    scope: "Lab exercises", items: ["Created inverter and NAND schematics and layouts, with simulation and basic physical verification.", "Completed Verilog design and simulation exercises for a full adder, finite-state machine, and matrix multiplier within the supplied course framework.", "Practised synthesis and static timing analysis in Design Compiler, followed by floorplanning, placement, clock-tree synthesis, and routing in Innovus."],
    type: "Scope", typeValue: "Introductory course lab", tools: "Tools", result: "Course result", resultValue: "Laboratory 2 Digital IC Design — A",
    codeTitle: "Full-adder Verilog exercise", codeIntro: "This behavioral Verilog exercise retains a carry state in C and writes S one bit at a time under counter control. It is course code for simulation and flow practice, not a post-synthesis netlist or a performance claim.",
    note: "The main outcome was familiarity with the tools, workflow, and report interpretation. Some code was based on course templates; the work covered educational simulation and flow exercises.",
  },
} as const;

export function DigitalIcFlowPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.label}</p><h1 className="page-title">{t.title}</h1><p className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</p>
    <section className="section split"><div className="prose-section"><h2>{t.scope}</h2><ul>{t.items.map(item => <li key={item}>{item}</li>)}</ul></div><dl className="fact-panel"><dt>{t.type}</dt><dd>{t.typeValue}</dd><dt>{t.tools}</dt><dd>Cadence Virtuoso, Calibre, Verilog, Design Compiler, Innovus</dd><dt>{t.result}</dt><dd>{t.resultValue}</dd></dl></section>
    <section className="prose-section"><h2>{t.codeTitle}</h2><p>{t.codeIntro}</p><pre className="code-showcase"><code>{fullAdderCode}</code></pre></section>
    <p className="section-intro prose-section">{t.note}</p><ProjectNavigation />
  </main>;
}
export default function Page() { return <DigitalIcFlowPage locale="zh" />; }
