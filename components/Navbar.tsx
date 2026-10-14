"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { localeFromPathname, localizedPath, pathWithoutLocale, ui } from "../lib/i18n";

const links = ["experience", "projects", "publications", "awards", "about", "contact"] as const;

export default function Navbar() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = ui[locale];
  const basePath = pathWithoutLocale(pathname);
  const [expandedPath, setExpandedPath] = useState<string | null>(null);
  const menuOpen = expandedPath === pathname;

  return (
    <>
    <a className="skip-link" href="#main-content" lang={locale === "zh" ? "zh-CN" : "en"}>{copy.skip}</a>
    <header className="site-header" lang={locale === "zh" ? "zh-CN" : "en"}>
      <nav className="site-nav" aria-label={locale === "zh" ? "主导航" : "Primary navigation"}>
        <Link href={localizedPath("/", locale)} className="site-name">
          {locale === "zh" ? "郜周豪" : "Gao Zhouhao"}
          <span>{copy.portfolio}</span>
        </Link>
        <div className="nav-controls">
          <span className="locale-switch" aria-label={locale === "zh" ? "语言切换" : "Language switcher"}>
            <Link href={localizedPath(basePath, "zh")} lang="zh-CN" hrefLang="zh-CN" aria-current={locale === "zh" ? "page" : undefined}>中文</Link>
            <span aria-hidden="true">|</span>
            <Link href={localizedPath(basePath, "en")} lang="en" hrefLang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          </span>
          <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-links" onClick={() => setExpandedPath(menuOpen ? null : pathname)}>
            {locale === "zh" ? (menuOpen ? "收起" : "菜单") : (menuOpen ? "Close" : "Menu")}
          </button>
        </div>
        <div id="primary-links" className={`nav-links${menuOpen ? " is-open" : ""}`} onKeyDown={(event) => {
          if (event.key === "Escape") {
            setExpandedPath(null);
            event.currentTarget.parentElement?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
          }
        }}>
          {links.map((key) => (
            <Link key={key} href={localizedPath(`/${key}`, locale)} aria-current={basePath === `/${key}` || basePath.startsWith(`/${key}/`) ? "page" : undefined} onClick={() => setExpandedPath(null)}>
              {copy.nav[key]}
            </Link>
          ))}
        </div>
      </nav>
    </header>
    </>
  );
}
