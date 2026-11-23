import ReadingText from "../../../components/ReadingText";
import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("五级流水线 RISC-V 处理器与 SoC", "已实现五级流水线与 2-bit 分支预测的 RV32E 处理器项目，涵盖 RTL 设计、SoC 集成、验证与后端流程探索。", "/projects/riscv-cpu", "zh");

const copy = {
  zh: {
    label: "数字集成电路 · RTL · SoC",
    title: "五级流水线 RISC-V 处理器与 SoC",
    lead: "独立设计与实现 RV32E 处理器，已完成五级流水线与 2-bit 分支预测。项目还包括验证环境、SoC 集成、指令缓存，以及综合和静态时序分析实践。",
    repo: "RISCV32 代码仓库",
    socRepo: "ysyxSoC 代码仓库",
    overview: "项目概览",
    overviewText: "我先用 RTL 实现了单周期 RV32E 处理器，随后将它改为三周期，再改为五周期。这两个多周期版本都逐条执行指令。之后，我将五周期版本改为五级流水线，让不同指令可以同时处于不同阶段。",
    overviewText2: "调试时，我用 NEMU 作为差分测试的参考模型，逐条比对指令执行结果，再用 Verilator 波形检查握手、总线响应和控制流。将处理器接入 ysyxSoC 后，我继续调试启动程序、存储器和外设访问。",
    architecture: "处理器微架构",
    architectureText: "当前版本采用取指、译码、执行、访存和写回五级流水线，并已实现 2-bit 分支预测。",
    architectureText2: "控制逻辑重点处理停顿、跳转和可变延迟访存。分别保存取指请求的 PC 与已接收指令的 PC，并跟踪请求和响应，避免指令与地址错配。",
    isa: "ISA 与控制实现",
    isaText: "RV32E 基础整数运算、逻辑、移位、分支和跳转指令由译码逻辑生成控制信号，再在 EXU 中完成运算与条件判断。加载与存储指令通过 LSU 将访问请求转为总线事务；写回阶段根据指令类别选择算术结果、加载数据或 PC 相关结果。",
    isaText2: "控制与状态寄存器（CSR）访问、ECALL 环境调用、MRET 异常返回和异常处理共用控制流管理逻辑，统一处理寄存器读写、异常入口与返回地址。FENCE.I 用于同步指令流；本实现通过使指令缓存（ICache）失效，保证修改代码后能取到更新的指令。",
    verification: "验证环境",
    verificationText: "运行指令集测试、riscv-tests 和自定义程序时，我逐条比对 RTL 与 NEMU 的寄存器和执行状态，检查算术、控制流、访存和异常处理。遇到不一致的指令，再用 GTKWave 查看 Verilator 生成的 FST 波形，定位握手、总线响应或寄存器更新问题。",
    verificationText2: "已在 RTL CPU 上运行 RT-Thread，验证启动、中断、串口、内存布局与外设访问。",
    soc: "SoC 集成与缓存",
    socText: "处理器通过 AXI4-Lite 总线互连接入片上系统，访问 SRAM、核心本地中断控制器（CLINT）和串口（UART）等模块。互连负责仲裁取指与访存请求、解析地址并返回响应；启动程序和外设驱动使用一致的地址映射。",
    cacheText: "指令侧加入直接映射缓存，将地址划分为标记、索引和偏移。命中时直接返回指令；未命中时，回填状态机发起访存并更新缓存行。FENCE.I 会触发缓存失效处理。",
    backend: "综合与后端探索",
    backendText: "使用 Yosys 进行逻辑综合、iSTA 进行静态时序分析，并在 Innovus 中探索物理实现。根据综合报告检查面积构成，根据时序报告定位关键路径；其中针对指令缓存的标记比较器做过实现调整，以改善取指路径时序。",
    challenges: "关键工程问题",
    challengesIntro: "",
    results: "结果与当前状态",
    resultsText: "下表记录早期多周期版本运行 RT-Thread 时的执行周期、指令数与 IPC。",
    future: "后续工作",
    futureText: "后续探索方向包括数据缓存（DCache）、片上网络（NoC）与多核扩展。新增模块将接入现有片上系统与差分测试流程。",
    layoutCaption: "此前版本的 RV32E RISC-V 处理器版图。",
    resultLabel: "早期多周期版本 · RT-Thread 运行记录",
    timeline: "开发路径",
  },
  en: {
    label: "Digital IC · RTL · SoC",
    title: "Five-Stage RISC-V CPU / SoC",
    lead: "I independently designed and implemented an RV32E processor with a five-stage pipeline and 2-bit branch prediction. The project also covers verification, SoC integration, instruction caching, synthesis and static timing analysis.",
    repo: "RISCV32 repository",
    socRepo: "ysyxSoC repository",
    overview: "Project overview",
    overviewText: "I first implemented a single-cycle RV32E core in RTL, then reworked it into a three-cycle core and later a five-cycle core. Both multicycle versions executed one instruction at a time. I then converted the five-cycle core into a five-stage pipeline so different instructions could occupy different stages at the same time.",
    overviewText2: "I compared instruction results against NEMU and used Verilator waveforms to trace handshakes, bus responses and changes in control flow. After integrating the core into ysyxSoC, I debugged the boot code, memory accesses and peripheral transactions.",
    architecture: "Processor architecture",
    architectureText: "The current core implements five pipeline stages—fetch, decode, execute, memory access and writeback—with 2-bit branch prediction.",
    architectureText2: "Earlier control-path debugging focused on stalls, redirects and variable-latency memory accesses. Fetch-request PCs and instruction-buffer PCs were stored separately, with explicit request and response tracking to keep instructions paired with the correct addresses.",
    isa: "ISA and control implementation",
    isaText: "RV32E integer arithmetic, logical, shift, branch, and jump instructions are decoded into control signals and executed in EXU. LSU turns load/store operations into bus transactions, while WBU selects arithmetic, load, or PC-related results.",
    isaText2: "CSR access, ECALL, MRET, and exception handling share redirect and state-control paths. FENCE.I synchronizes instruction fetches with earlier code writes; this implementation invalidates the instruction cache to fetch the updated code.",
    verification: "Verification environment",
    verificationText: "NEMU is the differential-testing reference for instruction-by-instruction comparisons of registers and execution state. ISA tests, riscv-tests and custom programs cover arithmetic, control flow, memory access and exceptions. When a mismatch appears, I inspect Verilator FST traces in GTKWave to locate handshake, bus-response or register-update issues.",
    verificationText2: "RT-Thread also runs on the RTL CPU. This extends validation beyond isolated instructions to startup, interrupt, UART, memory mapping, and peripheral integration.",
    soc: "SoC integration and cache",
    socText: "The CPU connects to SRAM, CLINT, UART, and peripherals through an AXI4-Lite interconnect. IFU and LSU traffic requires arbitration, address decoding, response routing, and a consistent memory map shared by boot software and hardware.",
    cacheText: "The instruction side uses a direct-mapped ICache with tag/index/offset addressing and a refill FSM. FENCE.I invalidates cache state to prevent stale instruction execution.",
    backend: "Synthesis and backend exploration",
    backendText: "The RTL is taken through Yosys synthesis, iSTA static timing analysis, and Innovus exploration. Area reports guide structural inspection, while timing reports identify critical paths. ICache tag-comparator organization was specifically examined because it affects the fetch critical path.",
    challenges: "Key engineering challenges",
    challengesIntro: "Debugging across RTL, bus transactions and software integration.",
    results: "Results and current status",
    resultsText: "The table records cycles, retired instructions and IPC from an RT-Thread run on the earlier multi-cycle core.",
    future: "Future work",
    futureText: "Further exploration includes a data cache (DCache), a network-on-chip (NoC) and multicore extensions, using the existing SoC and differential-testing environment.",
    layoutCaption: "RV32E RISC-V processor layout from an earlier version.",
    resultLabel: "Earlier multi-cycle version · RT-Thread run",
    timeline: "Development path",
  },
} as const;

