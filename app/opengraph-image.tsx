import { ImageResponse } from "next/og";

export const alt = "郜周豪 — 集成电路设计作品集";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px", color: "#f5f7fa", background: "linear-gradient(135deg,#070a0f 20%,#102d2b 100%)" }}>
      <div style={{ color: "#79d7c8", fontSize: 28, letterSpacing: 5 }}>集成电路设计作品集</div>
      <div style={{ fontSize: 78, fontWeight: 700, marginTop: 28 }}>郜周豪</div>
      <div style={{ color: "#c5ced9", fontSize: 34, marginTop: 24 }}>模拟与混合信号集成电路 · 数字集成电路 / 寄存器传输级设计 · 片上系统 设计</div>
      <div style={{ color: "#aab5c3", fontSize: 25, marginTop: 48 }}>集成电路设计理学硕士 · 2027 届</div>
    </div>,
    size,
  );
}
