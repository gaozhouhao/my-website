import ReadingText from "../../components/ReadingText";
import type { Locale } from "../../lib/i18n";
import { pageMetadata, site } from "../../lib/site";

export const metadata = pageMetadata("联系方式", "郜周豪的求职方向、邮箱与 GitHub。", "/contact", "zh");

export function ContactPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <main id="main-content" className="page-shell page-narrow" lang={zh ? "zh-CN" : "en"}>
      <ReadingText as="h1" className="page-title">{zh ? "联系我" : "Contact me"}</ReadingText>
      <ReadingText className="lead">
        {zh
          ? "我预计 2027 年硕士毕业，希望从事数字 IC 设计，主要方向是 RTL 与 SoC，也关注混合信号电路和硬件开发。"
          : "I expect to graduate in 2027 with a master’s in Integrated Circuit Design. I’m looking for digital IC roles focused on RTL and SoC design. I’m also interested in mixed-signal circuits and hardware development."}
      </ReadingText>
      <section className="section contact-grid">
        <a className="card contact-card" href={`mailto:${site.email}`}>
          <ReadingText className="eyebrow">{zh ? "邮箱" : "Email"}</ReadingText>
          <ReadingText as="h2">{site.email}</ReadingText>
          <ReadingText>{zh ? "欢迎来信交流项目、讨论工作机会，或索取简历。" : "Email me to discuss a project or a job opportunity, or to request my résumé."}</ReadingText>
        </a>
        <a className="card contact-card" href={site.github} target="_blank" rel="noreferrer">
          <ReadingText className="eyebrow">GitHub</ReadingText>
          <ReadingText as="h2">github.com/gaozhouhao</ReadingText>
          <ReadingText>{zh ? "浏览 RTL 与 SoC 项目的源代码。" : "Browse the source code for my RTL and SoC projects."}</ReadingText>
        </a>
      </section>
    </main>
  );
}

export default function Page() {
  return <ContactPage locale="zh" />;
}
