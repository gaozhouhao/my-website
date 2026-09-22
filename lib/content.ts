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
    image: "/projects/cpu_arch.webp",
    imageAlt: "Functional architecture of the multi-cycle RISC-V CPU",
    width: 1087,
    height: 868,
    featured: true,
  },
  {
    slug: "class-ab-amplifier",
    title: "Class-AB Audio Amplifier",
    titleZh: "甲乙类音频放大器",
    direction: "Analog IC · Full-Custom Layout",
    directionZh: "模拟集成电路 · 全定制版图",
    summary:
      "Independent GF 0.18 µm schematic-to-layout design with DRC/LVS/PEX and documented pre-/post-layout simulation evidence.",
    summaryZh: "基于格芯 0.18 微米工艺，独立完成原理图与全定制版图设计、设计规则检查、版图与原理图一致性检查、寄生参数提取，以及前仿真和后仿真。",
    image: "/projects/opamp-layout.webp",
    imageAlt: "Full-custom layout of the Class-AB amplifier",
    width: 937,
    height: 759,
    featured: true,
  },
  {
    slug: "digital-ic-flow",
    title: "NM6008 Digital IC Design Lab",
    titleZh: "NM6008 数字集成电路设计实验",
    direction: "RTL · Synthesis · STA · Place & Route",
    directionZh: "寄存器传输级设计 · 综合 · 静态时序分析 · 布局布线",
    summary:
      "Introductory course exercises using GF 22 nm libraries: basic logic cells, Verilog, synthesis, timing analysis, and place and route.",
    summaryZh: "使用格芯 22 纳米工艺库完成基础课程实验，练习逻辑单元、Verilog、综合、时序分析与布局布线。",
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
