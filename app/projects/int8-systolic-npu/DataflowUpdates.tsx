import type { Locale } from "../../../lib/i18n";
import styles from "./page.module.css";

const source = "https://github.com/gaozhouhao/npu/blob/0c4fc4d50f00bebc5ce41205f97e23a8ee21a72f/";
const fmt = (n: number) => n.toLocaleString("en-US");
const layers = [[1,238759,235246],[2,238543,235254],[6,29424,27940],[0,88489,114146],[4,106477,119638]];

export default function DataflowUpdates({locale}:{locale:Locale}) {
  const zh = locale === "zh";
  return <section className={styles.section} aria-labelledby="npu-dataflow">
    <div className={styles.sectionTitle}><h2 id="npu-dataflow">{zh ? "可编程数据流与 B 预取" : "Programmable dataflow and B prefetch"}</h2><span>2026-10 · A / B / Auto</span></div>
    <p>{zh ? "我将 A/B Tile 的驻留策略接入 Descriptor，编译器可以逐层选择复用方向。Tile Policy 决定遍历顺序，Scheduler 管理加载、驻留和释放；PE 内部仍采用 Output-stationary，MAC 数据通路没有变化。" : "I added descriptor-controlled A/B tile residency so the compiler can choose reuse per layer. Tile Policy sets traversal order, while the scheduler manages loading, residency and release. PEs remain output-stationary with the same MAC datapath."}</p>
    <div className={styles.updateGrid}>
      <article><span className={styles.version}>A-STATIONARY</span><h3>{zh ? "跨 N Tile 复用 Activation" : "Reuse activations across N tiles"}</h3><p>{zh ? "A(M,K) 保留在 SRAM，供多个 N Tile 使用。K 跨多个 Tile 时，按 N Block 调度，由 C SRAM 保存各输出 Tile 的部分和。" : "Keep A(M,K) in SRAM across N tiles. For multi-K GEMMs, N-block scheduling uses C SRAM to retain each output tile’s partial sum."}</p></article>
      <article><span className={styles.version}>B-STATIONARY + PREFETCH</span><h3>{zh ? "跨 M Tile 复用 Weight" : "Reuse weights across M tiles"}</h3><p>{zh ? "单 K Tile 时采用 N 外层、M 内层遍历，保留 B(K,N)。当前 Bank 继续计算，空闲 Bank 预取下一组 B；Multi-K 仍走 A Reuse + PSUM 通路。" : "For a single K tile, traverse N outside M and keep B(K,N) resident. One bank serves compute while the free bank prefetches the next B tile. Multi-K retains the A-reuse and PSUM path."}</p></article>
    </div>
    <div className={styles.tableScroll}><table className="result-table"><caption>{zh ? "本轮 ResNet-8 · Verilator 对照记录" : "ResNet-8 · Verilator comparison for this revision"}</caption><thead><tr><th>{zh ? "指标" : "Metric"}</th><th>A-Stationary</th><th>B-Stationary + Prefetch</th></tr></thead><tbody>{[
      ["A Tile Loads",1489,4929], ["B Tile Loads",6659,2351], ["Matrix Executions",6659,6659], ["End-to-End Cycles",1402851,1433293],
    ].map(([label,a,b])=><tr key={label}><th scope="row">{label}</th><td>{fmt(Number(a))}</td><td>{fmt(Number(b))}</td></tr>)}</tbody></table></div>
    <p className={styles.finding}>{zh ? "B Tile 加载减少 64.7%，A Tile 加载则从 1,489 增至 4,929 次，整网周期增加 2.17%。卷积 Patch 与权重的加载成本不同：这次整网测试中 A 模式更快，部分单层则受益于 B 复用。" : "B tile loads fall by 64.7%, while A loads rise from 1,489 to 4,929 and total cycles increase by 2.17%. Convolution patches and weights have different loading costs: A is faster over this full network, while some layers benefit from B reuse."}</p>
    <p className={styles.note}>{zh ? "本表为近期 A/B 对照，两个配置均执行 6,659 次矩阵计算；B 配置中的多 K 层保留 A Reuse + PSUM。上方 1,828,229 cycles 是此前的性能基线，单独保留，不混用其计数。" : "Both configurations execute 6,659 matrix operations; multi-K layers in the B configuration retain A reuse plus PSUM. The earlier 1,828,229-cycle baseline above is kept separately, without mixing its counters into this comparison."}</p>
    <details className={styles.details}><summary>{zh ? "逐层差异与 B Prefetch 实现" : "Layer comparisons and B prefetch implementation"}</summary>
      <div className={styles.tableScroll}><table className="result-table"><thead><tr><th>Layer</th><th>A Cycles</th><th>B Cycles</th><th>{zh ? "B 相对 A" : "B vs. A"}</th></tr></thead><tbody>{layers.map(([i,a,b])=><tr key={i}><th scope="row">Conv {i}</th><td>{fmt(a)}</td><td>{fmt(b)}</td><td>{b>a?"+":"−"}{(Math.abs(b-a)/a*100).toFixed(2)}%</td></tr>)}</tbody></table></div>
      <p>{zh ? "在这组记录中，Conv 1、2、6 的 B 模式更快，Conv 0、4 的 A 模式更快。Conv 1 的 AXI Read Beats 从 195,092 降至 154,244（−20.94%），周期减少 1.47%。" : "In these runs, B is faster for Conv 1, 2 and 6; A is faster for Conv 0 and 4. Conv 1 AXI read beats drop from 195,092 to 154,244 (−20.94%), with a 1.47% cycle reduction."}</p>
      <h3>{zh ? "预取与驻留 Tag 的生命周期" : "Prefetch and residency-tag lifetime"}</h3>
      <p>{zh ? "原先旧 B Tile 的 Residency Valid 会阻止下一组 B 发起加载。双 Bank 预取解除这一限制，同时收紧 Tag 失效条件，避免旧 Tile 完成时清掉新预取 Tile 的驻留信息。B 在当前 N 对应的多个 M Tile 之间继续复用。" : "Previously, the old B tile’s residency-valid flag blocked loading the next B tile. Dual-bank prefetch removes that dependency and tightens tag invalidation so completion of an older tile does not erase the prefetched tile’s residency. B reuse across the current N tile’s M tiles is preserved."}</p>
    </details>
    <details className={styles.details}><summary>{zh ? "编译器选择策略与验证范围" : "Compiler policy and validation scope"}</summary>
      <p>{zh ? "编译器支持 A / B / Auto，并将选择写入 Descriptor Flag、DDR Binary/HEX 和 Manifest。近期 Cost Model 按 M/N/K Tile 数量、Operand 大小及估计访存开销比较两种策略，输出逐层估算和选择理由。Multi-K 优先保留 A Reuse + PSUM；模型尚未用实测数据校准。" : "The compiler supports A / B / Auto and propagates the choice into descriptor flags, DDR binary/HEX images and the manifest. The recent cost model compares tile counts, operand sizes and estimated memory costs, reporting per-layer estimates and selection reasons. Multi-K retains A reuse plus PSUM. The model has not yet been calibrated against measured timings."}</p>
      <p>{zh ? "A/B 模式已观测到相同 Top-1。完整逐元素一致性仍以各配置的测试记录为准，不沿用此前固定样本回归的 PASS 结论。" : "Matching Top-1 outputs have been observed in A/B runs. Element-wise agreement requires each configuration’s own test record; earlier fixed-sample regression results are not extended to these runs."}</p>
      <p className={styles.note}>{zh ? "记录范围：性能数字、B Prefetch 修复及扩展 Cost Model 来自本轮开发记录。公开提交 0c4fc4d 已包含运行时 A/B 调度，但 Auto 仍使用 Tile 数量启发式，尚未包含上述预取修复与完整成本报告。" : "Record scope: timings, the B prefetch fix and expanded cost model come from this development update. Public commit 0c4fc4d contains runtime A/B scheduling, but Auto still uses a tile-count heuristic; the prefetch fix and full cost reports are not included in that revision."} <a href={source+"rtl/core/tile_scheduler.sv"}>Scheduler ↗</a> · <a href={source+"rtl/core/tile_policy.sv"}>Tile Policy ↗</a> · <a href={source+"scripts/compile_resnet8_tflite.py"}>Compiler ↗</a></p>
    </details>
  </section>;
}
