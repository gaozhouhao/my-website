import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";
import { site } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Gao Zhouhao | IC Design Portfolio",
    template: "%s | Gao Zhouhao",
  },
  description: site.description,
  applicationName: "Gao Zhouhao IC Design Portfolio",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: ["IC design", "analog IC", "RTL", "SoC", "ASIC", "RISC-V", "hardware portfolio"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Gao Zhouhao | IC Design Portfolio",
    description:
      "Engineering evidence across analog IC, RTL, SoC, ASIC flow, verification, and hardware.",
    url: site.url,
    siteName: "Gao Zhouhao IC Design Portfolio",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: site.title }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: ["/opengraph-image"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-black text-white">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
