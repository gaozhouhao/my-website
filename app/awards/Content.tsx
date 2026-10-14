import type { Locale } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";
import { awards } from "../../lib/awards";

export const metadata = pageMetadata("竞赛与奖项", "郜周豪参加的电子设计、智能汽车、数学建模、基础学科竞赛，附获奖证书。", "/awards", "zh");

const groups = [
  { id: "engineering", zh: "电子设计与智能汽车", en: "Electronic design, programming & smart cars" },
  { id: "modeling", zh: "数学建模", en: "Mathematical modeling" },
  { id: "science", zh: "数学与物理实验", en: "Mathematics & physics experiments" },
] as const;

export function AwardsPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
      <p className="eyebrow">{zh ? "奖项荣誉" : "Awards"}</p>
      <h1 className="page-title">{zh ? "竞赛经历与获奖记录" : "Competitions & awards"}</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        {zh ? "电子设计、智能汽车、数学建模与基础学科竞赛。点击比赛名称，即可查看对应奖状。" : "Competition experience across electronic design, smart cars, mathematical modeling, and science. Select a competition title to view its certificate."}
      </p>
      <nav className="button-row" aria-label={zh ? "竞赛分类" : "Competition categories"}>
        {groups.map(group => <a className="button" key={group.id} href={`#${group.id}`}>{group[locale]}</a>)}
      </nav>
      {groups.map(group => (
        <section className="section awards-section" id={group.id} key={group.id}>
          <h2 className="section-heading">{group[locale]}</h2>
          <div className="awards-grid">
            {awards.filter(award => award.group === group.id).map(award => {
              const [name, level] = award[locale];
              return (
                <article className="card award-card" id={award.id} key={award.id}>
                  <p className="eyebrow">{award.date && `${award.date} · `}{level}</p>
                  <h3>
                    <a className="award-title-link" href={award.certificate} target="_blank" rel="noreferrer" aria-label={zh ? `查看${name}的${level}奖状（新窗口）` : `View certificate: ${name}, ${level} (new tab)`}>
                      <span>{name}</span><span className="award-link-icon" aria-hidden="true">↗</span>
                    </a>
                  </h3>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default function Page() { return <AwardsPage locale="zh" />; }
