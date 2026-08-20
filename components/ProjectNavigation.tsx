"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedPath, ui } from "../lib/i18n";

export default function ProjectNavigation() {
  const locale = localeFromPathname(usePathname());
  const copy = ui[locale];
  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <Link href={localizedPath("/projects", locale)}>{copy.allProjects}</Link>
      <Link href={localizedPath("/contact", locale)}>{copy.discuss}</Link>
    </nav>
  );
}
