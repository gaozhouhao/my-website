import Link from "next/link";

export default function ProjectNavigation() {
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <Link href="/projects">← All projects</Link>
      <Link href="/contact">Discuss this work →</Link>
    </nav>
  );
}
