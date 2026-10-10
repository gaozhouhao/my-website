"use client";

import { useState } from "react";
import type { Locale } from "../../../lib/i18n";
import styles from "./page.module.css";

const rows = [
  ["Conv",88489,442368,67.50], ["Conv",238759,2359296,91.72], ["Conv",238543,2359296,91.72],
  ["Add",28680,0,null], ["Conv",106477,1179648,91.72], ["Conv",444127,2359296,93.20],
  ["Conv",29424,131072,55.17], ["Add",14344,0,null], ["Conv",226719,1179648,93.20],
  ["Conv",381241,2359296,95.21], ["Conv",18687,131072,71.11], ["Add",7176,0,null],
  ["Global AvgPool",4177,0,null], ["FC",476,3072,83.12],
] as const;
type Metric = "cycles" | "mac" | "occupancy";
const total=1828229,core=861671,dma=1576465,overlap=714204;
const fmt=(v:number)=>v.toLocaleString("en-US");
const src="https://github.com/gaozhouhao/npu/blob/3de2bac36788efbfdcadaeabd0a623c0d749d04e/";

export default function ResnetProfile({locale}:{locale:Locale}) {
  const zh=locale==="zh";
  const [metric,setMetric]=useState<Metric>("cycles");
  const value=(r:typeof rows[number])=>metric==="cycles"?r[1]:metric==="mac"?(r[2]||null):r[3];
  const max=Math.max(...rows.map(r=>value(r)??0));
  const label=metric==="cycles"?"Cycles":metric==="mac"?"Executed MAC":"Core Busy PE Occupancy";
  return <section className={styles.section} aria-labelledby="resnet-profile">
    <div className={styles.sectionTitle}><h2 id="resnet-profile">{zh?"ResNet-8 回归与性能基线":"ResNet-8 regression and performance baseline"}</h2><span>2026-10-11</span></div>
    <div className={styles.updateGrid}><article><span className={styles.version}>{zh?"固定样本回归":"FIXED-SAMPLE REGRESSION"}</span><h3>{zh?"10 张 CIFAR-10 样本逐层比对":"Layer-wise comparison on 10 CIFAR-10 samples"}</h3><p>{zh?"Top-1 与参考结果 10/10 一致，140/140 个层输出、1,147,620/1,147,620 个元素一致。这是固定编译器、量化参数和 RTL 配置下的回归结果，不是 CIFAR-10 测试集准确率。":"Top-1 matches the reference on 10/10 samples; 140/140 layer outputs and 1,147,620/1,147,620 elements match. These results apply to a fixed compiler, quantization and RTL configuration; they are not CIFAR-10 test-set accuracy."}</p></article><article><span className={styles.version}>{zh?"数值兼容性":"NUMERICAL COMPATIBILITY"}</span><h3>{zh?"扩大测试后发现过 1 LSB 差异":"1 LSB differences observed in broader testing"}</h3><p>{zh?"整数 Scale 近似和 Requantization Kernel 的舍入语义会影响逐元素一致性。项目分别检查自研整数 Golden 的 Bit-exact、TFLite 数值兼容性和 Top-1 一致性，不宣称所有输入都与 TFLite Bit-exact。":"Integer scale approximation and requantization rounding semantics can affect element-wise matches. Custom integer-golden bit-exactness, TFLite numerical compatibility and Top-1 agreement are separate checks; universal TFLite bit-exactness is not claimed."}</p></article></div>
    <p className={styles.note}>{zh?"以下为固定仿真内存响应模型下的单次 ResNet-8 推理基线：4×4 阵列、32-bit AXI、K Tile 容量 256、14 条硬件描述符。性能基线与上述 10 样本回归分别记录。":"The following baseline is one ResNet-8 inference with a fixed behavioral-memory response model: 4×4 array, 32-bit AXI, K-tile capacity 256 and 14 hardware descriptors. It is recorded separately from the ten-sample regression."}</p>
    <div className={styles.metrics}><div><strong>1,828,229</strong><span>Cycles / inference</span></div><div><strong>12.50M</strong><span>Executed MAC</span></div><div><strong>90.70%</strong><span>Core Busy PE Occupancy</span></div><div><strong>39.57%</strong><span>Useful E2E PE Utilization</span></div></div>
    <p className={styles.finding}>{zh?"计算核心 Busy 期间，PE 的 MAC 活动占用率为 90.70%；整个推理窗口内为 42.75%。这组计数提示还需要优化数据供应、写回及调度，但不能直接据此判断物理 DDR 带宽。":"PE MAC occupancy is 90.70% while the core is busy, versus 42.75% over the full inference window. The counters motivate work on data supply, writeback and scheduling; they do not directly measure a physical DDR bandwidth bottleneck."}</p>
    <details className={styles.details}><summary>{zh?"Core / Read Path 时间分解与指标定义":"Core / read-path time breakdown and metric definitions"}</summary>
      <div className={styles.timeBar} aria-label={zh?"整网周期按 Busy 状态的交集分解":"Inference cycles partitioned by busy-state intersections"}>{[
        [zh?"仅 Core":"Core only",core-overlap], [zh?"同时 Busy":"Both busy",overlap],
        [zh?"仅 Read Path":"Read path only",dma-overlap], [zh?"两者均非 Busy":"Neither busy",total-core-dma+overlap],
      ].map(([name,n],i)=><div key={String(name)} style={{flex:Number(n),background:["#705c8c","#b3a0c9","#b9b1a3","#e2ddd3"][i]}} title={String(name)+": "+fmt(Number(n))} />)}</div>
      <div className={styles.timeLegend}>{[[zh?"仅 Core":"Core only",147467],[zh?"同时 Busy":"Both busy",714204],[zh?"仅 Read Path":"Read path only",862261],[zh?"两者均非 Busy":"Neither busy",104297]].map(([name,n])=><span key={name}>{name}<b>{fmt(Number(n))}</b></span>)}</div>
      <p className={styles.note}>{zh?"由整网 Busy 计数做集合运算推导，合计 1,828,229 cycles。未同时 Busy 的时间不等于停顿；两者均非 Busy 也不等于整个 NPU 空闲。714,204 / 861,671 = 82.89% 表示 Core Busy 期间与 Read Path 同时 Busy 的比例，不是被隐藏的访存延迟。":"Derived from busy-counter intersections; the parts sum to 1,828,229 cycles. Non-overlap does not mean a stall, and neither-busy does not mean the entire NPU is idle. 714,204 / 861,671 = 82.89% is simultaneous busy time during core activity, not hidden memory latency."}</p>
      <div className={styles.tableScroll}><table className="result-table"><thead><tr><th>{zh?"指标":"Metric"}</th><th>{zh?"数值":"Value"}</th><th>{zh?"定义 / 口径":"Definition / scope"}</th></tr></thead><tbody>{[
        ["Core Busy / Read Path Busy","861,671 / 1,576,465",zh?"RTL 状态计数":"RTL busy counters"],
        ["Executed / Useful MAC","12,504,064 / 11,574,592",zh?"真实 MAC 事件 / 模型几何推导":"Actual MAC events / model geometry"],
        ["Matrix Tiles","6,659",zh?"Tile 计数":"Tile count"],
        ["E2E PE Occupancy","42.75%","12,504,064 / (16 × 1,828,229)"],
        ["Core Busy PE Occupancy","90.70%","12,504,064 / (16 × 861,671)"],
        ["Useful E2E PE Utilization","39.57%","11,574,592 / (16 × 1,828,229)"],
        ["Useful / Executed MAC","92.57%",zh?"不含 Padding 和无效尾部输出的有效计算比例":"Useful work excluding padding and invalid tail outputs"],
        ["AXI Read / Write Bytes","5,118,872 / 114,800",zh?"数据通道传输字节；含参数及控制数据":"Data-channel bytes, including parameters and control data"],
        ["Total Bytes / Arithmetic Intensity","5,233,672 / 2.21 MAC/Byte","11,574,592 / 5,233,672"],
      ].map(r=><tr key={r[0]}>{r.map((c,i)=>i===0?<th scope="row" key={i}>{c}</th>:<td key={i}>{c}</td>)}</tr>)}</tbody></table></div>
    </details>
    <details className={styles.details}><summary>{zh?"逐层性能与瓶颈分析":"Layer performance and bottleneck analysis"}</summary>
      <div className={styles.chartControls} role="group" aria-label={zh?"图表指标":"Chart metric"}>{(["cycles","mac","occupancy"] as const).map(m=><button type="button" key={m} onClick={()=>setMetric(m)} aria-pressed={metric===m}>{m==="cycles"?"Cycles":m==="mac"?"Executed MAC":"Core PE Occupancy"}</button>)}</div>
      <div className={styles.layerChart} aria-label={label}>{rows.map((r,i)=>{const n=value(r);return <div className={styles.layerRow} key={i}><span>{i} · {r[0]}</span><div className={styles.layerTrack}><i style={{width:(n??0)/max*100+"%"}} /></div><b>{n===null?"—":metric==="occupancy"?n.toFixed(2)+"%":fmt(n)}</b></div>})}</div>
      <p className={styles.note}>{zh?"Add 和 Global AvgPool 使用独立数据通路，PE 指标不适用。逐层周期合计 1,827,319，比整网少 910 cycles；保留原记录的统计窗口差额，未归因。尚无逐层 DDR 字节数据，因此不提供该图表选项。":"Add and Global AvgPool use separate datapaths, so PE metrics do not apply. Layer cycles sum to 1,827,319, leaving 910 cycles outside the layer totals; this window difference is retained without attributing a cause. Per-layer DDR bytes were not supplied."}</p>
      <div className={styles.tableScroll}><table className="result-table"><thead><tr><th>Layer</th><th>Cycles</th><th>Core Busy</th><th>Read Path Busy</th><th>Overlap</th></tr></thead><tbody>{[[5,444127,158208,359352,77053],[8,226719,79104,185376,39589],[9,381241,154880,356570,133093]].map(r=><tr key={r[0]}>{r.map((n,i)=><td key={i}>{i===0?"Conv "+n:fmt(n)}</td>)}</tr>)}</tbody></table></div>
      <p className={styles.finding}>{zh?"优先分析 Conv 5、8、9 的数据供应和调度。Conv 5/8 的 Read Path Busy 明显高于 Core Busy，且重叠较少；Conv 9 的重叠较高，但读路径仍占用大量时间。FC 虽只有 640 / 3,072 = 20.83% 的 Useful MAC，占整网仅 476 cycles，优化优先级较低。":"Prioritize data supply and scheduling in Conv 5, 8 and 9. Conv 5/8 show much higher read-path busy time than core time, with limited overlap; Conv 9 overlaps more but still spends substantial time on reads. FC has only 640 / 3,072 = 20.83% useful MACs, but takes just 476 cycles, making it a lower priority."}</p>
    </details>
    <p className={styles.note}>{zh?"来源：本阶段提供的固定配置回归与性能记录。仓库 3de2bac 包含 TFLite 逐层检查脚本及 DDR Dump；完整样本报告、新性能探针和高精度参数编译改动尚未在该提交中找到。本次核对了计数推导，未重新运行 RTL。":"Source: supplied fixed-configuration regression and profiling records. Commit 3de2bac contains the TFLite layer checker and DDR dump support; full sample reports, new profiling probes and higher-precision parameter compilation changes were not found in that revision. Counter arithmetic was checked; RTL was not rerun."} <a href={src+"scripts/verify_resnet8_layers.py"}>Layer checker ↗</a> · <a href={src+"sim/tb/resnet8_npu_tb.sv"}>TB ↗</a></p>
  </section>;
}
