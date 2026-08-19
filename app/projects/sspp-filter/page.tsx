import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Interdigital SSPP Filter", "CST design, PCB prototype, VNA measurement, and publication evidence for an ultra-compact SSPP low-pass filter.", "/projects/sspp-filter");

export default function SsppPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">RF Hardware · Simulation · Measurement</p>
      <h1 className="page-title">Interdigital Ultra-Compact SSPP Low-Pass Filter</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>A primarily self-directed undergraduate research line connecting electromagnetic design, CST simulation, PCB fabrication, VNA measurement, a first-author paper, a published patent application, and the undergraduate thesis.</p>
      <div className="evidence-grid section">
        <figure className="evidence"><Image src="/papers/SSPP.webp" alt="SSPP filter design, PCB prototype, and response evidence" width={1105} height={859} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Filter design and prototype evidence from the published work. Simulation and measurement results are distinguished below.</figcaption></figure>
        <figure className="evidence"><Image src="/papers/sspp-patent.webp" alt="Interdigital SSPP filter structure in the published patent application" width={1107} height={1001} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Published patent-application figure from the same research line. It is not counted as a separate project.</figcaption></figure>
      </div>
      <section className="prose-section"><h2>What I did</h2><ul><li>Designed and optimized the interdigital SSPP unit, matching regions, and central waveguide structure.</li><li>Used CST Microwave Studio for dispersion, dimensions, unit count, S-parameters, electric-field and surface-current studies.</li><li>Built the FR-4 PCB prototype, attached SMA connectors, and measured it with a Keysight N5234B vector network analyzer.</li><li>Led the data processing and first-author paper work.</li></ul></section>
      <section className="prose-section"><h2>Simulation and measurement</h2><div style={{ overflowX: "auto" }}><table className="result-table"><thead><tr><th>Evidence type</th><th>Documented result</th></tr></thead><tbody><tr><td>Simulation</td><td>0–5.66 GHz passband; 5.95–12 GHz stopband with more than 24 dB suppression; reported 105 dB/GHz roll-off factor near 5.74 GHz</td></tr><tr><td>Measurement</td><td>5.53 GHz cutoff; measured passband return loss above 20 dB and measured out-of-band suppression above 35 dB in the paper comparison table</td></tr><tr><td>Size</td><td>Normalized two-dimensional size of 0.5 × 0.16 λ₀²</td></tr></tbody></table></div></section>
      <p className="status-note prose-section">The paper, patent application, and undergraduate thesis are continuations of the same technical work. They are presented as one research line rather than three independent achievements.</p>
      <div className="button-row"><a className="button button-primary" href="https://doi.org/10.3390/mi14091687" target="_blank" rel="noreferrer">Read the paper</a></div>
      <ProjectNavigation />
    </main>
  );
}
