export type EvidenceState = "verified" | "documented" | "ongoing" | "boundary";

export type ProjectSummary = {
  slug: string;
  title: string;
  direction: string;
  summary: string;
  titleZh: string;
  directionZh: string;
  summaryZh: string;
  image?: string;
  imageAlt?: string;
  width?: number;
  height?: number;
  featured: boolean;
};

export const profileBoundary = {
  authority: "job-hunting/profile",
  publicInternshipScope:
    "Energy-harvesting chip design, including startup and operation at an input voltage of 0.1 V.",
  privateInternshipScope:
    "Internal architecture, circuit implementation, and detailed simulation or measurement data.",
  resumeStatus: "under-review",
} as const;

export const projectSummaries: readonly ProjectSummary[] = [
  {
    slug: "riscv-cpu",
    title: "Multi-Cycle RISC-V CPU / SoC",
    titleZh: "多周期 RISC-V 处理器与片上系统",
    direction: "Digital IC · RTL · SoC · Verification",
    directionZh: "数字集成电路 · 寄存器传输级设计 · 片上系统",
    summary:
      "RV32E-oriented CPU RTL, valid-ready control, AXI/APB integration, memory models, reference-model comparison, and engineering debug.",
    summaryZh: "完成 RV32E 处理器的寄存器传输级设计、有效—就绪握手控制、AXI/APB 总线集成、存储器建模、参考模型比对与工程调试。",
    image: "/projects/riscv32-layout.png",
    imageAlt: "RISC-V32 processor layout",
    width: 765,
    height: 762,
    featured: true,
  },
  {
    slug: "int8-systolic-npu",
    title: "INT8 Systolic NPU",
    titleZh: "自研 INT8 NPU",
    direction: "Digital IC · RTL · CNN Inference",
    directionZh: "数字集成电路 · RTL · CNN 推理",
    summary: "Built a 4×4 INT8 NPU with tiling, AXI DMA and descriptor-driven CNN execution. Verified MNIST outputs layer by layer and reduced cycles from 531,563 to 74,527 through operand loading and multi-K reuse. Added per-channel quantization, a parameter slot bank and TFLite compilation; ResNet-8 fixed-sample layer regression and profiling report 90.70% Core Busy PE occupancy; universal TFLite bit-exactness is not claimed.",
    summaryZh: "基于 4×4 脉动阵列，实现矩阵分块、AXI DMA 和描述符驱动的 CNN 推理。完成 MNIST 逐层 RTL 验证，将整网周期从 531,563 降至 74,527。新增逐通道量化、参数 Slot Bank 和 TFLite 编译器，完成 ResNet-8 固定样本逐层回归与性能分析；Core Busy PE 占用率为 90.70%，不宣称全输入 TFLite Bit-exact。",
    featured: true,
  },
  {
    slug: "class-ab-amplifier",
    title: "Class-AB Audio Amplifier",
    titleZh: "Class AB 音频放大器",
    direction: "Analog IC · Full-Custom Layout",
    directionZh: "模拟集成电路 · 全定制版图",
    summary:
      "Independent GF 0.18 µm schematic-to-layout design with DRC/LVS/PEX and documented pre-/post-layout simulation evidence.",
    summaryZh: "基于 GF 0.18 µm 工艺，独立完成原理图与全定制版图设计、设计规则检查、版图与原理图一致性检查、寄生参数提取，以及前仿真和后仿真。",
    image: "/projects/opamp-layout.webp",
    imageAlt: "Full-custom layout of the Class-AB amplifier",
    width: 937,
    height: 759,
    featured: true,
  },
  {
    slug: "digital-ic-flow",
    title: "Digital IC Design Lab",
    titleZh: "Digital IC Design Lab",
    direction: "ASIC Flow · RTL · Synthesis · Physical Design",
    directionZh: "ASIC 设计流程 · RTL · 综合 · 物理实现",
    summary:
      "Introductory course exercises using GF 22 nm libraries: basic logic cells, Verilog, synthesis, timing analysis, and place and route.",
    summaryZh: "基于 GF 22 nm 的 ASIC 设计流程实践，覆盖全定制单元、RTL 验证、综合、时序分析、物理实现与验证。",
    featured: false,
  },
  {
    slug: "sspp-filter",
    title: "Interdigital SSPP Low-Pass Filter",
    titleZh: "交指结构 SSPP 低通滤波器",
    direction: "RF Hardware · Simulation · Measurement",
    directionZh: "射频硬件 · 仿真 · 测量",
    summary:
      "First-author research connecting CST design, PCB prototyping, VNA measurement, publication, granted patent, and undergraduate thesis.",
    summaryZh: "使用 CST 完成结构设计与仿真，制作印制电路板样机并进行矢量网络分析仪测量，成果发表于 Micromachines。",
    image: "/papers/SSPP.webp",
    imageAlt: "SSPP filter structure, prototype, and response evidence",
    width: 1105,
    height: 859,
    featured: false,
  },
  {
    slug: "textile-hmsic-antenna",
    title: "Textile HMSIC Antenna with Embroidered Vias",
    titleZh: "刺绣短路过孔纺织 HMSIC 天线",
    direction: "Wearable Antenna · EM Simulation · Paper",
    directionZh: "可穿戴天线 · 电磁仿真 · 论文",
    summary: "Micromachines 2024 research on a textile HMSIC antenna that merges resonant bands through embroidered shorting vias.",
    summaryZh: "通过刺绣短路过孔调节多模谐振并拓宽阻抗带宽的纺织 HMSIC 天线研究，发表于 Micromachines 2024。",
    image: "/papers/HMSIC.webp",
    imageAlt: "Textile HMSIC antenna from the published paper",
    width: 1071,
    height: 681,
    featured: false,
  },
  {
    slug: "smart-car",
    title: "Multi-Vehicle Smart Car Hardware",
    titleZh: "多车编队智能车硬件系统",
    direction: "Embedded · PCB · Hardware Bring-Up",
    directionZh: "嵌入式 · 印制电路板 · 硬件调试",
    summary:
      "Verified personal contribution in PCB work, assembly, communication integration, PID tuning, and system-level debugging.",
    summaryZh: "主要负责印制电路板、装配焊接、车辆通信、PID 参数整定与整车联调。",
    featured: false,
  },
  {
    slug: "bandgap-reference",
    title: "Bandgap-Based Reference Circuit",
    titleZh: "带隙基准电压电路",
    direction: "Analog IC · Early Coursework",
    directionZh: "模拟集成电路 · 早期课程项目",
    summary:
      "An earlier TSMC 0.18 µm schematic and pre-layout simulation exercise, retained with explicit limitations and lower portfolio priority.",
    summaryZh: "较早期的台积电 0.18 微米模拟集成电路课程项目，完成原理图、前仿和温度扫描。",
    image: "/projects/bandgap-schematic.webp",
    imageAlt: "Bandgap-based reference circuit schematic",
    width: 1920,
    height: 1080,
    featured: false,
  },
];

export const publicRoutes = [
  "/",
  "/experience",
  "/projects",
  ...projectSummaries.map((project) => `/projects/${project.slug}`),
  "/publications",
  "/awards",
  "/about",
  "/contact",
  "/beyond",
] as const;
