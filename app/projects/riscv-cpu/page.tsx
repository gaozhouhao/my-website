import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("RV32E RISC-V 处理器与片上系统实现", "从 RV32E RTL 设计、验证、SoC 集成到综合和静态时序分析的数字 IC 项目。", "/projects/riscv-cpu", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · RTL · SoC",
    title: "RV32E RISC-V 处理器与片上系统实现",
    lead: "从 RV32E 处理器 RTL 设计出发，完成验证环境、SoC 集成、指令缓存，以及综合和静态时序分析的工程实践。",
    repo: "RISCV32 代码仓库",
    socRepo: "ysyxSoC 代码仓库",
    overview: "项目概览",
    overviewText: "这是一个围绕 RV32E 指令集展开的自研处理器项目。目标不是复现一个现成核，而是把微架构取舍落实到可运行的 RTL：从取指、译码、执行和访存控制开始，逐步接入验证环境、片上互连和外设，并把设计带入综合和静态时序分析流程。",
    overviewText2: "项目以多周期实现为起点，随后尝试两级流水结构。开发过程中，我把处理器、SoC 集成和调试放在同一条工程链路中推进：每次控制逻辑或接口改动都回到差分测试、波形和软件运行结果中验证。",
    architecture: "处理器微架构",
    architectureText: "初始版本采用多周期 Microarchitecture，将处理器划分为 IFU、IDU、EXU、LSU 和 WBU。各单元之间通过 valid-ready handshake 传递事务和背压信息，使取指、访存等可变延迟操作不必依赖固定周期数。PC 的更新、流水控制和 redirect 都由这一套握手关系协调。",
    architectureText2: "在多周期结构稳定后，我继续尝试两级 Pipeline。核心问题不是简单拆分级数，而是保证 PC、指令缓冲和执行结果在停顿、跳转和存储器返回时仍保持一致。因此，控制逻辑把取指请求的 PC 与已接收指令对应的 PC 分开保存，并明确记录请求、响应和 redirect 的状态。",
    isa: "ISA 与控制实现",
    isaText: "RV32E 基础整数运算、逻辑、移位、分支和跳转指令由译码逻辑生成控制信号，再在 EXU 中完成运算与条件判断。Load/store 指令通过 LSU 将访问请求转为总线事务；写回阶段根据指令类别选择算术结果、加载数据或 PC 相关结果。",
    isaText2: "CSR、ECALL、MRET 和 Exception handling 并非只在译码表中增加一个 opcode，而是需要把 CSR 读写、异常入口、返回地址和控制流 redirect 放进同一套状态管理中。Fence.i 也与取指路径和 ICache 状态关联：发生自修改代码或指令流切换时，必须让旧的指令缓存内容失效，避免继续执行过期指令。",
    verification: "验证环境",
    verificationText: "验证以 C reference model 和 Differential testing 为主。RTL 运行结果与参考模型逐条对比，同时结合 ISA tests、riscv-tests 和自定义测试程序覆盖算术、控制流、访存和异常路径。发生偏差时，使用 Verilator、FST 和 GTKWave 回溯 valid-ready 关系、总线响应和寄存器状态。",
    verificationText2: "除裸机测试外，项目还在 RTL CPU 上运行 RT-Thread。RTOS 启动让验证从单条指令推进到中断、串口、内存布局和外设协同，能够暴露仅靠小型测试程序难以触及的控制和集成问题。",
    soc: "SoC 集成与缓存",
    socText: "处理器通过 AXI4-Lite interconnect 接入片上系统。地址空间中包含 SRAM、CLINT、UART 等外设；IFU 和 LSU 发出的请求需要在互连中完成仲裁、寻址和响应返回。内存映射不是静态表格，而是启动程序、外设访问和调试日志共同依赖的接口约定。",
    cacheText: "指令侧加入 Direct-mapped Instruction Cache。缓存以 tag、index 和 offset 划分地址，命中时直接返回指令，未命中时由 refill FSM 发起访存并回填缓存行。Fence.i 会触发 ICache 的失效处理，保证取指路径不会继续使用旧指令。",
    backend: "综合与后端探索",
    backendText: "在 RTL 验证之外，项目进入 Yosys Synthesis、iSTA Static Timing Analysis 和 Innovus 探索流程。综合报告用于观察面积构成，时序报告用于定位 critical path。对 ICache 而言，tag comparator 的组织方式会直接影响取指关键路径，因此在比较器实现上进行过针对性的优化和取舍。",
    challenges: "关键工程问题",
    challengesIntro: "以下问题都来自 RTL、总线和软件联调，而不是抽象的 RISC-V 教科书示例。",
    results: "结果与当前状态",
    resultsText: "下面数据来自当前运行记录，用于说明已完成的执行与验证过程，不用于宣称处理器性能。较低的 IPC 与多周期实现、访存和调试负载有关；它应被视为一次具体运行的观测值。",
    future: "后续工作",
    futureText: "下一步将继续推进五级流水、数据冒险处理与 forwarding、DCache、分支预测，以及 NoC 或多核扩展。每一项都会先建立可验证的控制边界，再接入现有 SoC 和差分测试流程。",
    layoutCaption: "RISC-V32 处理器版图。",
    resultLabel: "一次 RT-Thread 运行记录",
    timeline: "开发路径",
  },
  en: {
    label: "Digital IC · RTL · SoC",
    title: "RV32E RISC-V Processor & SoC Implementation",
    lead: "An engineering project spanning RV32E RTL design, verification, SoC integration, instruction caching, synthesis, and static timing analysis.",
    repo: "RISCV32 repository",
    socRepo: "ysyxSoC repository",
    overview: "Project overview",
    overviewText: "This is a self-directed RV32E processor project. The focus is not on reproducing an existing core, but on turning microarchitectural choices into runnable RTL: control logic, verification, SoC integration, and implementation-flow exploration are developed as one engineering path.",
    overviewText2: "The work began with a multi-cycle core and later explored a two-stage pipeline. Each RTL or interface change is checked again through differential testing, waveforms, and software execution.",
    architecture: "Processor architecture",
    architectureText: "The initial multi-cycle microarchitecture separates IFU, IDU, EXU, LSU, and WBU. Valid-ready handshakes carry transactions and backpressure between units, allowing variable-latency instruction fetches and memory accesses without assuming a fixed cycle count.",
    architectureText2: "The subsequent two-stage pipeline attempt required separating fetch PCs from instruction-buffer PCs and explicitly tracking requests, responses, stalls, and redirects so that PC and instruction state remain aligned.",
    isa: "ISA and control implementation",
    isaText: "RV32E integer arithmetic, logical, shift, branch, and jump instructions are decoded into control signals and executed in EXU. LSU turns load/store operations into bus transactions, while WBU selects arithmetic, load, or PC-related results.",
    isaText2: "CSR access, ECALL, MRET, and exception handling share redirect and state-control paths. Fence.i is tied to the fetch path and ICache invalidation so stale instructions are not reused after code changes or redirects.",
    verification: "Verification environment",
    verificationText: "Verification combines a C reference model, differential testing, ISA tests, riscv-tests, custom programs, Verilator simulation, FST traces, and GTKWave debugging.",
    verificationText2: "RT-Thread also runs on the RTL CPU. This extends validation beyond isolated instructions to startup, interrupt, UART, memory mapping, and peripheral integration.",
    soc: "SoC integration and cache",
    socText: "The CPU connects to SRAM, CLINT, UART, and peripherals through an AXI4-Lite interconnect. IFU and LSU traffic requires arbitration, address decoding, response routing, and a consistent memory map shared by boot software and hardware.",
    cacheText: "The instruction side uses a direct-mapped ICache with tag/index/offset addressing and a refill FSM. Fence.i invalidates cache state to prevent stale instruction execution.",
    backend: "Synthesis and backend exploration",
    backendText: "The RTL is taken through Yosys synthesis, iSTA static timing analysis, and Innovus exploration. Area reports guide structural inspection, while timing reports identify critical paths. ICache tag-comparator organization was specifically examined because it affects the fetch critical path.",
    challenges: "Key engineering challenges",
    challengesIntro: "These were encountered during RTL, bus, and software integration rather than in an isolated ISA exercise.",
    results: "Results and current status",
    resultsText: "These numbers are a runtime record, not a performance claim. The low IPC reflects the multi-cycle implementation, memory behavior, and debug workload.",
    future: "Future work",
    futureText: "Planned work includes a five-stage pipeline, hazard handling and forwarding, DCache, branch prediction, and NoC or multicore extensions.",
    layoutCaption: "RISC-V32 processor layout.",
    resultLabel: "One RT-Thread runtime record",
    timeline: "Development path",
  },
} as const;

