export type Locale = "zh" | "en";

export const locales = ["zh", "en"] as const;

export function localizedPath(path: string, locale: Locale) {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return locale === "en" ? `/en${normalized}` || "/en" : normalized || "/";
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "zh";
}

export function pathWithoutLocale(pathname: string) {
  if (pathname === "/en") return "/";
  return pathname.startsWith("/en/") ? pathname.slice(3) : pathname;
}

export const ui = {
  zh: {
    portfolio: "IC 设计作品集",
    nav: { experience: "实习经历", projects: "项目经历", publications: "论文与专利", awards: "奖项荣誉", about: "教育背景", contact: "联系方式" },
    allProjects: "← 返回全部项目",
    discuss: "联系方式 →",
    footer: "模拟 / 混合信号 IC · 数字 IC / RTL · SoC 设计",
    skip: "跳转到正文",
  },
  en: {
    portfolio: "IC Design Portfolio",
    nav: { experience: "Experience", projects: "Projects", publications: "Publications", awards: "Awards", about: "About", contact: "Contact" },
    allProjects: "← All projects",
    discuss: "Discuss this work →",
    footer: "Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design",
    skip: "Skip to content",
  },
} as const;
