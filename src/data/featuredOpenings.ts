export interface FeaturedOpening {
  id: string;
  title: string;
  category: string;
  description: string;
  isActive: boolean;
}

export const featuredOpenings: FeaturedOpening[] = [
  {
    id: "sre-ops",
    title: "SRE Operations & Incident Management",
    category: "Engineering",
    description: "Handles the reliability of client systems. This team monitors uptime, manages incidents, performs root-cause analysis, and ensures systems recover quickly with minimal impact. They also maintain error budgets and help enforce SLAs/SLOs.",
    isActive: true
  },
  {
    id: "devops-automation",
    title: "DevOps & Automation",
    category: "Engineering",
    description: "Focuses on streamlining software delivery. This team builds CI/CD pipelines, automates deployments, configures infrastructure as code, and ensures repeatable, efficient processes. The goal is faster, safer releases with minimal manual intervention.",
    isActive: true
  },
  {
    id: "cloud-arch",
    title: "Cloud Architecture & Engineering",
    category: "Infrastructure",
    description: "Designs scalable and secure cloud solutions tailored to client needs. This includes multi-cloud and hybrid architectures, performance optimization, disaster recovery planning, and cost-efficient resource utilization.",
    isActive: true
  },
  {
    id: "observability",
    title: "Observability & Monitoring",
    category: "Engineering",
    description: "Ensures full visibility into system performance. This team builds logging, metrics, and tracing frameworks, creates dashboards, sets up alerting, and leverages AIOps to proactively detect and prevent issues.",
    isActive: true
  },
  {
    id: "reliability-perf",
    title: "Reliability & Performance Engineering",
    category: "Engineering",
    description: "Specializes in keeping systems fast and stable under stress. They conduct load testing, chaos engineering, and capacity planning to make sure systems remain resilient under unexpected conditions or peak traffic.",
    isActive: true
  },
  {
    id: "sre-strategy",
    title: "SRE Strategy & Governance",
    category: "Product",
    description: "Advises clients on SRE best practices and operational policies. They define reliability roadmaps, SLAs, error budgets, and help integrate SRE principles into the client's organization at a strategic level.",
    isActive: true
  },
  {
    id: "client-success",
    title: "Client Success & Engagement",
    category: "Product",
    description: "Acts as the bridge between the consulting team and clients. Ensures smooth onboarding, high client satisfaction, progress tracking, and long-term relationship management. They also facilitate knowledge transfer and adoption of best practices.",
    isActive: true
  },
  {
    id: "project-mgmt",
    title: "Project Management & Delivery Excellence",
    category: "Product",
    description: "Manages timelines, resources, and deliverables to ensure projects are completed on schedule and within scope. Implements structured delivery methodologies while maintaining quality and operational efficiency.",
    isActive: true
  },
  {
    id: "sales-bd",
    title: "Sales & Business Development",
    category: "Marketing & Sales",
    description: "Drives revenue growth and new client acquisition. This team identifies opportunities, builds proposals, manages client negotiations, and strengthens partnerships to secure long-term business.",
    isActive: true
  },
  {
    id: "hr-talent",
    title: "HR & Talent Acquisition",
    category: "People/HR",
    description: "Attracts, hires, and retains top SRE talent. Manages employee development, engagement, performance, and ensures the company culture aligns with its mission of reliability and innovation.",
    isActive: true
  }
];
