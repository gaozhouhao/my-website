import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Publications & Patent", "Peer-reviewed publications and a published patent application by Gao Zhouhao.", "/publications");

export default function PublicationsPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Publications & patent</p>
      <h1 className="page-title">Published research, with contribution boundaries.</h1>

      <section className="section split">
        <figure className="evidence">
          <Image src="/papers/SSPP.webp" alt="Interdigital SSPP low-pass filter structure and prototype" width={1105} height={859} sizes="(max-width: 800px) 100vw, 45vw" />
          <figcaption>Interdigital SSPP filter research: simulation, PCB prototype, and measurement evidence.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">First author · Micromachines 2023</p>
          <h2 className="section-heading" style={{ fontSize: "2rem" }}>Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter Based on Interdigital Structure</h2>
          <p className="section-intro">I led the design, simulation, prototype measurement, data processing, and paper work for this research line.</p>
          <div className="button-row">
            <a className="button button-primary" href="https://doi.org/10.3390/mi14091687" target="_blank" rel="noreferrer">Open paper</a>
            <Link className="button" href="/projects/sspp-filter">View project evidence</Link>
          </div>
        </div>
      </section>

      <section className="section split">
        <figure className="evidence">
          <Image src="/papers/HMSIC.webp" alt="Textile HMSIC antenna from the published paper" width={1071} height={681} sizes="(max-width: 800px) 100vw, 45vw" />
          <figcaption>Published paper illustration. Authorship does not imply ownership of every design or experiment.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Fourth author · Micromachines 2024</p>
          <h2 className="section-heading" style={{ fontSize: "2rem" }}>Textile Bandwidth-Enhanced Half-Mode Substrate-Integrated Cavity Antenna Based on Embroidered Shorting Vias</h2>
          <p className="section-intro">My individual contribution was limited and has not been sufficiently specified for a detailed technical claim on this portfolio.</p>
          <a className="card-link" href="https://doi.org/10.3390/mi15091081" target="_blank" rel="noreferrer">Open paper →</a>
        </div>
      </section>

      <section className="section split">
        <figure className="evidence">
          <Image src="/papers/sspp-patent.webp" alt="Structure shown in the published SSPP patent application" width={1107} height={1001} sizes="(max-width: 800px) 100vw, 45vw" />
          <figcaption>The patent application belongs to the same SSPP research line and is not counted as a separate project.</figcaption>
        </figure>
        <div>
          <p className="eyebrow">Published patent application</p>
          <h2 className="section-heading" style={{ fontSize: "2rem" }}>Interdigital ultra-small low-pass artificial surface plasmon filter</h2>
          <p className="section-intro">This published application arises from the SSPP research line. Bibliographic details, inventor order, and current legal status are intentionally withheld until they are verified against the official document.</p>
        </div>
      </section>
    </main>
  );
}
