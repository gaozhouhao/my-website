import type { Metadata } from "next";

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
): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: canonical,
      siteName: "Gao Zhouhao IC Design Portfolio",
      type: "website",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: ["/opengraph-image"],
    },
  };
}
