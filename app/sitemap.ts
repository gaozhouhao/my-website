import type { MetadataRoute } from "next";
import { publicRoutes } from "../lib/content";
import { site } from "../lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: route === "/" ? site.url : `${site.url}${route}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: route === "/" || route === "/projects" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : route.startsWith("/projects") ? 0.8 : 0.6,
  }));
}
