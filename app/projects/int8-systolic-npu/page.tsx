import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("INT8 Systolic NPU / Matrix Accelerator", "持续开发中的 INT8 脉动阵列 NPU：已完成矩阵计算数据通路与端到端 GEMM 验证。", "/projects/int8-systolic-npu", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · RTL · AI 加速器", title: "INT8 Systolic NPU / Matrix Accelerator", status: "状态：持续开发中 / Work in Progress",
    lead: "从零实现面向神经网络矩阵计算的 INT8 Matrix Accelerator。当前核心为参数化二维 Systolic Array，采用 Output Stationary 数据流：INT8 乘法、INT32 累加，partial sum 保存在 PE 内部。",
    overview: "项目概览", overviewText: "现阶段完成的是基础 Matrix Compute Datapath，不是完整 NPU Core。原始 A/B 矩阵输入由 Matrix Engine 内部完成 skew 和时序对齐，再送入 PE Array 计算。后续工作将围绕控制器和 GEMM 调度展开，让固定尺寸阵列能够执行更大、非固定尺寸的矩阵乘法。",
    current: "已完成", verify: "验证", roadmap: "后续计划", target: "目标架构（规划中）",
    currentItems: [
      ["INT8 Processing Element", "Signed INT8 × INT8 乘法，INT16 product 经显式 sign extension 后累加到 INT32。每个 PE 每周期执行一次 MAC，保存自身 partial sum；A 水平传播、B 垂直传播，A/B valid 独立传播，并支持 accumulator clear/reset。"],
      ["参数化 2D Systolic Array", "使用 SystemVerilog generate 构建 ROWS × COLS PE Array。当前默认 4×4，共 16 个 PE；每个 PE 独立维护 INT32 accumulator，ROWS 和 COLS 可参数化。"],
      ["Input Skew Network", "第 i 个 A row 延迟 i 个周期，第 j 个 B column 延迟 j 个周期；data 和 valid 同步延迟。各 lane 使用不同深度的 delay line，lane 0 直接 bypass，只生成 N(N−1)/2 级必要寄存器。"],
      ["Matrix Engine Datapath", "已连接 Raw Matrix Input → Input Skew → Systolic Array → INT32 Accumulator。Testbench 直接输入未 skew 的 A/B 矩阵，时序对齐在 Matrix Engine 内部完成。"],
    ],
    verifyText: "PE 通过 SystemVerilog self-checking testbench，覆盖正负数 MAC 和基础控制。Matrix Engine 使用 Verilator + SystemVerilog self-checking testbench 做首次端到端 GEMM 验证。",
    example: "A = [[1, 2], [3, 4]]，B = [[5, 6], [7, 8]]，硬件输出 C = [[19, 22], [43, 50]]。该用例覆盖 Input Skew、Systolic 数据传播、A/B valid 对齐、Signed INT8 MAC 和 INT32 accumulation。",
    roadmapItems: [
      ["计算调度", "Matrix Controller / FSM、M/N/K 可配置 GEMM、Tiling / Blocking，以及大矩阵在固定尺寸阵列上的自动分块执行。"],
      ["存储与数据搬运", "Local SRAM / Scratchpad、A/B/Output Buffer 和 DMA。"],
      ["量化后处理", "Bias、Requantization、Saturation / Clamp、ReLU 和 INT8 output。"],
      ["验证与系统集成", "Randomized Verification、Software Golden Model 自动比对、Regression Test、RV32 SoC 集成、AXI / MMIO、软件驱动，以及 RTL Synthesis / STA / PPA 分析。"],
    ],
    targetText: "RV32 / Host → Command / Register Interface → NPU Controller → DMA + Local Scratchpad → INT8 Matrix Engine → INT32 Accumulator → Bias / Requantization / ReLU → Output Buffer",
    engineText: "Matrix Engine：A/B Input → Input Skew → 2D Systolic Array → PE Array",
  },
  en: {
    label: "Digital IC · RTL · AI Accelerator", title: "INT8 Systolic NPU / Matrix Accelerator", status: "Status: Work in Progress / 持续开发中",
    lead: "An INT8 matrix accelerator built from scratch for neural-network matrix compute. Its current core is a parameterized 2D systolic array using output-stationary dataflow: INT8 multiplication, INT32 accumulation, and partial sums held in each PE.",
    overview: "Overview", overviewText: "The completed scope is the base matrix-compute datapath, not a complete NPU core. Raw A/B matrix inputs are skewed and aligned inside the Matrix Engine before entering the PE array. The next work focuses on controller and GEMM scheduling so a fixed physical array can execute larger, non-fixed-size matrix multiplications.",
    current: "Current implementation", verify: "Verification", roadmap: "Roadmap", target: "Target architecture (planned)",
    currentItems: [
      ["INT8 Processing Element", "Signed INT8 × INT8 multiplication, with the INT16 product explicitly sign-extended into an INT32 accumulator. Each PE performs one MAC per cycle and retains its partial sum; A moves horizontally, B moves vertically, valid signals propagate independently, and the accumulator can be cleared or reset."],
      ["Parameterized 2D Systolic Array", "A SystemVerilog generate implementation of a ROWS × COLS PE array. The default configuration is 4×4, or 16 PEs; each PE has an INT32 accumulator and ROWS/COLS are parameters."],
      ["Input Skew Network", "A row i is delayed by i cycles and B column j by j cycles, with data and valid delayed together. Per-lane delay lines bypass lane 0 and instantiate only N(N−1)/2 required delay registers."],
      ["Matrix Engine Datapath", "Raw Matrix Input → Input Skew → Systolic Array → INT32 Accumulator is connected end to end. The testbench supplies unskewed A/B matrices; alignment is performed inside the Matrix Engine."],
    ],
    verifyText: "The PE has a SystemVerilog self-checking testbench covering signed MAC cases and basic control. The Matrix Engine has its first end-to-end GEMM verification using Verilator and a SystemVerilog self-checking testbench.",
    example: "For A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]], hardware produces C = [[19, 22], [43, 50]]. This case exercises input skew, systolic propagation, A/B-valid alignment, signed INT8 MAC, and INT32 accumulation.",
    roadmapItems: [
      ["Compute scheduling", "Matrix Controller / FSM, configurable M/N/K GEMM, tiling/blocking, and automatic blocking for matrices larger than the fixed array."],
      ["Storage and movement", "Local SRAM / scratchpad, A/B/output buffers, and DMA."],
      ["Quantized post-processing", "Bias, requantization, saturation/clamp, ReLU, and INT8 output."],
      ["Verification and integration", "Randomized verification, automatic software-golden-model comparison, regression, RV32 SoC integration, AXI / MMIO, software driver, and RTL synthesis / STA / PPA analysis."],
    ],
    targetText: "RV32 / Host → Command / Register Interface → NPU Controller → DMA + Local Scratchpad → INT8 Matrix Engine → INT32 Accumulator → Bias / Requantization / ReLU → Output Buffer",
    engineText: "Matrix Engine: A/B Input → Input Skew → 2D Systolic Array → PE Array",
  },
} as const;

