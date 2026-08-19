import { ImageResponse } from "next/og";

export const alt = "Gao Zhouhao — IC Design Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "76px", color: "#f5f7fa", background: "linear-gradient(135deg,#070a0f 20%,#102d2b 100%)" }}>
      <div style={{ color: "#79d7c8", fontSize: 28, letterSpacing: 5, textTransform: "uppercase" }}>IC Design Portfolio</div>
      <div style={{ fontSize: 78, fontWeight: 700, marginTop: 28 }}>Gao Zhouhao</div>
      <div style={{ color: "#c5ced9", fontSize: 34, marginTop: 24 }}>Analog / Mixed-Signal IC · Digital IC / RTL · SoC Design</div>
      <div style={{ color: "#aab5c3", fontSize: 25, marginTop: 48 }}>M.Sc. Integrated Circuit Design · 2027 Graduate</div>
    </div>,
    size,
  );
}
