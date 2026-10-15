import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import VisitorSurvey from "../components/VisitorSurvey";
import SiteFooter from "../components/SiteFooter";
import { site } from "../lib/site";

const editorial = Noto_Serif_SC({ weight: "400", subsets: ["latin"], display: "swap", preload: false, variable: "--font-editorial" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "郜周豪 | 集成电路设计作品集",
    template: "%s | 郜周豪",
  },
  description: site.description,
  applicationName: "郜周豪集成电路设计作品集",
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: ["IC design", "analog IC", "RTL", "SoC", "ASIC", "RISC-V", "hardware portfolio"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "郜周豪 | 集成电路设计作品集",
    description:
      "面向 IC 设计与硬件岗位的个人项目作品集。",
    url: site.url,
    siteName: "郜周豪集成电路设计作品集",
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
    <html lang="en" className={`h-full antialiased ${editorial.variable}`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <SiteFooter />
        <VisitorSurvey />
      </body>
    </html>
  );
}
