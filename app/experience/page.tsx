import Link from "next/link";
import { profileBoundary } from "../../lib/content";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Experience", "Current analog IC design internship experience of Gao Zhouhao.", "/experience");

export default function ExperiencePage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Experience</p>
      <h1 className="page-title">Current industry work, described conservatively.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        Public information is intentionally limited. Internal architecture,
        specifications, implementation details, and results are not published here.
      </p>

      <section className="section split">
        <div>
          <p className="eyebrow">2026.06 — 2027.04</p>
          <h2 className="section-heading">Analog IC Design Intern</h2>
          <p className="section-intro">Infineon Technologies · Singapore · Full-time internship</p>
          <p className="section-intro">
            Working on an ongoing startup-circuit project for energy-harvesting applications.
            The project remains work in progress; this page does not claim completed or verified results.
          </p>
        </div>
        <dl className="fact-panel">
          <dt>Status</dt>
          <dd>Work in progress</dd>
          <dt>Public scope</dt>
          <dd>{profileBoundary.publicInternshipScope}</dd>
          <dt>Not published</dt>
          <dd>{profileBoundary.privateInternshipScope}</dd>
        </dl>
      </section>

      <p className="status-note section">
        No target specification is presented as an achieved result. Additional technical detail will only be added after both factual verification and a separate confidentiality review.
      </p>
      <div className="button-row"><Link className="button" href="/projects">View public project evidence</Link></div>
    </main>
  );
}
