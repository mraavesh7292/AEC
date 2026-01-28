export type Service = {
  key: "architecture" | "structural" | "mep" | "pm";
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  imageKey:
    | "villa_alkhawaneej"
    | "villa_dubaisouth"
    | "art_gallery"
    | "warehouse"
    | "mosque"
    | "pavilion";
};

export const company = {
  name: "AGILE ENGINEERING CONSULTANTS",
  tagline: "Architectural, Structural & MEP Engineering in the UAE",
  subtext: "Designing structures that last. Engineering compliance. Precision without compromise.",
  vision:
    "This organization builds with precision, compliance, and long-term structural responsibility.",
};

export const services: Service[] = [
  {
    key: "architecture",
    title: "Architecture Design",
    description:
      "Concept to authority submission. Site coordination, layout discipline, and buildable detailing aligned to UAE requirements.",
  },
  {
    key: "structural",
    title: "Structural Engineering",
    description:
      "Load paths, member sizing, and reinforcement logic engineered for permanence—checked, documented, and build-ready.",
  },
  {
    key: "mep",
    title: "MEP Engineering",
    description:
      "MEP design with coordinated routes, compliant sizing, and maintainable systems engineered for operational reality.",
  },
  {
    key: "pm",
    title: "Project Management",
    description:
      "Scope control, schedules, approvals, and site progress tracking—managed as a system, not a slogan.",
  },
];

export const projects: Project[] = [
  {
    slug: "b-g-1-villa-al-khawaneej-2",
    title: "B+G+1 Villa",
    location: "Al Khawaneej 2, Dubai",
    imageKey: "villa_alkhawaneej",
  },
  {
    slug: "g-1-villa-dubai-south",
    title: "G+1 Villa",
    location: "Dubai South",
    imageKey: "villa_dubaisouth",
  },
  {
    slug: "art-gallery-jumeirah",
    title: "Art Gallery",
    location: "Jumeirah",
    imageKey: "art_gallery",
  },
  {
    slug: "warehouse-jebel-ali",
    title: "Warehouse",
    location: "Jebel Ali",
    imageKey: "warehouse",
  },
  {
    slug: "mosque-damac-hills",
    title: "Mosque",
    location: "Damac Hills",
    imageKey: "mosque",
  },
  {
    slug: "shading-pavilion-abu-dhabi",
    title: "Shading Pavilion",
    location: "Abu Dhabi",
    imageKey: "pavilion",
  },
];

export const values = [
  { title: "Customer Focus", text: "Requirements clarified. Deliverables controlled. Approvals anticipated." },
  { title: "Professionalism", text: "Documentation, coordination, and accountability carried through." },
  { title: "Teamwork", text: "Disciplines aligned early to avoid site conflict and rework." },
  { title: "Integrity", text: "Compliance-first decisions with traceable calculations and records." },
];
