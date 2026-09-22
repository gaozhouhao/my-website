type Props = { bvid: string; title: string };

export default function CompetitionVideo({ bvid, title }: Props) {
  return <div className="video-preview">
    <iframe
      src={`https://player.bilibili.com/player.html?bvid=${bvid}&autoplay=0&poster=1&danmaku=0`}
      title={title}
      loading="eager"
      scrolling="no"
      allowFullScreen
    />
  </div>;
}
