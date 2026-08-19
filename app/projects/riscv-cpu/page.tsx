import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Multi-Cycle RISC-V CPU / SoC", "RTL, verification, memory-system, and SoC integration evidence for Gao Zhouhao's RV32E CPU project.", "/projects/riscv-cpu");

export default function RiscvCpuPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Digital IC · RTL · SoC · Verification</p>
      <h1 className="page-title">Multi-Cycle RISC-V CPU / SoC</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>An ongoing personal engineering project built within the YSYX training ecosystem. I implement the CPU and major project-specific hardware while clearly separating upstream frameworks and third-party IP.</p>
      <div className="button-row">
        <a className="button button-primary" href="https://github.com/gaozhouhao/RISCV32" target="_blank" rel="noreferrer">RISCV32 repository</a>
        <a className="button" href="https://github.com/gaozhouhao/ysyxSoC" target="_blank" rel="noreferrer">ysyxSoC repository</a>
      </div>

      <section className="section split">
        <div>
          <h2 className="section-heading">Architecture</h2>
          <p className="section-intro">The CPU follows the RV32E ISA/ABI and uses a multi-cycle control structure with IF, ID, EX, LSU, and WB functional stages. Valid-ready handshakes allow the core to wait for variable-latency memory transactions.</p>
        </div>
        <dl className="fact-panel"><dt>Role</dt><dd>Main hardware designer and implementer for the personal CPU/SoC project</dd><dt>Status</dt><dd>Ongoing development and learning</dd><dt>HDL / software</dt><dd>Verilog, SystemVerilog, Chisel, C, C++, RISC-V assembly</dd></dl>
      </section>

      <div className="evidence-grid">
        <figure className="evidence"><Image src="/projects/cpu_arch.webp" alt="Functional architecture of the multi-cycle RISC-V CPU" width={1087} height={868} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>CPU functional architecture showing IFU, IDU, EXU, CSR, register file, LSU, and WBU. Stage labels describe control flow; they do not claim a pipelined implementation.</figcaption></figure>
        <article className="card"><p className="eyebrow">Verification evidence</p><h3>NEMU difftest and RTL debug</h3><p>Reference-model comparison using NEMU, Verilator simulation, FST/GTKWave waveform inspection, AM tests, riscv-tests, custom programs, and trace-based debugging. No coverage or pass-rate metric is claimed.</p><div className="tag-row"><span className="tag">itrace</span><span className="tag">mtrace</span><span className="tag">ftrace</span><span className="tag">AXI trace</span></div></article>
      </div>

      <section className="prose-section"><h2>What I implemented or adapted</h2><ul><li>RV32E-oriented integer instruction control, branches, jumps, byte/halfword/word loads and stores.</li><li>CSR access instructions, ECALL, MRET, and related trap entry/return control flow; complete precise-exception support is not claimed.</li><li>CPU-side AXI arbiter for IFU/LSU reads and LSU writes, plus integration with the official ysyxSoC AXI/APB ecosystem.</li><li>SDRAM and QSPI PSRAM behavioral models, controller adaptation, data-width expansion, timing debug, Flash/XIP and bootloader work.</li><li>APB GPIO/LED/DIP/seven-segment logic and PS/2 interface adaptation.</li></ul></section>
      <section className="prose-section"><h2>Debugging evidence</h2><ul><li>Investigated CAS latency, burst length, read-data and <code>rvalid</code> timing in the SDRAM path.</li><li>Found and debugged address mirroring and Bank/Row control issues.</li><li>Worked on Flash-to-external-memory loading, linker layout, and RT-Thread image startup/run debugging. A final successful runtime configuration is not claimed.</li></ul></section>
      <section className="prose-section"><h2>Attribution and limitations</h2><p>NEMU, Abstract Machine, the official ysyxSoC interconnect, Rocket-Chip Diplomacy, the base SDRAM controller, the base PSRAM controller, and the PS/2 receiver include upstream or third-party work. My claims are limited to traceable implementation, modification, adaptation, integration, and debugging. The project does not claim a hardware M extension, cache/MMU, FPGA validation, complete ISA coverage, performance, area, or frequency results.</p></section>
      <ProjectNavigation />
    </main>
  );
}
