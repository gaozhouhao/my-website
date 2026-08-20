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
    "Company, role, location, dates, and high-level energy-harvesting startup-circuit context only.",
  privateInternshipScope:
    "Internal organization, target specifications, architecture, implementation, simulation data, and results.",
  resumeStatus: "under-review",
} as const;

export const projectSummaries: readonly ProjectSummary[] = [
  {
    slug: "riscv-cpu",
    title: "Multi-Cycle RISC-V CPU / SoC",
    titleZh: "多周期 RISC-V CPU / SoC",
    direction: "Digital IC · RTL · SoC · Verification",
    directionZh: "数字 IC · RTL · SoC",
    summary:
      "RV32E-oriented CPU RTL, valid-ready control, AXI/APB integration, memory models, reference-model comparison, and engineering debug.",
    summaryZh: "RV32E CPU RTL、valid-ready 控制、AXI/APB 集成、存储模型、参考模型比对与工程调试。",
    image: "/projects/cpu_arch.webp",
    imageAlt: "Functional architecture of the multi-cycle RISC-V CPU",
    width: 1087,
    height: 868,
    featured: true,
  },
  {
    slug: "class-ab-amplifier",
    title: "Class-AB Audio Amplifier",
    titleZh: "Class-AB 音频放大器",
    direction: "Analog IC · Full-Custom Layout",
    directionZh: "模拟 IC · 全定制版图",
    summary:
      "Independent GF 0.18 µm schematic-to-layout design with DRC/LVS/PEX and documented pre-/post-layout simulation evidence.",
    summaryZh: "独立完成 GF 0.18 µm schematic-to-layout 设计、DRC/LVS/PEX，以及有记录的前仿和后仿。",
    image: "/projects/opamp-layout.webp",
    imageAlt: "Full-custom layout of the Class-AB amplifier",
    width: 937,
    height: 759,
    featured: true,
  },
  {
    slug: "digital-ic-flow",
    title: "GF 22 nm Digital IC Design Flow",
    titleZh: "GF 22 nm ASIC Design Flow",
    direction: "RTL · Synthesis · STA · Place & Route",
    directionZh: "RTL · 综合 · STA · 布局布线",
    summary:
      "Coursework evidence across transistor-level labs, RTL, Design Compiler synthesis, timing analysis, and Innovus implementation.",
    summaryZh: "课程项目涵盖晶体管级电路、RTL、Design Compiler 综合、STA 与 Innovus PnR。",
    featured: true,
  },
  {
    slug: "sspp-filter",
    title: "Interdigital SSPP Low-Pass Filter",
    titleZh: "交指结构 SSPP 低通滤波器",
    direction: "RF Hardware · Simulation · Measurement",
    directionZh: "射频硬件 · 仿真 · 测量",
    summary:
      "First-author research connecting CST design, PCB prototyping, VNA measurement, publication, patent application, and undergraduate thesis.",
    summaryZh: "使用 CST 完成结构设计与仿真，制作 PCB 样机并进行 VNA 测量，成果发表于 Micromachines。",
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
    directionZh: "嵌入式 · PCB · 硬件调试",
    summary:
      "Verified personal contribution in PCB work, assembly, communication integration, PID tuning, and system-level debugging.",
    summaryZh: "主要负责 PCB、装配焊接、车辆通信、PID 参数整定与整车联调。",
    featured: false,
  },
  {
    slug: "bandgap-reference",
    title: "Bandgap-Based Reference Circuit",
    titleZh: "Bandgap-Based Reference Circuit",
    direction: "Analog IC · Early Coursework",
    directionZh: "模拟 IC · 早期课程项目",
    summary:
      "An earlier TSMC 0.18 µm schematic and pre-layout simulation exercise, retained with explicit limitations and lower portfolio priority.",
    summaryZh: "较早期的 TSMC 0.18 µm 模拟 IC 课程项目，完成 schematic、前仿和温度扫描。",
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
