export type EvidenceState = "verified" | "documented" | "ongoing" | "boundary";

export type ProjectSummary = {
  slug: string;
  title: string;
  direction: string;
  summary: string;
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
    direction: "Digital IC · RTL · SoC · Verification",
    summary:
      "RV32E-oriented CPU RTL, valid-ready control, AXI/APB integration, memory models, reference-model comparison, and engineering debug.",
    image: "/projects/cpu_arch.webp",
    imageAlt: "Functional architecture of the multi-cycle RISC-V CPU",
    width: 1087,
    height: 868,
    featured: true,
  },
  {
    slug: "class-ab-amplifier",
    title: "Class-AB Audio Amplifier",
    direction: "Analog IC · Full-Custom Layout",
    summary:
      "Independent GF 0.18 µm schematic-to-layout design with DRC/LVS/PEX and documented pre-/post-layout simulation evidence.",
    image: "/projects/opamp-layout.webp",
    imageAlt: "Full-custom layout of the Class-AB amplifier",
    width: 937,
    height: 759,
    featured: true,
  },
  {
    slug: "digital-ic-flow",
    title: "GF 22 nm Digital IC Design Flow",
    direction: "RTL · Synthesis · STA · Place & Route",
    summary:
      "Coursework evidence across transistor-level labs, RTL, Design Compiler synthesis, timing analysis, and Innovus implementation.",
    featured: true,
  },
  {
    slug: "sspp-filter",
    title: "Interdigital SSPP Low-Pass Filter",
    direction: "RF Hardware · Simulation · Measurement",
    summary:
      "First-author research connecting CST design, PCB prototyping, VNA measurement, publication, patent application, and undergraduate thesis.",
    image: "/papers/SSPP.webp",
    imageAlt: "SSPP filter structure, prototype, and response evidence",
    width: 1105,
    height: 859,
    featured: false,
  },
  {
    slug: "smart-car",
    title: "Multi-Vehicle Smart Car Hardware",
    direction: "Embedded · PCB · Hardware Bring-Up",
    summary:
      "Verified personal contribution in PCB work, assembly, communication integration, PID tuning, and system-level debugging.",
    featured: false,
  },
  {
    slug: "bandgap-reference",
    title: "Bandgap-Based Reference Circuit",
    direction: "Analog IC · Early Coursework",
    summary:
      "An earlier TSMC 0.18 µm schematic and pre-layout simulation exercise, retained with explicit limitations and lower portfolio priority.",
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
