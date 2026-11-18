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
    "TSMC 22 nm energy-harvesting chip specification and system architecture development; completed startup-circuit schematic design and PVT simulations, achieving startup from a 0.1 V supply. Boost-converter design is planned next.",
  privateInternshipScope:
    "Internal architecture, circuit implementation, and detailed simulation or measurement data.",
  resumeStatus: "under-review",
} as const;

export const projectSummaries: readonly ProjectSummary[] = [
  {
    slug: "riscv-cpu",
    title: "Five-Stage RISC-V CPU / SoC",
    titleZh: "五级流水线 RISC-V 处理器与 SoC",
    direction: "Digital IC · RTL · SoC · Verification",
    directionZh: "数字 IC · RTL 设计 · SoC 集成",
    summary:
      "Independently designed and implemented an RV32E CPU with a five-stage pipeline and 2-bit branch prediction. Completed bus and SoC integration, memory modeling, and differential testing against NEMU.",
    summaryZh: "独立设计与实现 RV32E 五级流水线处理器与 2-bit 分支预测，完成总线与 SoC 集成、存储器建模和 NEMU 差分测试。",
    image: "/projects/riscv32-layout.png",
    imageAlt: "RV32E RISC-V processor layout",
    width: 765,
    height: 762,
    featured: true,
  },
  {
    slug: "int8-systolic-npu",
    title: "4×4 INT8 Systolic NPU",
    titleZh: "INT8 NPU · 4×4 脉动阵列",
    direction: "Digital IC · RTL · CNN Inference",
    directionZh: "数字集成电路 · RTL · CNN 推理",
    image: "/projects/npu-project-cover.png",
    imageAlt: "INT8 NPU architecture with a 4×4 systolic array",
    imageFit: "contain",
    width: 1492,
    height: 1492,
    summary: "Independently designed and implemented a 4×4 INT8 NPU and TFLite/ONNX compiler. All 72 ResNet-50 hardware tasks pass numerical checks in RTL simulation. Memory and scheduling optimizations reduce cycles by 59.65% versus a serial-loading baseline with Burst enabled.",
    summaryZh: "独立设计与实现 4×4 INT8 NPU 及 TFLite/ONNX 编译工具，ResNet-50 的 72 条硬件任务全部通过 RTL 数值校验。通过存储与调度优化，相比启用 Burst 的串行供数基线，整网执行周期减少 59.65%。",
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
    titleZh: "数字集成电路设计实验",
    direction: "ASIC Flow · RTL · Synthesis · Physical Design",
    directionZh: "ASIC 设计流程 · RTL · 综合 · 物理实现",
    summary:
      "Completed GF 22 nm coursework covering logic-cell design, Verilog, synthesis, timing analysis, and place and route.",
    summaryZh: "基于 GF 22 nm 工艺库完成课程实验，包括基础单元设计、Verilog 编写、逻辑综合、时序分析与布局布线。",
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
    summaryZh: "使用 CST 完成结构设计与仿真，制作 PCB 样机并用矢量网络分析仪测试，以第一作者在 Micromachines 发表论文。",
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
    summary: "Contributed to validation as fourth author of a 2024 Micromachines paper on embroidered shorting vias for a wider-bandwidth textile HMSIC antenna.",
    summaryZh: "作为第四作者参与纺织 HMSIC 天线的验证工作。论文通过刺绣短路过孔调节谐振模式、拓宽阻抗带宽，于 2024 年发表于 Micromachines。",
    image: "/papers/HMSIC.webp",
    imageAlt: "Textile HMSIC antenna from the published paper",
    width: 1071,
    height: 681,
    featured: false,
  },
  {
    slug: "dual-vehicle-following",
    title: "Dual-Vehicle Following System",
    titleZh: "双车跟随系统",
    direction: "2022 TI Cup · Embedded Control",
    directionZh: "2022 TI 杯 · 嵌入式控制",
    summary: "As captain of a three-person team, handled MCU, power and motor-driver circuits, the PID framework, vehicle tuning, and integration. The team won First Prize in Jiangsu.",
    summaryZh: "担任三人团队队长，负责 MCU、电源与电机驱动电路、PID 框架、实车调参与系统集成。团队获江苏省一等奖。",
    featured: false,
  },
  {
    slug: "smart-car",
    title: "Multi-Car Formation: Hardware and Integration",
    titleZh: "多车编队智能车硬件系统",
    direction: "Embedded · PCB · Hardware Bring-Up",
    directionZh: "嵌入式 · PCB · 硬件调试",
    summary:
      "Handled PCB design, assembly, and hardware debugging, and contributed to Bluetooth-UART communication, PID tuning, and vehicle integration. The team won Second Prize at the national finals.",
      summaryZh: "主要负责 PCB 设计、焊接装配与硬件调试，参与车辆间蓝牙串口通信、PID 参数整定和整车联调。团队获全国总决赛二等奖。",
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
      "A TSMC 0.18 µm course project covering bandgap-reference schematic design, pre-layout simulation, and temperature sweeps.",
    summaryZh: "基于 TSMC 0.18 µm 工艺的课程项目，完成带隙基准电路原理图设计、前仿真与温度扫描。",
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
