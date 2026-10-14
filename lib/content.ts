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
  imageFit?: "cover" | "contain";
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
    title: "Five-Stage RISC-V CPU / SoC",
    titleZh: "五级流水 RISC-V 处理器与片上系统",
    direction: "Digital IC · RTL · SoC · Verification",
    directionZh: "数字 IC · RTL 设计 · SoC 集成",
    summary:
      "Developed an RV32E processor with a five-stage pipeline and 2-bit branch prediction. The project includes AXI/APB integration, memory models and reference-model comparisons for debugging execution and bus interactions.",
    summaryZh: "设计 RV32E 处理器，已完成五级流水线与 2-bit 分支预测。项目包括 AXI/APB 总线集成、存储器建模与参考模型比对，用于检查指令执行并调试控制和总线交互。",
    image: "/projects/riscv32-layout.png",
    imageAlt: "RV32E RISC-V processor layout",
    width: 765,
    height: 762,
    featured: true,
  },
  {
    slug: "int8-systolic-npu",
    title: "4×4 INT8 Systolic NPU",
    titleZh: "自研 INT8 NPU · 4×4 脉动阵列",
    direction: "Digital IC · RTL · CNN Inference",
    directionZh: "数字集成电路 · RTL · CNN 推理",
    image: "/projects/npu-project-cover.svg",
    imageAlt: "INT8 NPU architecture with a 4×4 systolic array",
    imageFit: "contain",
    width: 1080,
    height: 1000,
    summary: "Built a SystemVerilog accelerator and model compiler for CNN inference. Runs an MNIST digit classifier and a CIFAR-10 ResNet-8 in RTL simulation. Memory and data-reuse optimizations reduced MNIST CNN inference cycles by 86% (7.13× speedup over the initial implementation).",
    summaryZh: "从零设计计算阵列、存储和调度模块，并编写模型编译工具。在 RTL 仿真中运行 MNIST 手写数字识别 CNN 和 CIFAR-10 分类模型 ResNet-8。通过数据复用和访存优化，将 MNIST CNN 的推理周期减少约 86%，相同频率下加速 7.13 倍。",
    featured: true,
  },
  {
    slug: "class-ab-amplifier",
    title: "Class-AB Audio Amplifier",
    titleZh: "Class AB 音频放大器",
    direction: "Analog IC · Full-Custom Layout",
    directionZh: "模拟集成电路 · 全定制版图",
    summary:
      "Designed a Class-AB audio amplifier in GF 0.18 µm, from schematic to full-custom layout. Completed DRC, LVS and parasitic extraction, with pre- and post-layout simulations.",
    summaryZh: "基于 GF 0.18 µm 工艺，独立完成 Class AB 音频放大器的电路与版图设计，通过 DRC、LVS 检查，并完成寄生参数提取及前后仿真。",
    image: "/projects/opamp-layout.webp",
    imageAlt: "Full-custom layout of the Class-AB amplifier",
    width: 937,
    height: 759,
    featured: true,
  },
  {
    slug: "digital-ic-flow",
    title: "Digital IC Design Lab",
    titleZh: "数字 IC 设计流程实践",
    direction: "ASIC Flow · RTL · Synthesis · Physical Design",
    directionZh: "ASIC 设计流程 · RTL · 综合 · 物理实现",
    summary:
      "Introductory course exercises using GF 22 nm libraries: basic logic cells, Verilog, synthesis, timing analysis, and place and route.",
    summaryZh: "使用 GF 22 nm 工艺库完成课程实验，练习基础单元设计、Verilog 编写、逻辑综合、时序分析和布局布线。",
    featured: false,
  },
  {
    slug: "sspp-filter",
    title: "Interdigital SSPP Low-Pass Filter",
    titleZh: "交指结构 SSPP 低通滤波器",
    direction: "RF Hardware · Simulation · Measurement",
    directionZh: "射频硬件 · 仿真 · 测量",
    summary:
      "Designed and simulated an SSPP low-pass filter in CST, then fabricated a PCB prototype and measured its response with a VNA. Published the results as first author in Micromachines.",
    summaryZh: "使用 CST 完成结构设计与仿真，制作印制电路板样机并进行矢量网络分析仪测量，成果发表于 Micromachines。",
    image: "/papers/SSPP.webp",
    imageAlt: "SSPP filter design, PCB prototype and frequency response",
    width: 1105,
    height: 859,
    featured: false,
  },
  {
    slug: "textile-hmsic-antenna",
    title: "Textile HMSIC Antenna with Embroidered Vias",
    titleZh: "基于刺绣短路过孔的纺织 HMSIC 天线",
    direction: "Wearable Antenna · EM Simulation · Paper",
    directionZh: "可穿戴天线 · 电磁仿真 · 论文",
    summary: "Investigated embroidered shorting vias as a way to couple resonant modes and broaden the impedance bandwidth of a textile HMSIC antenna. Published in Micromachines in 2024.",
    summaryZh: "研究在纺织 HMSIC 天线中加入刺绣短路过孔，通过调节谐振模式拓宽阻抗带宽。成果于 2024 年发表于 Micromachines。",
    image: "/papers/HMSIC.webp",
    imageAlt: "Textile HMSIC antenna from the published paper",
    width: 1071,
    height: 681,
    featured: false,
  },
  {
    slug: "smart-car",
    title: "Multi-Car Formation: Hardware and Integration",
    titleZh: "多车编队智能车硬件系统",
    direction: "Embedded · PCB · Hardware Bring-Up",
    directionZh: "嵌入式 · 印制电路板 · 硬件调试",
    summary:
      "Handled PCB design, soldering and assembly for a student competition team. Integrated inter-vehicle communication, tuned PID controllers and debugged the assembled cars.",
      summaryZh: "在多车编队竞赛项目中，主要负责 PCB 设计、焊接装配、车辆间通信和 PID 参数调试，并参与整车联调。",
      image: "/projects/smart-car-team.jpeg",
      imageAlt: "Three smart cars beside the test track",
      imageFit: "contain",
      width: 1440,
      height: 1080,
      featured: false,
  },
  {
    slug: "bandgap-reference",
    title: "Bandgap-Based Reference Circuit",
    titleZh: "带隙基准电压电路",
    direction: "Analog IC · Circuit Simulation",
    directionZh: "模拟 IC · 电路仿真",
    summary:
      "A TSMC 0.18 µm coursework project covering schematic design and pre-layout simulation of a bandgap reference, including temperature sweeps.",
    summaryZh: "基于 TSMC 0.18 µm 工艺的课程项目，完成带隙基准电路的原理图设计和前仿真，通过温度扫描检查输出电压的变化。",
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
