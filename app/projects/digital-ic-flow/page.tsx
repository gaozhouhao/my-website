import ProjectNavigation from "../../../components/ProjectNavigation";
import { pageMetadata } from "../../../lib/site";

export const metadata = pageMetadata("GF 22 nm Digital IC Flow", "RTL, synthesis, timing-analysis, and place-and-route coursework evidence using GF 22 nm libraries.", "/projects/digital-ic-flow");

export default function DigitalIcFlowPage() {
  return (
    <main id="main-content" className="page-shell">
      <p className="eyebrow">Digital IC · ASIC Flow · STA</p>
      <h1 className="page-title">GF 22 nm Digital IC Design Laboratory</h1>
      <p className="lead" style={{ marginTop: "1.5rem" }}>Coursework evidence spanning transistor-level standard cells and an RTL-to-layout matrix-multiplier flow. This is not presented as tapeout, sign-off, or silicon validation.</p>
      <section className="section split"><div><h2 className="section-heading">Flow coverage</h2><p className="section-intro">CMOS inverter and NAND schematic/layout work; Verilog full-adder, state-machine and matrix-multiplier labs; Design Compiler synthesis; Innovus floorplan, placement, CTS, routing, and timing checks.</p></div><dl className="fact-panel"><dt>Technology</dt><dd>GF 22 nm educational design flow</dd><dt>Tools</dt><dd>Cadence Virtuoso, Calibre, Verilog, Synopsys Design Compiler, Cadence Innovus</dd><dt>Course result</dt><dd>Laboratory 2 Digital IC Design — A</dd></dl></section>
      <div className="evidence-grid">
        <article className="card"><p className="eyebrow">Transistor-level</p><h3>Inverter and NAND</h3><p>Schematic, simulation, custom layout, DRC/LVS/PEX, post-layout simulation, device-width exploration, drive-strength comparison, and worst-case NAND path analysis.</p></article>
        <article className="card"><p className="eyebrow">RTL</p><h3>FSM and matrix multiplier</h3><p>Course-framework RTL and testbench work. A registered FSM output was used to remove a combinational glitch at the cost of one cycle. Starter-code ownership boundaries are retained.</p></article>
        <article className="card"><p className="eyebrow">Synthesis / STA</p><h3>Design Compiler reports</h3><p>The matrix-multiplier report records 274 cells, 53 sequential cells, 220 combinational cells, and no timing violation under the documented 20 ns constraint. Area units were not stated and are not invented.</p></article>
        <article className="card"><p className="eyebrow">Physical implementation</p><h3>Innovus PnR</h3><p>The personal report contains pre-CTS, post-CTS, and post-route setup/hold checks with zero reported violating paths in the shown runs, plus documented post-route WNS and placement density.</p></article>
      </div>
      <section className="prose-section"><h2>Evidence boundaries</h2><ul><li>Some RTL/testbench files began from course starter code; the portfolio does not claim every line was written from scratch.</li><li>Power reports used different analysis settings, including one no-clock warning, so no single power figure is promoted as a final result.</li><li>The available evidence does not confirm final GDS, final sign-off DRC/LVS, tapeout, FPGA implementation, or silicon measurements.</li></ul></section>
      <ProjectNavigation />
    </main>
  );
}