const challenges = {
  zh: [
    ["IFU/WBU ready 死锁", "取指端与写回端的 ready 信号相互依赖，导致流水线停滞。重新划分握手逻辑，由各级缓存状态和下游接收能力决定是否推进，消除 ready 信号闭环。"],
    ["PC 与指令不匹配", "取指请求发出后，当前 PC 可能先发生变化。请求发出时保存 PC，响应到达时再将对应 PC 与指令一同写入缓冲，避免返回指令与地址错配。"],
    ["跳转与过期指令", "分支、跳转或异常发生时，仍可能有尚未返回的取指请求。通过记录请求状态和响应归属，丢弃不再属于当前执行路径的指令。"],
    ["AXI 仲裁与响应归属", "指令缓存回填与访存请求共用 AXI 通道。仲裁器记录请求来源，并将返回数据交给对应模块，避免可变延迟下的响应错配。"],
  ],
  en: [
    ["IFU/WBU ready deadlock", "Fetch and writeback stalled because their ready signals depended on each other. Reworking the handshake logic around local buffered state and downstream acceptance removed the ready-signal loop."],
    ["PC and instruction mismatch", "The current PC can change before an instruction request completes. The request PC is saved when issued and written into the instruction buffer with the returned instruction, keeping each instruction paired with its address."],
    ["Redirect and stale instructions", "Branches, jumps and exceptions can occur while instruction requests are still pending. Request-state and response-ownership tracking allow the core to discard instructions outside the current execution path."],
    ["AXI arbitration and response ownership", "Instruction-cache refills and load/store requests share an AXI channel. The arbiter records each request's source and routes returned data to the corresponding module, preserving response ownership under variable latency."],
  ],
} as const;

