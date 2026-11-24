import ReadingText from "../../../components/ReadingText";
import Image from "next/image";
import ProjectNavigation from "../../../components/ProjectNavigation";
import type { Locale } from "../../../lib/i18n";
import styles from "./page.module.css";

const runs = [
  { zh: "Burst，串行供数", en: "Burst · Serial loading", cycles: 1212904532 },
  { zh: "Burst，双缓冲", en: "Burst · Double buffering", cycles: 948269129 },
  { zh: "当前版本", en: "Current design", cycles: 489351345 },
];

// First 64 bytes of the SmallCNN deployment's artifacts/npu/commands.bin.
const convDescriptor = [
  ["W0", "00000702", "低 8 位 0x02 选择卷积，高 24 位 0x07 启用偏置、重定量和 ReLU。", "Opcode 0x02 in bits 7–0 selects Conv. Flags 0x07 in bits 31–8 enable bias, requantization and ReLU."],
  ["W1–W3", "00000310 00000008 00000009", "M、N、K 分别为 784 个输出位置（28×28）、8 个输出通道和每个点积的 9 项乘加。", "M = 784 output positions (28×28), N = 8 output channels and K = 9 products per dot product."],
  ["W4–W5", "00002A80 00000000", "A 指向 DDR 中的输入特征图。", "A points to the input feature map in DDR."],
  ["W6–W7", "00000000 00000000", "B 指向卷积权重，本例的权重从 DDR 地址 0 开始。", "B points to the convolution weights, stored at DDR address zero in this image."],
  ["W8–W9", "00002D90 00000000", "C 指向输出特征图的写回地址。", "C is the writeback address for the output feature map."],
  ["W10", "001C001C", "低、高 16 位分别为输入高度和宽度，均为 28。", "The low and high halfwords give input height and width, both 28."],
  ["W11", "03030001", "低 16 位为输入通道数 1，高两个字节依次为卷积核高度 3、宽度 3。", "Bits 15–0 give one input channel. Bits 23–16 and 31–24 give kernel height and width, both 3."],
  ["W12", "01010101", "从低到高四个字节依次为纵向步长、横向步长、上侧补边、左侧补边，本层均取 1。", "From the least significant byte: vertical stride, horizontal stride, top padding and left padding, all 1."],
  ["W13–W14", "000029C0 00000000", "参数基址指向本层后处理所需的参数块。", "The parameter base points to the block used for postprocessing."],
  ["W15", "00000000", "池化窗口与步长配置。本条卷积未启用融合池化。", "Pool window and stride configuration. Fused pooling is disabled for this convolution."],
] as const;

