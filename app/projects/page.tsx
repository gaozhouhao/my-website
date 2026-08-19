import Image from "next/image";
import Link from "next/link";
import { projectSummaries } from "../../lib/content";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Projects", "IC design, RTL, SoC, ASIC flow, verification, and hardware projects by Gao Zhouhao.", "/projects");

export default function ProjectsPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Projects</p>
      <h1 className="page-title">Engineering evidence across the IC stack.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>Each page separates objective, personal contribution, implementation, verification, results, limitations, and third-party boundaries.</p>
      <div className="card-grid section" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(18rem, 1fr))" }}>
        {projectSummaries.map((project) => (
          <article className="card" key={project.slug}>
            {project.image && project.width && project.height && <Image src={project.image} alt={project.imageAlt ?? ""} width={project.width} height={project.height} sizes="(max-width: 800px) 100vw, 33vw" style={{ width: "100%", height: "12rem", objectFit: "cover", borderRadius: ".65rem" }} />}
            <p className="eyebrow" style={{ marginTop: project.image ? "1rem" : 0 }}>{project.direction}</p>
            <h2 style={{ fontSize: "1.35rem", margin: ".7rem 0" }}>{project.title}</h2>
            <p>{project.summary}</p>
            <Link className="card-link" href={`/projects/${project.slug}`}>Open project →</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