const challenges = {
  zh: [
    ["IFU/WBU ready 死锁", "取指端与写回端的 ready 信号出现相互依赖时，双方都在等待对方推进，导致流水停滞。解决方法是重新划分握手依赖：让每一级只根据本级缓存状态和下游接收能力决定是否推进，避免 ready 信号形成闭环。"],
    ["PC 与指令不匹配", "AXI 返回时序与取指请求并不同步，若只使用当前 PC，可能把返回指令标记到错误地址。为此将 fetch PC 与 instruction buffer PC 分离：请求发出时保存地址，响应到达时再把对应 PC 与指令一起写入缓冲。"],
    ["redirect 与过期指令", "分支、跳转或异常 redirect 发生时，内存侧可能仍有未完成请求。控制逻辑需要区分请求是否已经发出、响应属于哪一次取指，并在 redirect 后丢弃不再对应当前控制流的 stale instruction。"],
    ["AXI 仲裁与响应归属", "IFU 的 cache refill 和 LSU 事务可能争用同一条 AXI 通道。仲裁器除了决定谁先发请求，还要记录 response ownership，确保返回数据交给正确的请求方，而不会在可变延迟下串扰。"],
  ],
  en: [
    ["IFU/WBU ready deadlock", "Mutual ready dependencies can leave fetch and writeback waiting on each other. The control logic was reorganized so each stage advances from local buffered state and downstream acceptance, rather than forming a ready-signal loop."],
    ["PC and instruction mismatch", "AXI response timing is decoupled from the current fetch PC. Fetch PCs and instruction-buffer PCs are therefore stored separately: the request address is retained when issued, then paired with its instruction on response."],
    ["Redirect and stale instructions", "Branch, jump, and exception redirects can coexist with pending memory requests. The control path tracks issued requests and response ownership, discarding instructions that no longer belong to the current control flow."],
    ["AXI arbitration and response ownership", "IFU cache refills and LSU transactions can contend for the AXI channel. Arbitration must choose requests and retain response ownership so variable-latency data is returned to the correct requester."],
  ],
} as const;

