import { pageMetadata, site } from "../../lib/site";

export const metadata = pageMetadata(
  "Contact",
  "Contact Gao Zhouhao about 2027 graduate opportunities in analog IC, digital IC, RTL, SoC, verification, and hardware.",
  "/contact",
);

export default function ContactPage() {
  return (
    <main id="main-content" className="page-shell page-narrow">
      <p className="eyebrow">Contact</p>
      <h1 className="page-title">Let&apos;s discuss IC design and hardware.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        I am a 2027 M.Sc. graduate candidate interested in analog / mixed-signal IC,
        digital IC / RTL, SoC design, verification, and related hardware roles.
      </p>
      <section className="section contact-grid">
        <a className="card contact-card" href={`mailto:${site.email}`}>
          <p className="eyebrow">Email</p>
          <h2>{site.email}</h2>
          <p>Preferred channel for recruiting and technical conversations.</p>
        </a>
        <a className="card contact-card" href={site.github} target="_blank" rel="noreferrer">
          <p className="eyebrow">GitHub</p>
          <h2>github.com/gaozhouhao</h2>
          <p>Public RTL, SoC, software, and project repositories.</p>
        </a>
      </section>
      <p className="status-note section">
        A reviewed, role-specific PDF resume will be added here after final factual review. The archived PDF asset is intentionally not linked as the current recruiting resume.
      </p>
    </main>
  );
}
