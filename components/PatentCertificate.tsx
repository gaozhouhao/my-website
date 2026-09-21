import Image from "next/image";
import type { Locale } from "../lib/i18n";

export const patentCertificate = "/certificates/patent/sspp-invention-patent.pdf";

export default function PatentCertificate({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <figure className="evidence patent-certificate">
      <a href={patentCertificate} target="_blank" rel="noreferrer" aria-label={zh ? "查看发明专利证书原件（新窗口）" : "Open the original invention patent certificate (new tab)"}>
        <Image src="/certificates/patent/sspp-invention-patent.png" alt={zh ? "基于交指结构的超小型低通人工表面等离子体激元滤波器：发明专利证书" : "Invention patent certificate for the interdigital ultra-small low-pass SSPP filter"} width={1132} height={1600} sizes="(max-width: 800px) 100vw, 45vw" />
      </a>
      <figcaption>
        {zh ? "发明专利证书 · 授权公告日：2026 年 9 月 8 日。" : "Invention patent certificate · Grant publication date: 8 September 2026."}
        <br />
        <a className="card-link" href={patentCertificate} target="_blank" rel="noreferrer">{zh ? "查看证书原件（PDF）" : "View original certificate (PDF)"} ↗</a>
      </figcaption>
    </figure>
  );
}