export function RiscvCpuPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const t = copy[locale];
  return <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t.label}</ReadingText>
    <ReadingText as="h1" className="page-title">{t.title}</ReadingText>
    <ReadingText as="p" className="lead" style={{ marginTop: "1.5rem" }}>{t.lead}</ReadingText>
    <div className="button-row"><a className="button button-primary" href="https://github.com/gaozhouhao/RISCV32" target="_blank" rel="noreferrer">{t.repo}</a><a className="button" href="https://github.com/gaozhouhao/ysyxSoC" target="_blank" rel="noreferrer">{t.socRepo}</a></div>

    <section className="section cpu-overview">
      <div className="prose-section">
        <ReadingText as="h2">{t.overview}</ReadingText>
        <ReadingText as="p">{t.overviewText}</ReadingText>
        <ReadingText as="p">{t.overviewText2}</ReadingText>
      </div>
      <figure className="evidence">
        <a href="/projects/cpu_arch.jpg" target="_blank" rel="noreferrer" title={zh ? "点击查看原图（新窗口）" : "Open full-size image (new tab)"}>
          <Image src="/projects/cpu_arch.jpg" alt={zh ? "RV32E 多周期处理器架构图" : "RV32E multicycle processor architecture"} width={1087} height={868} sizes="(max-width: 480px) 90vw, 448px" />
        </a>
        <ReadingText as="figcaption">{zh ? "早期多周期版本的处理器模块与数据通路。" : "Modules and datapath of the earlier multicycle core."}</ReadingText>
      </figure>
    </section>
    <section className="section split"><div><ReadingText as="h2" className="section-heading">{t.architecture}</ReadingText><ReadingText as="p" className="section-intro">{t.architectureText}</ReadingText><ReadingText as="p" className="section-intro">{t.architectureText2}</ReadingText></div><dl className="fact-panel"><dt>{zh ? "个人工作" : "Role"}</dt><ReadingText as="dd">{zh ? "微架构设计、RTL 设计、SoC 集成、验证与后端流程探索" : "Microarchitecture, RTL design, SoC integration, verification, and backend-flow exploration"}</ReadingText><dt>{zh ? "处理器结构" : "Core structure"}</dt><ReadingText as="dd">{zh ? "五级流水线；已实现 2-bit 分支预测" : "Five-stage pipeline with 2-bit branch prediction"}</ReadingText><dt>{zh ? "硬件描述语言与软件" : "HDL / software"}</dt><ReadingText as="dd">{zh ? "Verilog、SystemVerilog、Chisel、C、C++、RISC-V 汇编" : "Verilog, SystemVerilog, Chisel, C, C++, RISC-V assembly"}</ReadingText></dl></section>

    <section className="section"><ReadingText as="h2" className="section-heading">{t.isa}</ReadingText><div className="prose-section"><ReadingText as="p">{t.isaText}</ReadingText><ReadingText as="p">{t.isaText2}</ReadingText></div></section>
    <section className="section"><ReadingText as="h2" className="section-heading">{t.verification}</ReadingText><div className="prose-section"><ReadingText as="p">{t.verificationText}</ReadingText><ReadingText as="p">{t.verificationText2}</ReadingText></div></section>

    <section className="section split"><figure className="evidence"><a href="/projects/riscv32-layout.png" target="_blank" rel="noreferrer" title={zh ? "点击查看原图（新窗口）" : "Open full-size image (new tab)"}><Image src="/projects/riscv32-layout.png" alt={zh ? "RV32E RISC-V 处理器版图" : "RV32E RISC-V processor layout"} width={765} height={762} sizes="(max-width:800px) 100vw,50vw" /></a><ReadingText as="figcaption">{t.layoutCaption}</ReadingText></figure><div><ReadingText as="h2" className="section-heading">{t.soc}</ReadingText><ReadingText as="p" className="section-intro">{t.socText}</ReadingText><ReadingText as="h3" className="subsection-title">{zh ? "指令缓存" : "Instruction cache"}</ReadingText><ReadingText as="p" className="section-intro">{t.cacheText}</ReadingText></div></section>

    <section className="section"><ReadingText as="h2" className="section-heading">{t.backend}</ReadingText><ReadingText as="p" className="section-intro">{t.backendText}</ReadingText><div className="timeline"><div><span>01</span><strong>{zh ? "RTL 与验证" : "RTL and verification"}</strong><ReadingText as="p">{zh ? "完成多周期控制设计，通过差分测试和波形检查验证功能。" : "Established a functional loop through multi-cycle control, differential testing, and waveform debug."}</ReadingText></div><div><span>02</span><strong>{zh ? "SoC 与缓存" : "SoC and cache"}</strong><ReadingText as="p">{zh ? "接入 AXI4-Lite、外设与指令缓存，处理总线和控制流问题。" : "Integrated AXI4-Lite, peripherals, and ICache while resolving bus and control-flow issues."}</ReadingText></div><div><span>03</span><strong>{zh ? "实现流程" : "Implementation flow"}</strong><ReadingText as="p">{zh ? "完成综合与静态时序分析，并探索 Innovus 物理实现，检查面积和关键路径。" : "Moved through synthesis, STA, and Innovus exploration to inspect area and critical paths."}</ReadingText></div></div></section>

    <section className="section"><ReadingText as="h2" className="section-heading">{t.challenges}</ReadingText><div className="challenge-grid">{challenges[locale].map(([title, text], index) => <article className="challenge-card" key={title}><ReadingText as="p" className="eyebrow">0{index + 1}</ReadingText><ReadingText as="h3">{title}</ReadingText><ReadingText as="p">{text}</ReadingText></article>)}</div></section>

    <section className="section"><ReadingText as="h2" className="section-heading">{t.results}</ReadingText><ReadingText as="p" className="section-intro">{t.resultsText}</ReadingText><div className="result-showcase"><ReadingText as="p" className="eyebrow">{t.resultLabel}</ReadingText><table className="result-table"><tbody><tr><th>{zh ? "执行周期" : "Cycles"}</th><td>29,825,900</td></tr><tr><th>{zh ? "已提交指令数" : "Instructions retired"}</th><td>590,845</td></tr><tr><th>{zh ? "平均每周期指令数（IPC）" : "Instructions per cycle (IPC)"}</th><td>0.0198</td></tr></tbody></table></div></section>

    <section className="prose-section"><ReadingText as="h2">{t.future}</ReadingText><ReadingText as="p">{t.futureText}</ReadingText></section>
    <ProjectNavigation />
  </main>;
}

export default function Page() { return <RiscvCpuPage locale="zh" />; }
