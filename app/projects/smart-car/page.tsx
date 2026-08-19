import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("Multi-Vehicle Smart Car Hardware", "PCB, hardware bring-up, communication, PID tuning, and system-debug evidence from a national smart-car competition project.", "/projects/smart-car");

export default function SmartCarPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Embedded · PCB · Hardware Bring-Up</p>
      <h1 className="page-title">Multi-Vehicle Formation Smart Car</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>A team competition system using CH32V307VCT6 and STC16F40K128 controllers, electromagnetic tracking, ultrasonic distance sensing, and Bluetooth-UART communication. The team received a National Second Prize.</p>
      <section className="section split"><div><h2 className="section-heading">My verified contribution</h2><p className="section-intro">I was primarily responsible for hardware: multiple PCBs, board fabrication and assembly, soldering and rework, hardware debugging, PID parameter tuning, vehicle integration, and the Bluetooth-UART inter-vehicle link.</p></div><dl className="fact-panel"><dt>Project type</dt><dd>Five-member team competition project; no formal team-leader title</dd><dt>Result</dt><dd>17th National College Student Smart Car Competition · National Second Prize</dd><dt>Boundary</dt><dd>The base software framework was mainly written by a teammate</dd></dl></section>
      <section className="prose-section"><h2>Engineering evidence</h2><div className="evidence-grid"><article className="card"><p className="eyebrow">Board-level work</p><h3>PCB, assembly, and bring-up</h3><p>Design of multiple boards, component assembly, hand soldering, rework, electrical debugging, and full-vehicle integration. Exact board names and circuit blocks remain unlisted until confirmed.</p></article><article className="card"><p className="eyebrow">System integration</p><h3>Communication and tuning</h3><p>Implementation/debug of the Bluetooth module’s UART connection and inter-vehicle communication path, plus PID parameter tuning and system-level integration. The full PID software framework is not claimed as my independent implementation.</p></article></div></section>
      <section className="prose-section"><h2>System demonstration</h2><div style={{ overflow: "hidden", borderRadius: "1rem", border: "1px solid var(--line)" }}><iframe src="https://player.bilibili.com/player.html?bvid=BV1hiQXBFEzB&autoplay=0" title="Multi-vehicle smart car system demonstration" loading="lazy" style={{ width: "100%", aspectRatio: "16 / 9", border: 0 }} allowFullScreen /></div></section>
      <p className="status-note prose-section">Unconfirmed regional ranking, precise control-loop ownership, specific board names, and claims of independently developing the entire embedded software stack are intentionally omitted.</p>
      <ProjectNavigation />
    </main>
  );
}