export function RiscvCpuPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
    <p className="eyebrow">{t.label}</p>
    <h1 className="page-title">{t.title}</h1>
    <p className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</p>
    <div className="button-row"><a className="button button-primary" href="https://github.com/gaozhouhao/RISCV32" target="_blank" rel="noreferrer">{t.repo}</a><a className="button" href="https://github.com/gaozhouhao/ysyxSoC" target="_blank" rel="noreferrer">{t.socRepo}</a></div>

    <section className="prose-section"><h2>{t.overview}</h2><p>{t.overviewText}</p><p>{t.overviewText2}</p></section>
    <section className="section"><figure className="evidence"><Image src="/projects/cpu_arch.jpg" alt={zh ? "RV32E 多周期处理器架构图" : "RV32E multi-cycle processor architecture"} width={1080} height={868} sizes="(max-width:800px) 100vw,50vw" /><figcaption>{zh ? "原始多周期实现的模块与数据通路示意。" : "Module and data-path diagram from the original multi-cycle implementation."}</figcaption></figure></section><section className="section split"><div><h2 className="section-heading">{t.architecture}</h2><p className="section-intro">{t.architectureText}</p><p className="section-intro">{t.architectureText2}</p></div><dl className="fact-panel"><dt>{zh ? "个人工作" : "Role"}</dt><dd>{zh ? "微架构设计、RTL Design、SoC 集成、验证与后端流程探索" : "Microarchitecture, RTL design, SoC integration, verification, and backend-flow exploration"}</dd><dt>{zh ? "处理器结构" : "Core structure"}</dt><dd>{zh ? "多周期实现；后续两级流水尝试" : "Multi-cycle implementation; later two-stage pipeline attempt"}</dd><dt>{zh ? "硬件描述语言与软件" : "HDL / software"}</dt><dd>Verilog、SystemVerilog、Chisel、C、C++、RISC-V {zh ? "汇编" : "assembly"}</dd></dl></section>

    <section className="section"><h2 className="section-heading">{t.isa}</h2><div className="prose-section"><p>{t.isaText}</p><p>{t.isaText2}</p></div></section>
    <section className="section"><h2 className="section-heading">{t.verification}</h2><div className="prose-section"><p>{t.verificationText}</p><p>{t.verificationText2}</p></div></section>

    <section className="section split"><figure className="evidence"><Image src="/projects/riscv32-layout.png" alt={zh ? "RISC-V32 处理器版图" : "RISC-V32 processor layout"} width={765} height={762} sizes="(max-width:800px) 100vw,50vw" /><figcaption>{t.layoutCaption}</figcaption></figure><div><h2 className="section-heading">{t.soc}</h2><p className="section-intro">{t.socText}</p><h3 className="subsection-title">{zh ? "Instruction Cache" : "Instruction Cache"}</h3><p className="section-intro">{t.cacheText}</p></div></section>

    <section className="section"><h2 className="section-heading">{t.backend}</h2><p className="section-intro">{t.backendText}</p><div className="timeline"><div><span>01</span><strong>{zh ? "RTL 与验证" : "RTL and verification"}</strong><p>{zh ? "从多周期控制、差分测试和波形调试建立功能闭环。" : "Established a functional loop through multi-cycle control, differential testing, and waveform debug."}</p></div><div><span>02</span><strong>{zh ? "SoC 与缓存" : "SoC and cache"}</strong><p>{zh ? "接入 AXI4-Lite、外设与指令缓存，处理总线和控制流问题。" : "Integrated AXI4-Lite, peripherals, and ICache while resolving bus and control-flow issues."}</p></div><div><span>03</span><strong>{zh ? "实现流程" : "Implementation flow"}</strong><p>{zh ? "进入 Synthesis、STA 和 Innovus 探索，检查面积与关键路径。" : "Moved through synthesis, STA, and Innovus exploration to inspect area and critical paths."}</p></div></div></section>

    <section className="section"><h2 className="section-heading">{t.challenges}</h2><p className="section-intro">{t.challengesIntro}</p><div className="challenge-grid">{challenges[locale].map(([title, text], index) => <article className="challenge-card" key={title}><p className="eyebrow">0{index + 1}</p><h3>{title}</h3><p>{text}</p></article>)}</div></section>

    <section className="section"><h2 className="section-heading">{t.results}</h2><p className="section-intro">{t.resultsText}</p><div className="result-showcase"><p className="eyebrow">{t.resultLabel}</p><table className="result-table"><tbody><tr><th>Cycles</th><td>29,825,900</td></tr><tr><th>Instructions retired</th><td>590,845</td></tr><tr><th>IPC</th><td>0.0198</td></tr></tbody></table><p className="resume-note">{zh ? "已完成 ISA 验证、差分测试、RT-Thread RTL 运行，以及综合和时序分析探索；当前不展示性能、面积或频率结论。": "Completed work includes ISA verification, differential testing, RT-Thread running on RTL, and synthesis/timing exploration. No performance, area, or frequency claim is made here."}</p></div></section>

    <section className="prose-section"><h2>{t.future}</h2><p>{t.futureText}</p></section>
    <ProjectNavigation />
  </main>;
}

export default function Page() { return <RiscvCpuPage locale="zh" />; }
