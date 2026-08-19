import Link from "next/link";
import { site } from "../lib/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Gao Zhouhao</strong>
        <p>Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design</p>
      </div>
      <div className="footer-links">
        <Link href="/projects">Projects</Link>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </footer>
  );
}
