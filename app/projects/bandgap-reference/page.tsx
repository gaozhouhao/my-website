import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata(
  "Bandgap-Based Reference Circuit",
  "A bounded account of an early TSMC 0.18 µm bandgap-reference schematic and pre-layout simulation project.",
  "/projects/bandgap-reference",
);

export default function BandgapReferencePage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Analog IC · Early Coursework</p>
      <h1 className="page-title">Bandgap-Based Reference Circuit</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        An earlier independent Analog Lab project in TSMC 0.18 µm CMOS. It is retained as supporting evidence, with lower portfolio priority than the Class-AB amplifier.
      </p>
      <section className="section split">
        <figure className="evidence">
          <Image src="/projects/bandgap-schematic.webp" alt="Bandgap-based reference circuit schematic" width={1920} height={1080} sizes="(max-width: 800px) 100vw, 50vw" />
          <figcaption>Schematic evidence from the early coursework project. Circuit-topology details are not inferred beyond the confirmed record.</figcaption>
        </figure>
        <dl className="fact-panel">
          <dt>Process</dt><dd>TSMC 0.18 µm CMOS</dd>
          <dt>Completed scope</dt><dd>Schematic, pre-layout simulation, and temperature sweep</dd>
          <dt>Documented result</dt><dd>Approximately 2.54 V output and 25 ppm/°C over approximately −40°C to 100°C</dd>
          <dt>Not completed</dt><dd>Layout, DRC/LVS/PEX, post-layout simulation, and PVT/process corners</dd>
        </dl>
      </section>
      <p className="status-note prose-section">
        This page does not present the project as a core analog IC achievement. Architecture details, power, area, regulation, PSRR, startup behavior, and complete test conditions remain unconfirmed and are not claimed.
      </p>
      <ProjectNavigation />
    </main>
  );
}
