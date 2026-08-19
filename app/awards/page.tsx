import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Awards", "Verified engineering and modeling competition awards of Gao Zhouhao.", "/awards");

const awards = [
  ["2022.08", "National Second Prize", "17th National College Student Smart Car Competition · Multi-Vehicle Formation"],
  ["2022.08", "First Prize, Jiangsu", "TI Cup College Student Electronic Design Competition"],
  ["2021.11", "Second Prize, Jiangsu Division", "National College Student Electronic Design Competition"],
  ["2022", "National First Prize", "12th MathorCup University Mathematical Modeling Challenge"],
];

export default function AwardsPage() {
  return (
    <main id="main-content" className="page-shell page-narrow">
      <p className="eyebrow">Awards</p>
      <h1 className="page-title">Selected verified awards.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>Only awards with confirmed names and levels are shown. Candidate honors and unverified rankings remain offline.</p>
      <section className="section">
        {awards.map(([date, level, name]) => (
          <article className="card" style={{ marginTop: "1rem" }} key={name}>
            <p className="eyebrow">{date} · {level}</p>
            <h2 style={{ margin: ".65rem 0 0", fontSize: "1.2rem" }}>{name}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
