export const siteConfig = {
  name: "Ukayev Vadim",
  email: "ukaew.vadim@gmail.com",
  github: "https://github.com/Marterholz",
  telegram: "https://t.me/LlFELOVER",
  resumeUrl: "/resume.pdf",
  /** Static to avoid SSR/client year mismatches. */
  year: 2026,
} as const;

export const credentials = {
  education: {
    label: "Education",
    title: "Computer Science",
    detail: "Astana IT University second year student · System Adminstrator Focus",
  },
  experience: {
    label: "Experience",
    title: "2+ year",
    detail: "Cisco courses, Cisco packet tracer, Working Experience",
  },
} as const;

export const techStack = {
  SysAdmin: ["Diagnostic Hardware", "VMware", "AnyDesk", "Linux Server", "PostgreSQL"],
  tools: ["Neovim", "Docker", "Git"],
} as const;

/** Flat list for the always-visible skills grid. */
export const allSkills = [
  ...techStack.SysAdmin,
  ...techStack.tools,
] as const;

export type ProjectSize = "large" | "medium" | "small";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  size: ProjectSize;
};

export const projects: Project[] = [
  {
    id: "network-upgrade",
    title: "Network Infrastructure Upgrade",
    description:
      "Planned and executed network segmentation, VLANs, and firewall rules to improve security and reliability across the office infrastructure.",
    tags: ["Networking", "VLAN", "Firewall"],
    size: "large",
  },
  {
    id: "virtualization",
    title: "Server Virtualization & Consolidation",
    description:
      "Migrated physical servers into a VMware environment, consolidated workloads, and documented the virtualization topology and backup procedures.",
    tags: ["VMware", "Virtualization", "Backups"],
    size: "medium",
  },
  {
    id: "backup-dr",
    title: "Backup and Disaster Recovery",
    description:
      "Implemented automated backup policies, off-site replication, and recovery runbooks to ensure service continuity and meet RTO/RPO targets.",
    tags: ["Backups", "DR", "Automation"],
    size: "medium",
  },
  {
    id: "monitoring",
    title: "Monitoring & Alerting",
    description:
      "Deployed monitoring stack and alerting rules for servers and services to detect incidents early and reduce mean time to recovery.",
    tags: ["Monitoring", "Alerting", "Zabbix"],
    size: "small",
  },
];
