import Image from "next/image";
import Link from "next/link";
import PatentCertificate, { patentCertificate } from "../../components/PatentCertificate";
import ReadingText from "../../components/ReadingText";
import { localizedPath, type Locale } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("论文与专利", "郜周豪发表的论文及已授权发明专利，附专利证书。", "/publications", "zh");

const papers = [
  {
    title: { zh: "基于交指结构的超紧凑低通人工表面等离子体激元滤波器", en: "Ultra-Compact Low-Pass Spoof Surface Plasmon Polariton Filter Based on Interdigital Structure" },
    credit: { zh: "第一作者 · Micromachines 2023", en: "First author · Micromachines 2023" },
    contribution: { zh: "主要负责结构设计、CST 仿真、印制电路板样机测试、数据处理与论文撰写。", en: "I led the filter design, CST simulations, prototype measurements and data analysis, and wrote the manuscript." },
    project: "/projects/sspp-filter",
    doi: "https://doi.org/10.3390/mi14091687",
    image: "/papers/SSPP.webp",
    width: 1105,
    height: 859,
    alt: { zh: "交指结构人工表面等离子体激元低通滤波器结构与样机", en: "Interdigital SSPP low-pass filter structure and prototype" },
    caption: { zh: "滤波器结构、印制电路板样机与实测响应。", en: "The filter design, fabricated board, and measured response." },
  },
  {
    title: { zh: "基于刺绣短路过孔的带宽增强型纺织半模基片集成腔体天线", en: "Textile Bandwidth-Enhanced Half-Mode Substrate-Integrated Cavity Antenna Based on Embroidered Shorting Vias" },
    credit: { zh: "第四作者 · Micromachines 2024", en: "Fourth author · Micromachines 2024" },
    contribution: { zh: "参与天线的验证工作。", en: "I contributed to antenna validation." },
    project: "/projects/textile-hmsic-antenna",
    doi: "https://doi.org/10.3390/mi15091081",
    image: "/papers/HMSIC.webp",
    width: 1071,
    height: 681,
    alt: { zh: "已发表论文中的纺织半模基片集成腔体天线", en: "Textile HMSIC antenna from the published paper" },
    caption: { zh: "纺织半模基片集成腔体天线论文插图。", en: "Textile antenna design from our 2024 paper." },
  },
] as const;

export function PublicationsPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const patentFacts = [
    [zh ? "专利号" : "Patent number", "ZL 2023 1 1089597.7"],
    [zh ? "授权公告号" : "Grant publication number", "CN 117060030 B"],
    [zh ? "申请日" : "Filing date", "2023-08-28"],
    [zh ? "授权公告日" : "Grant publication date", "2026-09-08"],
    [zh ? "专利权人" : "Patent holder", zh ? "江苏师范大学" : "Jiangsu Normal University"],
  ];
  return (
    <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
      <ReadingText as="h1" className="page-title">{zh ? "论文与专利" : "Publications & patent"}</ReadingText>
      {papers.map(paper => (
        <section className="publication-entry" key={paper.doi}>
          <div>
            <ReadingText as="p" className="eyebrow">{paper.credit[locale]}</ReadingText>
            <ReadingText as="h2" className="section-heading">{paper.title[locale]}</ReadingText>
            <ReadingText as="p" className="section-intro">{paper.contribution[locale]}</ReadingText>
            <div className="button-row">
              <a className="button button-primary" href={paper.doi} target="_blank" rel="noreferrer">{zh ? "查看论文" : "Open paper"}</a>
              <Link className="button" href={localizedPath(paper.project, locale)}>{zh ? "查看项目" : "View project"}</Link>
            </div>
          </div>
          <figure className="evidence">
            <a href={paper.image} target="_blank" rel="noreferrer" title={zh ? "查看原图（新窗口）" : "Open full-size image (new tab)"}>
              <Image src={paper.image} alt={paper.alt[locale]} width={paper.width} height={paper.height} sizes="(max-width: 480px) 90vw, 384px" />
            </a>
            <ReadingText as="figcaption">{paper.caption[locale]}</ReadingText>
          </figure>
        </section>
      ))}
      <section className="publication-entry">
        <div>
          <ReadingText as="p" className="eyebrow">{zh ? "第一发明人 · 授权发明专利" : "First inventor · Granted invention patent"}</ReadingText>
          <ReadingText as="h2" className="section-heading">{zh ? "基于交指结构的超小型低通人工表面等离子体激元滤波器" : "Miniaturized Low-Pass SSPP Filter Using an Interdigital Structure"}</ReadingText>
          <ReadingText as="p" className="section-intro">{zh ? "该发明专利与第一作者论文来自同一项滤波器研究。" : "This patent and my first-author paper came from the same filter research."}</ReadingText>
          <div className="button-row">
            <a className="button button-primary" href={patentCertificate} target="_blank" rel="noreferrer">{zh ? "查看证书（PDF）" : "Open certificate (PDF)"}</a>
            <Link className="button" href={localizedPath("/projects/sspp-filter", locale)}>{zh ? "查看项目" : "View project"}</Link>
          </div>
          <dl className="patent-facts">
            {patentFacts.map(([label, value]) => (
              <div key={label}><dt>{label}</dt><ReadingText as="dd">{value}</ReadingText></div>
            ))}
          </dl>
        </div>
        <PatentCertificate locale={locale} showCaptionLink={false} />
      </section>
    </main>
  );
}

export default function Page() {
  return <PublicationsPage locale="zh" />;
}