export function Int8SystolicNpuPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={locale === "zh" ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.label}</p><h1 className="page-title">{t.title}</h1><p className="status-note" style={{ marginTop: "1.2rem" }}><strong>{t.status}</strong></p><p className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</p>
    <section className="prose-section"><h2>{t.overview}</h2><p>{t.overviewText}</p></section>
    <section className="section"><h2 className="section-heading">{t.current}</h2><div className="challenge-grid">{t.currentItems.map(([title, text], index) => <article className="challenge-card" key={title}><p className="eyebrow">0{index + 1}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section split"><div><h2 className="section-heading">{t.verify}</h2><p className="section-intro">{t.verifyText}</p><p className="section-intro">{t.example}</p></div><dl className="fact-panel"><dt>{locale === "zh" ? "当前配置" : "Current configuration"}</dt><dd>{locale === "zh" ? "4×4 Systolic Array · 16 PE" : "4×4 systolic array · 16 PEs"}</dd><dt>{locale === "zh" ? "数据类型" : "Datapath"}</dt><dd>Signed INT8 × INT8 → INT16 → INT32</dd><dt>{locale === "zh" ? "当前验证" : "Current verification"}</dt><dd>Verilator + SystemVerilog self-checking testbench</dd></dl></section>
    <section className="section"><h2 className="section-heading">{t.roadmap}</h2><p className="status-note">{locale === "zh" ? "以下均为规划，尚未实现。" : "Everything below is planned work; it is not implemented yet."}</p><div className="challenge-grid">{t.roadmapItems.map(([title, text], index) => <article className="challenge-card" key={title}><p className="eyebrow">0{index + 1}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="prose-section"><h2>{t.target}</h2><pre className="code-showcase"><code>{t.targetText}{"\n\n"}{t.engineText}</code></pre></section>
    <ProjectNavigation />
  </main>;
}
export default function Page() { return <Int8SystolicNpuPage locale="zh" />; }
