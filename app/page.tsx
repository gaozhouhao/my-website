import Link from "next/link";
import { pageMetadata } from "../lib/site";

export const metadata = pageMetadata("IC Design Portfolio", "Gao Zhouhao — M.Sc. Integrated Circuit Design candidate with project evidence across analog IC, RTL, SoC, ASIC flow, verification, and hardware.", "/");

const featured = [
  {
    label: "Digital IC · SoC",
    title: "Multi-Cycle RISC-V CPU / SoC",
    text: "RV32E CPU RTL, valid-ready control, NEMU difftest, AXI/APB integration, memory models, and system-level debugging.",
    tags: ["Verilog", "RISC-V", "AXI/APB", "Difftest"],
    href: "/projects/riscv-cpu",
  },
  {
    label: "Analog IC",
    title: "Class-AB Audio Amplifier",
    text: "Transistor-level design through full-custom layout, DRC/LVS/PEX, and documented pre-/post-layout simulation results.",
    tags: ["GF 0.18 µm", "Virtuoso", "Layout", "PEX"],
    href: "/projects/class-ab-amplifier",
  },
  {
    label: "ASIC Flow · STA",
    title: "GF 22 nm Digital IC Lab",
    text: "RTL-to-layout coursework evidence using Design Compiler and Innovus, including synthesis, timing analysis, CTS, and routing.",
    tags: ["GF 22 nm", "Synthesis", "PnR", "STA"],
    href: "/projects/digital-ic-flow",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="page-shell" style={{ paddingBottom: "2rem" }}>
        <p className="eyebrow">2027 Graduate · Integrated Circuit Design</p>
        <h1 className="display-title">Gao Zhouhao</h1>
        <p className="lead" style={{ marginTop: "1.5rem" }}>
          M.Sc. in Integrated Circuit Design at TUM and NTU, building across
          analog / mixed-signal IC and digital IC / SoC design.
        </p>
        <div className="fact-panel" style={{ marginTop: "2rem", maxWidth: "48rem" }}>
          <dl>
            <dt>Current experience</dt>
            <dd>
              Analog IC Design Intern at Infineon Technologies, Singapore —
              working on an ongoing startup-circuit project for energy-harvesting applications.
            </dd>
          </dl>
        </div>
        <div className="button-row">
          <Link className="button button-primary" href="/projects">Explore projects</Link>
          <a className="button" href="https://github.com/gaozhouhao" target="_blank" rel="noreferrer">GitHub</a>
          <a className="button" href="mailto:ZhouhaoG.ICD2526@tum-asia.edu.sg">Email</a>
          <span className="button button-muted" aria-disabled="true">Resume under review</span>
        </div>
        <p className="resume-note">A reviewed, role-specific resume will replace the archived PDF before public release.</p>
      </section>

      <section className="page-shell section" style={{ paddingTop: 0 }}>
        <p className="eyebrow">Selected engineering evidence</p>
        <h2 className="section-heading">Three views of IC design</h2>
        <p className="section-intro">
          The portfolio keeps analog and digital work in one engineering narrative:
          architecture, implementation, verification, and evidence.
        </p>
        <div className="card-grid">
          {featured.map((project) => (
            <article className="card" key={project.href}>
              <p className="eyebrow">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="tag-row">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              <Link className="card-link" href={project.href}>View evidence →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell section split" style={{ paddingTop: 0 }}>
        <div>
          <p className="eyebrow">Education</p>
          <h2 className="section-heading">Integrated circuit design, from devices to systems</h2>
        </div>
        <dl className="fact-panel">
          <dt>2025.08 — 2027.07 expected</dt>
          <dd>TUM / NTU · M.Sc. in Integrated Circuit Design, joint programme</dd>
          <dt>2020.09 — 2024.06</dt>
          <dd>Jiangsu Normal University · B.Eng. in Electronic Information Engineering</dd>
        </dl>
      </section>
    </main>
  );
}
