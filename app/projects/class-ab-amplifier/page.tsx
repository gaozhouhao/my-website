import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Class-AB Amplifier", "Schematic, full-custom layout, extraction, and simulation evidence for a GF 0.18 µm Class-AB amplifier.", "/projects/class-ab-amplifier");

export default function ClassAbPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Analog IC · Full-Custom Layout</p>
      <h1 className="page-title">Class-AB Audio Amplifier with Translinear Loop</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>An independently completed Analog IC Laboratory project in GF 0.18 µm CMOS, covering transistor-level design, full-custom layout, extraction, and post-layout simulation.</p>
      <section className="section split"><div><h2 className="section-heading">Design scope</h2><p className="section-intro">Bias and start-up circuitry, PMOS/NMOS translinear loops, Class-AB output stage, device-sizing iterations, and Ahuja compensation.</p></div><dl className="fact-panel"><dt>Process</dt><dd>GF 0.18 µm CMOS</dd><dt>Role</dt><dd>Independent project</dd><dt>Flow</dt><dd>Virtuoso schematic → layout → Calibre DRC/LVS/PEX → extracted-view simulation</dd></dl></section>
      <div className="evidence-grid">
        <figure className="evidence"><Image src="/projects/bias-schematic.webp" alt="Bias and start-up portion of the Class-AB amplifier schematic" width={1920} height={1080} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Schematic evidence for the bias/start-up portion. The full schematic asset is retained in the repository but not needed in the overview.</figcaption></figure>
        <figure className="evidence"><Image src="/projects/opamp-layout.webp" alt="Full-custom layout of the Class-AB amplifier" width={937} height={759} sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Full-custom layout using matching/symmetry, guard rings, and wider supply/high-current routing; the report records DRC/LVS clean, PEX, and post-layout simulation.</figcaption></figure>
      </div>
      <section className="prose-section"><h2>Documented simulation results</h2><div style={{ overflowX: "auto" }}><table className="result-table"><thead><tr><th>Metric</th><th>Pre-layout</th><th>Post-layout</th></tr></thead><tbody><tr><td>Gain</td><td>12.0411 dB</td><td>12.0411 dB</td></tr><tr><td>UGBW</td><td>305.36 kHz</td><td>305.084 kHz</td></tr><tr><td>Phase margin</td><td>81.95°</td><td>79.23°</td></tr><tr><td>THD</td><td>−89.86 dB</td><td>−83.4 dB</td></tr><tr><td>Slew rate</td><td>18.6 V/µs</td><td>18.02 V/µs</td></tr><tr><td>Current</td><td>1.357 mA</td><td>1.201 mA</td></tr></tbody></table></div><p className="section-intro">These are simulation results from the personal lab report. Test conditions differ by metric and are not generalized beyond the documented setups.</p></section>
      <p className="status-note prose-section">Known limitation: the report records PSRR of −61.3 dB pre-layout and −60.056 dB post-layout, which did not meet the report’s ≤−70 dB target. The portfolio therefore does not claim that every specification passed.</p>
      <section className="prose-section"><h2>Corner evidence</h2><p>The report includes TT/FF/SS/FS/SF process-corner work and documented combinations involving 1.5 V/1.8 V supplies and −40°C/100°C. This is described as the recorded set of simulations, not as exhaustive PVT sign-off.</p></section>
      <ProjectNavigation />
    </main>
  );
}
