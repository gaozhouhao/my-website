"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedPath, ui } from "../lib/i18n";
import { site } from "../lib/site";

export default function SiteFooter() {
  const locale = localeFromPathname(usePathname());
  const copy = ui[locale];
  return (
    <footer className="site-footer">
      <div>
        <strong>{locale === "zh" ? "郜周豪" : "Gao Zhouhao"}</strong>
        <p>{copy.footer}</p>
      </div>
      <div className="footer-links">
        <Link href={localizedPath("/projects", locale)}>{copy.nav.projects}</Link>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${site.email}`}>Email</a>
      </div>
    </footer>
  );
}
