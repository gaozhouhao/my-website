import Image from "next/image";
import type { Locale } from "../../lib/i18n";
import { pageMetadata } from "../../lib/site";

export const metadata = pageMetadata("工程之外", "郜周豪在工程之外的动手制作、音乐与生活记录。", "/beyond", "zh");

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

const imageLabelsZh: Record<string,string> = {"3D printed figure":"三维打印人物模型","3D printed figures":"三维打印人物模型","Hand-carved rubber stamp artwork":"手工雕刻橡皮章","Mini sculpture":"微型雕塑","Hand-carved rubber stamp artwork in orange":"橙色橡皮章作品","Hand-carved Fate rubber stamp artwork":"Fate 主题橡皮章作品","Bead art":"拼豆作品","Representative speech":"学生代表发言","Student selection presentation event":"学生评选展示活动","Student recognition event":"学生表彰活动","Street performance":"街头演奏","Playing guitar in a classroom":"教室吉他演奏","Swimming":"游泳","Outdoor life":"户外生活","Group photo":"合影"};

export function BeyondPage({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  return (
    <main id="main-content" className="page-shell" lang={zh ? "zh-CN" : "en"}>
      <p className="eyebrow">{zh ? "个人兴趣" : "Beyond Engineering"}</p>
      <h1 className="page-title">{zh ? "动手制作与日常兴趣" : "Making, music, and life outside IC design."}</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>
        {zh ? "记录三维打印、橡皮章雕刻、音乐和部分校园活动。" : "This secondary gallery preserves the original site's personal material without competing with the recruiting-focused engineering portfolio."}
      </p>

      <section className="section">
        <h2 className="section-heading">{zh ? "动手制作" : "Hands-on making"}</h2>
        <p className="section-intro">{zh ? "熔融沉积与光固化三维打印、橡皮章雕刻和小型手工作品，也是对迭代与精度的另一种实践。" : "FDM and SLA printing, stamp carving, and small physical builds—another outlet for iteration and precision."}</p>
        <div className="masonry-gallery">
          {making.map(([file, alt, width, height]) => (
            <Image key={file} src={`/beyond/making/${file}`} alt={zh ? imageLabelsZh[alt] : alt} width={width} height={height} sizes="(max-width: 800px) 50vw, 30vw" />
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-heading">{zh ? "其他记录" : "Selected moments"}</h2>
        <p className="section-intro">{zh ? "从原作品集中保留的公开演讲、音乐与日常生活片段。" : "Public speaking, music, and everyday life retained from the original portfolio."}</p>
        <div className="personal-gallery">
          {gallery.map(([file, alt, width, height]) => (
            <Image key={file} src={`/beyond/${file}`} alt={zh ? imageLabelsZh[alt] : alt} width={width} height={height} sizes="(max-width: 800px) 50vw, 30vw" />
          ))}
        </div>
      </section>
    </main>
  );
}

export default function Page() { return <BeyondPage locale="zh" />; }
