import Link from "next/link";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("About & Education", "Education, technical scope, and engineering approach of Gao Zhouhao.", "/about");

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">About</p>
      <h1 className="page-title">Devices, RTL, and the systems between them.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        I am a full-time M.Sc. student in Integrated Circuit Design in the joint
        TUM–NTU programme. My work spans transistor-level analog design, RTL and
        SoC integration, verification, and hands-on hardware development.
      </p>

      <section className="section">
        <p className="eyebrow">Technical scope</p>
        <h2 className="section-heading">Evidence, not a keyword list</h2>
        <div className="card-grid">
          <article className="card">
            <p className="eyebrow">Analog / Mixed-Signal</p>
            <h3>Transistor-level to extracted view</h3>
            <p>Cadence Virtuoso schematic and full-custom layout, Calibre DRC/LVS/PEX, post-layout simulation, and documented process-corner work in the Class-AB project.</p>
            <Link className="card-link" href="/projects/class-ab-amplifier">Class-AB evidence →</Link>
          </article>
          <article className="card">
            <p className="eyebrow">Digital IC / SoC</p>
            <h3>RTL, interfaces, and debug</h3>
            <p>Verilog/SystemVerilog, a multi-cycle RV32E CPU, valid-ready control, AXI/APB integration, NEMU difftest, Verilator, waveform and transaction-level debugging.</p>
            <Link className="card-link" href="/projects/riscv-cpu">CPU / SoC evidence →</Link>
          </article>
          <article className="card">
            <p className="eyebrow">Hardware / Embedded</p>
            <h3>Boards and system bring-up</h3>
            <p>PCB design, assembly, soldering and rework, MCU interfaces, sensors, motor-control integration, and system-level debugging.</p>
            <Link className="card-link" href="/projects/smart-car">Hardware evidence →</Link>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="section-heading">M.Sc. in Integrated Circuit Design</h2>
          <p className="section-intro">A full-time joint programme of the Technical University of Munich and Nanyang Technological University, leading to one jointly awarded degree.</p>
        </div>
        <dl className="fact-panel">
          <dt>Graduate</dt>
          <dd>TUM / NTU · M.Sc. Integrated Circuit Design · 2025.08–2027.07 expected</dd>
          <dt>Undergraduate</dt>
          <dd>Jiangsu Normal University · B.Eng. Electronic Information Engineering · 2020.09–2024.06</dd>
          <dt>Languages</dt>
          <dd>English — IELTS 7.0; CET-4 509; CET-6 435</dd>
        </dl>
      </section>

      <section className="section">
        <p className="eyebrow">Beyond the portfolio</p>
        <h2 className="section-heading">Hands-on making</h2>
        <p className="section-intro">The original making, music, and life gallery is retained as a secondary page rather than a primary recruiting path.</p>
        <Link className="card-link" href="/beyond">View Beyond Engineering →</Link>
      </section>
    </main>
  );
}
