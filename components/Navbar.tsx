"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeFromPathname, localizedPath, pathWithoutLocale, ui } from "../lib/i18n";

const links = ["experience", "projects", "publications", "awards", "about", "contact"] as const;

export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = ui[locale];
  const basePath = pathWithoutLocale(pathname);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link href={localizedPath("/", locale)} className="site-name">
          {locale === "zh" ? "郜周豪" : "Gao Zhouhao"}
          <span>{copy.portfolio}</span>
        </Link>
        <div className="nav-links">
          {links.map((key) => (
            <Link key={key} href={localizedPath(`/${key}`, locale)}>
              {copy.nav[key]}
            </Link>
          ))}
          <span className="locale-switch" aria-label={locale === "zh" ? "语言切换" : "Language switcher"}>
            <Link href={localizedPath(basePath, "zh")} aria-current={locale === "zh" ? "page" : undefined}>中文</Link>
            <span aria-hidden="true">|</span>
            <Link href={localizedPath(basePath, "en")} aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          </span>
        </div>
      </nav>
    </header>
  );
}
