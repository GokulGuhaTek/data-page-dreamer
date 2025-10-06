export interface CurrentOpening {
  id: string;
  position: string;
  department: string;
  details: string;
  location: string;
  immediateJoiner: boolean;
  modeOfWork: "Remote" | "Hybrid" | "On-site";
  requiredOpenings: number;
  isActive: boolean;
}

export const currentOpenings: CurrentOpening[] = [
  {
    id: "senior-sre-001",
    position: "Senior Site Reliability Engineer",
    department: "Engineering",
    details: "We are looking for an experienced SRE to join our team. You will be responsible for maintaining system reliability, automating operations, and ensuring high availability of our services.",
    location: "Bangalore/Hybrid",
    immediateJoiner: true,
    modeOfWork: "Hybrid",
    requiredOpenings: 3,
    isActive: true
  },
  {
    id: "devops-eng-002",
    position: "DevOps Engineer",
    department: "Engineering",
    details: "Join our DevOps team to build and maintain CI/CD pipelines, automate infrastructure provisioning, and optimize deployment processes.",
    location: "Chennai",
    immediateJoiner: false,
    modeOfWork: "On-site",
    requiredOpenings: 2,
    isActive: true
  },
  {
    id: "cloud-arch-003",
    position: "Lead Cloud Architect",
    department: "Infrastructure",
    details: "Design and implement scalable cloud solutions for enterprise clients. Experience with AWS, Azure, and GCP required.",
    location: "Coimbatore/Remote",
    immediateJoiner: false,
    modeOfWork: "Remote",
    requiredOpenings: 1,
    isActive: true
  }
];
