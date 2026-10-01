import { ImageResponse } from "next/og";

export const alt = "郜周豪 — 集成电路设计作品集";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px", color: "#1c1a1b", background: "#f5f1ea", border: "24px solid #1c1a1b" }}>
      <div style={{ color: "#705c8c", fontSize: 28, letterSpacing: 5 }}>集成电路设计作品集</div>
      <div style={{ fontSize: 78, fontWeight: 700, marginTop: 28 }}>郜周豪</div>
      <div style={{ color: "#4d4946", fontSize: 34, marginTop: 24 }}>数字集成电路 · 寄存器传输级与片上系统设计 · 混合信号设计</div>
      <div style={{ color: "#6d6965", fontSize: 25, marginTop: 48 }}>集成电路设计理学硕士 · 2027 届</div>
    </div>,
    size,
  );
}
