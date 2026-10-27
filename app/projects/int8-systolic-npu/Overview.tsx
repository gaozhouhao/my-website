import ReadingText from "../../../components/ReadingText";
import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import styles from "./page.module.css";

const runs = [
  { zh: "Burst，串行供数", en: "Burst · Serial loading", cycles: 1212904532 },
  { zh: "Burst，双缓冲", en: "Burst · Double buffering", cycles: 948269129 },
  { zh: "当前精简优化版", en: "Current streamlined design", cycles: 489351345 },
];

export default function Overview({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const t = (cn: string, en: string) => zh ? cn : en;
  return <main id="main-content" className={`page-shell ${styles.page}`} lang={zh ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t("数字集成电路 · RTL · 模型编译", "Digital IC · RTL · Model compilation")}</ReadingText>
    <header className={styles.heading}>
      <ReadingText as="h1" className="page-title">{t("自研 INT8 NPU", "Custom INT8 NPU")}</ReadingText>
      <ReadingText as="p" className={styles.subtitle}>{t("从模型编译到 ResNet-50 整数执行", "From model compilation to integer execution of ResNet-50")}</ReadingText>
      <ReadingText as="p" className={styles.intro}>{t("独立设计基于 4×4 脉动阵列的 INT8 NPU，配套 TFLite/ONNX 模型编译工具链，完成模型转换、硬件任务生成与 RTL 执行。已在完整 ResNet-50 整数工作负载上完成逐层数值验证，并通过存储与调度优化减少整网执行周期。", "Independently designed a 4×4 systolic INT8 NPU and a TFLite/ONNX compiler toolchain, covering model conversion, hardware task generation and RTL execution. Validated the complete ResNet-50 integer workload layer by layer, then reduced execution cycles through memory and scheduling improvements.")}</ReadingText>
    </header>
    <dl className={styles.metrics}>
      <div><dt>4×4</dt><ReadingText as="dd">{t("INT8 脉动阵列", "INT8 systolic array")}</ReadingText></div>
      <div><dt>72</dt><ReadingText as="dd">{t("条硬件任务全部通过数值校验", "hardware tasks, all numerically verified")}</ReadingText></div>
      <div><dt>2.48×</dt><ReadingText as="dd">{t("同频等效加速 · 相比串行基线", "equivalent speedup at equal clock frequency vs. serial baseline")}</ReadingText></div>
    </dl>

    <section className={styles.section} aria-labelledby="npu-system">
      <ReadingText as="h2" id="npu-system">{t("系统架构", "System architecture")}</ReadingText>
      <ReadingText as="p">{t("主机提供任务描述符的起始地址与数量，NPU 自主读取并调度。矩阵乘法、卷积和全连接共用计算引擎，池化与残差加法使用独立引擎；不同任务通过 DDR 交接数据。", "The host supplies a descriptor base address and count; the NPU fetches and schedules the tasks. GEMM, convolution and fully connected layers share the matrix engine, while pooling and residual addition use dedicated engines. Separate tasks exchange data through DDR.")}</ReadingText>
      <figure className={styles.diagram}>
        <a href="/projects/npu-system-architecture.png" target="_blank" rel="noreferrer" aria-label={t("查看系统架构原图（新窗口）", "Open full-size system architecture in a new tab")}><Image src="/projects/npu-system-architecture.png" alt={t("NPU 系统架构：读取互连、任务调度、计算引擎与共享写回通路", "NPU system architecture: read interconnect, task dispatch, compute engines and shared writeback")} width={1492} height={1790} sizes="(max-width: 800px) 100vw, 720px" priority /></a>
        <ReadingText as="figcaption">{t("实线为数据，虚线为控制与配置。点击查看原图。", "Solid lines show data; dashed lines show control and configuration. Select the image for full detail.")}</ReadingText>
      </figure>
    </section>

    <section className={`${styles.section} ${styles.workGrid}`} aria-label={t("三项核心工作", "Three areas of implementation")}>
      {[
        ["计算与存储", "Compute and memory", "设计 INT8 乘加阵列、INT32 累加和量化后处理，结合分块调度、A/B 双缓冲与数据复用，协调数据搬运、计算和写回。", "Designed the INT8 MAC array, INT32 accumulation and quantized postprocessing. Tiled scheduling, A/B double buffering and data reuse coordinate transfers, computation and writeback."],
        ["模型编译", "Model compilation", "实现算子映射、权重布局、量化参数转换与 DDR 内存规划，将 ResNet-50 转换为 72 条硬件任务，由 NPU 自主调度执行。", "Implemented operator mapping, weight layouts, quantization conversion and DDR allocation. ResNet-50 compiles into 72 hardware tasks for autonomous execution by the NPU."],
        ["验证与优化", "Validation and optimization", "建立独立整数参考模型，逐层核对 RTL 输出及完整 DDR 数据；通过统一条件的性能对照，测量双缓冲和后续优化的实际收益。", "Built an independent integer reference model to check each layer and the complete DDR contents. Matched-condition benchmarks measure the gains from double buffering and subsequent optimizations."],
      ].map(([cn, en, bodyCn, bodyEn]) => <article key={en}><ReadingText as="h2">{t(cn, en)}</ReadingText><ReadingText as="p">{t(bodyCn, bodyEn)}</ReadingText></article>)}
    </section>

    <section className={styles.section} aria-labelledby="npu-performance">
      <ReadingText as="h2" id="npu-performance">{t("ResNet-50 整网执行周期", "ResNet-50 full-network execution cycles")}</ReadingText>
      <figure className={styles.chart}>
        <ReadingText as="figcaption">{t("柱长按执行周期等比例绘制", "Bar lengths are proportional to execution cycles")}</ReadingText>
        <ol>{runs.map((run, index) => <li key={run.en}>
          <div className={styles.barLabel}><ReadingText as="p">{t(run.zh, run.en)}</ReadingText><span>{run.cycles.toLocaleString("en-US")} {t("周期", "cycles")}</span></div>
          <div className={styles.track} aria-hidden="true"><div className={index === 2 ? styles.current : styles.baseline} style={{ width: `${run.cycles / runs[0].cycles * 100}%` }} /></div>
        </li>)}</ol>
      </figure>
      <ReadingText as="p" className={styles.conclusion}>{t("相比保留 Burst 的串行供数基线，当前版本整网周期减少 59.65%，同频等效加速 2.48 倍。", "Compared with the serial-loading baseline with Burst enabled, the current design uses 59.65% fewer cycles, equivalent to a 2.48× speedup at equal clock frequency.")}</ReadingText>
      <ReadingText as="p" className={styles.note}>{t("数据来自统一条件的 RTL 周期仿真；使用真实 ONNX 权重和合成 INT8 输入，尚未验收 ImageNet 分类精度。", "Measured in RTL cycle simulation under matched conditions, using real ONNX weights and synthetic INT8 input. ImageNet classification accuracy has not been evaluated.")}</ReadingText>
    </section>

    <div className={styles.records}>
      <details className={styles.details}>
        <summary>{t("技术细节与验证记录", "Technical details and validation")}</summary>
        <div className={styles.detailBody}>
          <ReadingText as="h3">{t("性能指标与对照条件", "Metrics and comparison setup")}</ReadingText>
          <ul>{[
            ["双缓冲及对应预取调度：周期减少 21.82%。", "Double buffering and its prefetch scheduling reduce cycles by 21.82%."],
            ["后续组合优化：在双缓冲基础上再减少 48.40%。", "Subsequent optimizations together reduce cycles by a further 48.40% relative to the double-buffered design."],
            ["当前有用吞吐为 8.0683 MAC/周期；整网有效利用率为 50.43%，包含搬运及辅助算子开销。", "Useful throughput is 8.0683 MAC/cycle. Effective utilization is 50.43% over the full run, including transfers and auxiliary operators."],
            ["DDR 读取量：2,093,158,512 → 1,278,406,224 字节，减少 38.92%。", "DDR reads fall from 2,093,158,512 to 1,278,406,224 bytes, a 38.92% reduction."],
          ].map(([cn, en]) => <ReadingText as="li" key={en}>{t(cn, en)}</ReadingText>)}</ul>
          <ReadingText as="p">{t("两段周期降幅采用不同基线，不能直接相加。后续收益为多项优化的组合结果；三组均保留 Burst，本次对照不单独测量 Burst 的收益。", "The two reductions use different baselines and are not additive. Later gains reflect the combined optimizations. All three designs retain Burst; this comparison does not isolate its contribution.")}</ReadingText>
          <ReadingText as="h3">{t("完整网络数值验证", "Full-network numerical validation")}</ReadingText>
          <ul>{[
            ["输入为 224×224×3；72 条任务包括 53 Conv、16 Add、1 MaxPool、1 GAP、1 FC。", "The input is 224×224×3. The 72 tasks comprise 53 Conv, 16 Add, one MaxPool, one GAP and one FC."],
            ["三组全部通过逐层数值核对，完整 29,404,672 字节 DDR 均与独立 NumPy 整数参考一致。", "All three runs pass every layer comparison; the complete 29,404,672-byte DDR image matches the independent NumPy integer reference."],
            ["三组共用模型、输入、量化参数与 DDR 时序。外部读 64 bit、写 32 bit；读 Burst 首拍等待 20 周期。", "All runs share the model, input, quantization parameters and DDR timing: 64-bit reads, 32-bit writes and a 20-cycle first-beat read delay."],
            ["串行和双缓冲基线由历史代码组合并作必要功能回补，不是未经修改的早期完整版本。", "The serial and double-buffered baselines combine historical code with necessary functional backports; they are not unmodified early full-system revisions."],
          ].map(([cn, en]) => <ReadingText as="li" key={en}>{t(cn, en)}</ReadingText>)}</ul>
          <ReadingText as="h3">{t("当前计算与存储路径", "Current compute and memory paths")}</ReadingText>
          <ReadingText as="p">{t("当前版保留原生 64 位操作数读取、A/B 双 Bank、输出驻留累加、跨 K 输入复用与部分和槽，并已删除卷积读取缓存。硬件支持局部卷积与池化融合；本次 ResNet-50 的 72 条任务仍逐条执行，通过 DDR 交接。", "The current design retains native 64-bit operand reads, A/B double banks, output-stationary accumulation, cross-K input reuse and partial-sum slots. The convolution read cache has been removed. The hardware supports local convolution/pooling fusion; this ResNet-50 workload executes its 72 tasks separately, exchanging data through DDR.")}</ReadingText>
          <details className={styles.nested}>
            <summary>{t("旧版计算与存储图", "Earlier compute and memory diagram")}</summary>
            <ReadingText as="p">{t("下图记录精简前的存储结构，其中 2 KiB 卷积读取缓存已从当前版移除。SRAM 深度、位宽与部分和路径按图示旧版记录保留。", "This diagram records the design before cleanup, including the 2 KiB convolution read cache removed from the current implementation. SRAM depths, widths and partial-sum paths are retained here as an earlier architecture record.")}</ReadingText>
            <figure className={styles.diagram}>
              <a href="/projects/npu-compute-memory.png" target="_blank" rel="noreferrer" aria-label={t("查看旧版计算与存储原图（新窗口）", "Open the earlier compute and memory diagram in a new tab")}><Image src="/projects/npu-compute-memory.png" alt={t("旧版计算与存储图，包含当前版已删除的卷积读取缓存", "Earlier compute and memory diagram including the convolution read cache removed from the current design")} width={1492} height={2030} sizes="(max-width: 800px) 100vw, 720px" /></a>
              <ReadingText as="figcaption">{t("旧版架构记录 · 点击查看原图。", "Earlier architecture record · Select for full detail.")}</ReadingText>
            </figure>
          </details>
          <details className={styles.nested}>
            <summary>{t("历史性能与 DMA 调试记录", "Historical benchmarks and DMA debugging")}</summary>
            <ReadingText as="h3">MNIST CNN</ReadingText>
            <ReadingText as="p">{t("历史版本通过输入分块复用、AXI Burst 与数据拼装，将整网周期由 531,563 降至 74,527，减少 85.98%。四张测试图片的五层输出全部与软件参考一致。", "An earlier design reduced cycles from 531,563 to 74,527 (85.98%) through input-tile reuse, AXI Burst and word assembly. All five layer outputs matched the software reference for four test images.")}</ReadingText>
            <ReadingText as="h3">CIFAR-10 ResNet-8</ReadingText>
            <ReadingText as="p">{t("历史原生 64 位通路与卷积缓存优化将周期由 1,486,468 降至 1,255,817，减少 15.52%。另一版固定配置完成十张图片、140 组层输出核对。以上为历史版本与各自测试条件下的记录。", "Earlier native 64-bit and convolution-cache optimizations reduced cycles from 1,486,468 to 1,255,817 (15.52%). A separate fixed configuration passed 140 layer checks across ten images. These records describe earlier revisions under their respective test conditions.")}</ReadingText>
            <ReadingText as="h3">{t("DMA 完成信号漏接", "Missed DMA completion pulse")}</ReadingText>
            <ReadingText as="p">{t("增加输入复用后，全连接层因漏接提前结束的单周期 DMA 完成信号而超时。改为从请求阶段记录完成状态，直至两路输入就绪；修复后通过输出比对与整网回归。", "After input reuse was added, the fully connected layer timed out when it missed an early one-cycle DMA completion pulse. Latching completion from the request phase until both inputs were ready resolved the issue; output checks and full-network regression passed.")}</ReadingText>
          </details>
        </div>
      </details>
      <details className={styles.details}>
        <summary>{t("DFT 实验 · 旧版综合网表", "DFT experiments · Earlier synthesized netlist")}</summary>
        <div className={styles.detailBody}>
          <ReadingText as="p">{t("完成 16 条扫描链插入，覆盖 75,137 个触发器；开展 stuck-at ATPG，故障覆盖率（Fault coverage）为 78.58%。另完成单个 SRAM 宏的 MBIST 正常运行与故障注入验证。", "Inserted 16 scan chains covering 75,137 flip-flops and ran stuck-at ATPG, achieving 78.58% fault coverage. A separate single-SRAM MBIST experiment passed normal-operation and fault-injection checks.")}</ReadingText>
          <ReadingText as="p">{t("共保存 16,502 条图样，Test coverage 为 92.19%。覆盖率采用未折叠故障统计，部分检测按 50% 计分：Fault coverage 以全部 2,747,638 个故障为分母，Test coverage 扣除 405,530 个不可检测故障。", "The run produced 16,502 patterns with 92.19% test coverage. Uncollapsed fault statistics give 50% credit to possibly detected faults: fault coverage uses all 2,747,638 faults, while test coverage excludes 405,530 undetectable faults.")}</ReadingText>
          <ReadingText as="p">{t("MBIST 使用 DW_mbist_ctrl 与 DW_mbist_apg，连接一块 32×64 单端口 SRAM。正常存储器通过，读数据 bit0 固定为 0 的注入故障被检出，全部 32 个地址均有读写访问。", "MBIST connects DW_mbist_ctrl and DW_mbist_apg to a 32×64 single-port SRAM. The healthy memory passes; a forced-zero fault on read-data bit 0 is detected, with reads and writes to all 32 addresses.")}</ReadingText>
          <ReadingText as="p" className={styles.note}>{t("以上 DFT 结果来自旧版网表。当前精简版尚未更新工艺映射后的面积、频率、功耗与 DFT 数据。", "These DFT results belong to an earlier netlist. Technology-mapped area, frequency, power and DFT results have not been updated for the current streamlined design.")}</ReadingText>
        </div>
      </details>
    </div>
    <div className={styles.source}><a className="button" href="https://github.com/gaozhouhao/npu" target="_blank" rel="noreferrer">{t("GitHub 源码 ↗", "Source on GitHub ↗")}</a></div>
    <ProjectNavigation />
  </main>;
}
