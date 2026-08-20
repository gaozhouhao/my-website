import type { MetadataRoute } from "next";
import { publicRoutes } from "../lib/content";
import { localizedPath } from "../lib/i18n";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.flatMap((route) => ["zh", "en"].map((locale) => {
    const localized = localizedPath(route, locale as "zh" | "en");
    const zh = localizedPath(route, "zh");
    const en = localizedPath(route, "en");
    return {
      url: localized === "/" ? site.url : `${site.url}${localized}`,
      lastModified: new Date("2026-08-20"),
      changeFrequency: route === "/" || route === "/projects" ? "monthly" as const : "yearly" as const,
      priority: route === "/" ? 1 : route.startsWith("/projects") ? 0.8 : 0.6,
      alternates: { languages: { "zh-CN": zh === "/" ? site.url : `${site.url}${zh}`, en: `${site.url}${en}` } },
    };
  }));
}