export default function Overview({ locale }: { locale: Locale }) {
  const zh = locale === "zh";
  const t = (cn: string, en: string) => zh ? cn : en;
  return <main id="main-content" className={`page-shell ${styles.page}`} lang={zh ? "zh-CN" : "en"}>
    <ReadingText as="p" className="eyebrow">{t("数字集成电路 · RTL · 模型编译", "Digital IC · RTL · Model compilation")}</ReadingText>
    <header className={styles.heading}>
      <ReadingText as="h1" className="page-title">{t("INT8 NPU", "INT8 NPU")}</ReadingText>
      <ReadingText as="p" className={styles.subtitle}>{t("4×4 脉动阵列与 ResNet-50 整数推理", "4×4 systolic array and ResNet-50 integer inference")}</ReadingText>
      <ReadingText className={styles.intro}>{t(
        "我独立设计并实现了这款 NPU 和配套的 TFLite/ONNX 编译工具。编译器将模型转换为硬件任务，由 NPU 读取并执行。项目仍在迭代，当前版本已在 RTL 仿真中跑通 ResNet-50，各层的整数输出均与参考模型一致。",
        "I independently designed and implemented the NPU and its TFLite/ONNX compiler. The compiler turns a model into tasks that the NPU fetches and executes. Development is ongoing. The current RTL runs the full ResNet-50 workload in simulation and matches the integer reference at every layer."
      )}</ReadingText>
    </header>
    <dl className={styles.metrics}>
      <div><dt>4×4</dt><ReadingText as="dd">{t("INT8 脉动阵列", "INT8 systolic array")}</ReadingText></div>
      <div><dt>72</dt><ReadingText as="dd">{t("条硬件任务全部通过数值校验", "hardware tasks, all numerically verified")}</ReadingText></div>
      <div><dt>2.48×</dt><ReadingText as="dd">{t("同频加速比 · 相比串行供数基线", "speedup at equal clock frequency vs. serial-loading baseline")}</ReadingText></div>
    </dl>

    <section className={`${styles.section} ${styles.systemSpread}`} aria-labelledby="npu-system">
      <div>
      <ReadingText as="h2" id="npu-system">{t("系统架构", "System architecture")}</ReadingText>
      <ReadingText as="p">{t("主机提供任务描述符的起始地址与数量，NPU 自主读取并调度。矩阵乘法、卷积和全连接共用计算引擎，池化与残差加法使用独立引擎；不同任务通过 DDR 交接数据。", "The host supplies a descriptor base address and count; the NPU fetches and schedules the tasks. GEMM, convolution and fully connected layers share the matrix engine, while pooling and residual addition use dedicated engines. Separate tasks exchange data through DDR.")}</ReadingText>
      <ReadingText as="h3">{t("一条卷积如何执行", "How a convolution executes")}</ReadingText>
      <ReadingText as="p">{t("命令读取器解码后，通过 valid/ready 把任务交给矩阵引擎。DMA 根据卷积坐标读取输入窗口与权重，装入 A/B 双缓冲；阵列处理当前分块时，另一组缓冲可准备下一块。", "After decoding, the command reader hands the task to the matrix engine through valid/ready. DMA fetches input windows and weights into the A/B banks. While the array processes one tile, the alternate banks can prepare the next.")}</ReadingText>
      <ReadingText as="p">{t("PE 对 INT8 乘积做 INT32 累加。最后一个 K 分块完成后，后处理按标志位加偏置、重定量并执行 ReLU，再将结果写回 DDR，供后续任务读取。", "The PEs accumulate INT8 products in INT32. After the final K tile, the postprocessor applies bias, requantization and ReLU as enabled, then writes the result to DDR for later tasks.")}</ReadingText>
      </div>
      <figure className={styles.diagram}>
        <a href="/projects/npu-system-architecture.png" target="_blank" rel="noreferrer" aria-label={t("查看系统架构原图（新窗口）", "Open full-size system architecture in a new tab")}><Image src="/projects/npu-system-architecture.png" alt={t("NPU 系统架构：读取互连、任务调度、计算引擎与共享写回通路", "NPU system architecture: read interconnect, task dispatch, compute engines and shared writeback")} width={1492} height={1790} sizes="(max-width: 800px) 100vw, 384px" priority /></a>
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

    <section className={styles.section} aria-labelledby="npu-descriptor">
      <ReadingText as="h2" id="npu-descriptor">{t("编译器输出的任务描述符", "Compiler output and task descriptor format")}</ReadingText>
      <ReadingText as="p">{t("ONNX 编译器生成 descriptors.bin、DDR 镜像和 manifest.json。每条描述符占 64 字节，由 16 个小端 32 位字组成；64 位地址先存低字。主机从清单取出描述符首地址与数量，启动 NPU。", "The ONNX compiler emits descriptors.bin, a DDR image and manifest.json. Each 64-byte command contains 16 little-endian 32-bit words, with the low word first for 64-bit addresses. The host reads the command base and count from the manifest to launch the NPU.")}</ReadingText>
      <div className={styles.commandMap} aria-label={t("描述符字布局", "Descriptor word layout")}>
        {[
          ["W0", "操作码与标志", "Opcode and flags"], ["W1–3", "任务维度", "Dimensions"],
          ["W4–9", "A、B、C 基址", "A, B, C bases"], ["W10–12", "算子参数", "Operator fields"],
          ["W13–14", "参数块基址", "Parameter base"], ["W15", "池化配置", "Pool config"],
        ].map(([word, cn, en]) => <div key={word}><code>{word}</code><span>{t(cn, en)}</span></div>)}
      </div>
      <ReadingText as="p">{t("ResNet-50 编译后共 72 条命令。下表按硬件操作码列出这次运行的任务数，以及各引擎如何解释同一组字段。", "ResNet-50 compiles to 72 commands. The counts below are from that workload and show how each engine interprets the same descriptor words.")}</ReadingText>
      <table className={styles.opTable}>
        <thead><tr><th scope="col">{t("操作码 / 任务", "Opcode / task")}</th><th scope="col">{t("条数", "Count")}</th><th scope="col">{t("字段用途", "Field interpretation")}</th></tr></thead>
        <tbody>{([
          ["01 · GEMM / FC", 1, "M、N、K 为矩阵维度，W10–12 为 A、B、C 行步长。分类层取 M=1、N=1001、K=2048。", "M, N, K give matrix dimensions. W10–12 hold row strides for A, B and C. The classifier uses M=1, N=1001, K=2048."],
          ["02 · Conv", 53, "M 为输出位置数，N 为输出通道数，K 为每个点积的长度。W10–12 编码输入形状、卷积核、步长与补边。", "M counts output positions, N counts output channels and K is the dot-product length. W10–12 encode input shape, kernel, stride and padding."],
          ["03 · MaxPool", 1, "M、N、K 表示输入高、宽、通道数。W10 指定四侧补边，W15 指定窗口和步长。", "M, N, K give input height, width and channels. W10 sets padding on four sides and W15 sets window size and stride."],
          ["04 · GAP", 1, "沿整幅特征图求平均，每个通道输出一个值。M、N 给出空间范围，K 给出通道数。", "M and N span the spatial plane. Global average pooling writes one mean for each of the K channels."],
          ["05 · ADD", 16, "A、B 指向残差相加的两路输入，C 指向输出。M 是元素数，N、K 置零。", "A and B point to the two residual inputs and C to the output. M counts elements, with N and K set to zero."],
        ] as const).map(([op, count, cn, en]) => <tr key={op}><th scope="row">{op}</th><td>{count}</td><td><ReadingText as="p">{t(cn, en)}</ReadingText></td></tr>)}</tbody>
      </table>
      <details className={styles.details}><summary>{t("展开实测示例：SmallCNN 第一条卷积的 16 个字", "Inspect the 16 words of the first SmallCNN convolution")}</summary>
      <table className={styles.descriptor}>
        <caption>{t("SmallCNN 部署文件 commands.bin 中的第一条卷积任务", "First convolution task in the SmallCNN deployment file commands.bin")}</caption>
        <thead><tr><th scope="col">{t("字序与十六进制值", "Words and hex values")}</th><th scope="col">{t("硬件解码结果", "Hardware interpretation")}</th></tr></thead>
        <tbody>{convDescriptor.map(([word, hex, cn, en]) => <tr key={word}>
          <th scope="row">{word}<code>{hex}</code></th><td><ReadingText as="p">{t(cn, en)}</ReadingText></td>
        </tr>)}</tbody>
      </table>
      </details>
    </section>

    <section className={styles.section} aria-labelledby="npu-performance">
      <ReadingText as="h2" id="npu-performance">{t("ResNet-50 整网执行周期", "ResNet-50 full-network execution cycles")}</ReadingText>
      <figure className={styles.chart}>
        <ol>{runs.map((run, index) => <li key={run.en}>
          <div className={styles.barLabel}><ReadingText as="p">{t(run.zh, run.en)}</ReadingText><span>{run.cycles.toLocaleString("en-US")} {t("周期", "cycles")}</span></div>
          <div className={styles.track} aria-hidden="true"><div className={index === 2 ? styles.current : styles.baseline} style={{ width: `${run.cycles / runs[0].cycles * 100}%` }} /></div>
        </li>)}</ol>
      </figure>
      <ReadingText as="p" className={styles.conclusion}>{t("相比启用 Burst 的串行供数基线，当前版本整网周期减少 59.65%，同频加速比为 2.48 倍。", "Compared with the serial-loading baseline with Burst enabled, the current design uses 59.65% fewer cycles, equivalent to a 2.48× speedup at equal clock frequency.")}</ReadingText>
      <ReadingText as="p" className={styles.note}>{t("测试使用 ONNX 模型权重与合成 INT8 输入，在相同条件下比较整数计算结果和 RTL 执行周期。", "The tests use ONNX model weights and synthetic INT8 inputs to check integer results and compare RTL execution cycles under matched conditions.")}</ReadingText>
    </section>

    <div className={styles.records}>
      <details className={styles.details}>
        <summary>{t("技术细节与验证记录", "Technical details and validation")}</summary>
        <div className={styles.detailBody}>
          <ReadingText as="h3">{t("性能指标与对照条件", "Metrics and comparison setup")}</ReadingText>
          <ul>{[
            ["双缓冲及预取调度：相对串行供数基线，周期减少 21.82%。", "Double buffering and prefetch scheduling reduce cycles by 21.82% relative to the serial-loading baseline."],
            ["后续组合优化：在双缓冲基础上再减少 48.40%。", "Subsequent optimizations together reduce cycles by a further 48.40% relative to the double-buffered design."],
            ["整网有效吞吐率为 8.0683 MAC/周期，有效利用率为 50.43%；统计包含数据搬运与辅助算子开销。", "Effective throughput is 8.0683 MAC/cycle, with 50.43% utilization over the full run, including data transfers and auxiliary operators."],
            ["DDR 读取量：2,093,158,512 → 1,278,406,224 字节，减少 38.92%。", "DDR reads fall from 2,093,158,512 to 1,278,406,224 bytes, a 38.92% reduction."],
          ].map(([cn, en]) => <ReadingText as="li" key={en}>{t(cn, en)}</ReadingText>)}</ul>
          <ReadingText as="h3">{t("完整网络数值验证", "Full-network numerical validation")}</ReadingText>
          <ul>{[
            ["输入为 224×224×3；72 条任务包括 53 Conv、16 Add、1 MaxPool、1 GAP、1 FC。", "The input is 224×224×3. The 72 tasks comprise 53 Conv, 16 Add, one MaxPool, one GAP and one FC."],
            ["三组全部通过逐层数值核对，29,404,672 字节的完整 DDR 数据镜像均与独立 NumPy 整数参考一致。", "All three runs pass every layer comparison; the complete 29,404,672-byte DDR image matches the independent NumPy integer reference."],
            ["三组均启用 Burst，共用模型、输入、量化参数与 DDR 时序。外部读 64 bit、写 32 bit；读 Burst 首拍等待 20 周期。", "All three runs enable Burst and share the model, input, quantization parameters and DDR timing: 64-bit reads, 32-bit writes and a 20-cycle first-beat read delay."],
            ["串行与双缓冲基线由历史代码重建，并补入对照测试所需的功能。", "The serial and double-buffered baselines were reconstructed from historical code with the functional backports needed for this comparison."],
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
            <ReadingText as="p">{t("历史原生 64 位通路与卷积缓存优化将周期由 1,486,468 降至 1,255,817，减少 15.52%。另一版固定配置完成十张图片、140 组层输出核对。", "Earlier native 64-bit and convolution-cache optimizations reduced cycles from 1,486,468 to 1,255,817 (15.52%). A separate fixed configuration passed 140 layer checks across ten images.")}</ReadingText>
            <ReadingText as="h3">{t("DMA 完成信号漏接", "Missed DMA completion pulse")}</ReadingText>
            <ReadingText as="p">{t("增加输入复用后，DMA 可能提前完成，导致全连接层漏接单周期完成脉冲而超时。改为从发出请求时开始锁存完成状态，直到两路输入都就绪；修复后通过输出比对和整网回归。", "After input reuse was added, an early DMA completion could leave the fully connected layer waiting for a one-cycle completion pulse it had already missed. Latching completion from the request phase until both inputs were ready resolved the timeout; output checks and full-network regression passed.")}</ReadingText>
          </details>
        </div>
      </details>
      <details className={styles.details}>
        <summary>{t("DFT 实验 · 旧版综合网表", "DFT experiments · Earlier synthesized netlist")}</summary>
        <div className={styles.detailBody}>
          <ReadingText as="p">{t("完成 16 条扫描链插入，覆盖 75,137 个触发器；开展 stuck-at ATPG，故障覆盖率（Fault coverage）为 78.58%。另完成单个 SRAM 宏的 MBIST 正常运行与故障注入验证。", "Inserted 16 scan chains covering 75,137 flip-flops and ran stuck-at ATPG, achieving 78.58% fault coverage. A separate single-SRAM MBIST experiment passed normal-operation and fault-injection checks.")}</ReadingText>
          <ReadingText as="p">{t("共保存 16,502 条图样，Test coverage 为 92.19%。覆盖率采用未折叠故障统计，部分检测按 50% 计分：Fault coverage 以全部 2,747,638 个故障为分母，Test coverage 扣除 405,530 个不可检测故障。", "The run produced 16,502 patterns with 92.19% test coverage. Uncollapsed fault statistics give 50% credit to possibly detected faults: fault coverage uses all 2,747,638 faults, while test coverage excludes 405,530 undetectable faults.")}</ReadingText>
          <ReadingText as="p">{t("MBIST 使用 DW_mbist_ctrl 与 DW_mbist_apg，连接一块 32×64 单端口 SRAM。无故障存储器通过测试；将读数据 bit0 固定为 0 后，MBIST 检出故障；全部 32 个地址均有读写访问。", "MBIST connects DW_mbist_ctrl and DW_mbist_apg to a 32×64 single-port SRAM. The fault-free memory passes; forcing read-data bit 0 to zero produces a detected fault, with reads and writes to all 32 addresses.")}</ReadingText>
        </div>
      </details>
    </div>
    <div className={styles.source}><a className="button" href="https://github.com/gaozhouhao/npu" target="_blank" rel="noreferrer">{t("GitHub 源码 ↗", "Source on GitHub ↗")}</a></div>
    <ProjectNavigation />
  </main>;
}
