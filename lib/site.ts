import type { Metadata } from "next";
import type { Locale } from "./i18n";
import { localizedPath } from "./i18n";

export const site = {
  name: "Gao Zhouhao",
  title: "Gao Zhouhao | IC Design Portfolio",
  description:
    "Engineering portfolio of Gao Zhouhao, a 2027 M.Sc. candidate working across analog IC, RTL, SoC, ASIC flow, verification, and hardware.",
  url: "https://gaozhouhao.com",
  email: "ZhouhaoG.ICD2526@tum-asia.edu.sg",
  github: "https://github.com/gaozhouhao",
} as const;

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  locale: Locale = "zh",
): Metadata {
  const localized = localizedPath(path, locale);
  const displayName = locale === "zh" ? "郜周豪" : site.name;
  const canonical = localized === "/" ? site.url : `${site.url}${localized}`;
  const zhPath = localizedPath(path, "zh");
  const enPath = localizedPath(path, "en");

  return {
    title: { absolute: `${title} | ${displayName}` },
    description,
    applicationName: locale === "zh" ? "郜周豪 IC 设计作品集" : "Gao Zhouhao IC Design Portfolio",
    authors: [{ name: displayName, url: canonical }],
    creator: displayName,
    publisher: displayName,
    alternates: {
      canonical,
      languages: {
        "zh-CN": zhPath === "/" ? site.url : `${site.url}${zhPath}`,
        en: `${site.url}${enPath}`,
        "x-default": zhPath === "/" ? site.url : `${site.url}${zhPath}`,
      },
    },
    openGraph: {
      title: `${title} | ${displayName}`,
      description,
      url: canonical,
      siteName: locale === "zh" ? "郜周豪 IC 设计作品集" : "Gao Zhouhao IC Design Portfolio",
      type: "website",
      locale: locale === "zh" ? "zh_CN" : "en_US",
      alternateLocale: locale === "zh" ? ["en_US"] : ["zh_CN"],
      images: [{ url: locale === "zh" ? "/opengraph-image" : "/en/opengraph-image", width: 1200, height: 630, alt: `${displayName} IC Design Portfolio` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${displayName}`,
      description,
      images: [locale === "zh" ? "/opengraph-image" : "/en/opengraph-image"],
    },
  };
}
