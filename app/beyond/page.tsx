import Image from "next/image";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("Beyond Engineering", "Hands-on making, music, and life beyond Gao Zhouhao's engineering portfolio.", "/beyond");

const making = [
  ["figure-fern.webp", "3D printed figure", 1080, 1440],
  ["figure-bajie.webp", "3D printed figures", 1440, 1080],
  ["stamp-anime-black.webp", "Hand-carved rubber stamp artwork", 853, 640],
  ["mini-sculpture.webp", "Mini sculpture", 1080, 1440],
  ["stamp-anime-orange.webp", "Hand-carved rubber stamp artwork in orange", 800, 600],
  ["stamp-fate.webp", "Hand-carved Fate rubber stamp artwork", 853, 640],
  ["figure-wukong.webp", "3D printed figure", 1039, 1386],
  ["bead-art.webp", "Bead art", 1080, 809],
] as const;

const gallery = [
  ["leadership/speech-red.webp", "Representative speech", 725, 544],
  ["leadership/top10-stage.webp", "Student selection presentation event", 1179, 884],
  ["leadership/award-top10.webp", "Student recognition event", 1440, 1080],
  ["music/street-performance.webp", "Street performance", 847, 635],
  ["music/guitar-classroom.webp", "Playing guitar in a classroom", 1015, 761],
  ["life/swim.webp", "Swimming", 1572, 1179],
  ["life/fish.webp", "Outdoor life", 1702, 1276],
  ["life/group-photo.webp", "Group photo", 3024, 4032],
] as const;

export default function BeyondPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Beyond Engineering</p>
      <h1 className="page-title">Making, music, and life outside IC design.</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        This secondary gallery preserves the original site&apos;s personal material without competing with the recruiting-focused engineering portfolio.
      </p>

      <section className="section">
        <h2 className="section-heading">Hands-on making</h2>
        <p className="section-intro">FDM and SLA printing, stamp carving, and small physical builds—another outlet for iteration and precision.</p>
        <div className="masonry-gallery">
          {making.map(([file, alt, width, height]) => (
            <Image key={file} src={`/beyond/making/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 800px) 50vw, 30vw" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">Selected moments</h2>
        <p className="section-intro">Public speaking, music, and everyday life retained from the original portfolio.</p>
        <div className="personal-gallery">
          {gallery.map(([file, alt, width, height]) => (
            <Image key={file} src={`/beyond/${file}`} alt={alt} width={width} height={height} sizes="(max-width: 800px) 50vw, 30vw" />
          ))}
        </div>
      </section>
    </main>
  );
}
