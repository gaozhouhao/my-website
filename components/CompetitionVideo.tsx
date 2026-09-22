// IDs verified against the public Bilibili video pages.
// Supply the content ID as well as the BV ID for the mobile player.
const videos = {
  BV1hiQXBFEzB: { aid: "116274864592594", cid: "36898932460" },
  BV1QXQQBbEMi: { aid: "116275065920784", cid: "36899196572" },
} as const;

type Props = { bvid: keyof typeof videos; title: string };

export default function CompetitionVideo({ bvid, title }: Props) {
  const { aid, cid } = videos[bvid];
  const params = new URLSearchParams({
    aid, bvid, cid, p: "1", page: "1",
    autoplay: "false", poster: "true", danmaku: "false",
    // The mobile player uses onlyPoster; the desktop player uses poster.
    onlyPoster: "true",
  });
  return <div className="video-preview">
    <iframe
      src={`https://player.bilibili.com/player.html?${params}`}
      title={title}
      loading="eager"
      scrolling="no"
      allowFullScreen
    />
  </div>;
}
