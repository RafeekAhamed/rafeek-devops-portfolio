import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    number: "01",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Azure Cloud",
    description:
      "Azure infrastructure, cloud resources, virtual networking, and platform operations.",
    skills: [
      "Microsoft Azure",
      "Azure VMs",
      "Azure Storage",
      "Azure Virtual Networks",
      "VNet Peering",
      "Azure Kubernetes Service (AKS)",
    ],
  },
  {
    number: "02",
    category: "DEVOPS & CI/CD",
    title: "Delivery Engineering",
    description:
      "Source control, build and release workflows, deployment pipelines, and delivery automation.",
    skills: [
      "Azure DevOps",
      "Azure Pipelines",
      "Git",
      "GitHub",
      "GitHub Actions",
      "YAML",
      "CI/CD",
      "Release Management",
    ],
  },
  {
    number: "03",
    category: "CONTAINERS & ORCHESTRATION",
    title: "Container Platforms",
    description:
      "Containerized applications, Kubernetes workloads, service routing, configuration, and scaling.",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Services",
      "Ingress",
      "ConfigMaps",
      "Secrets",
      "Health Probes",
      "Horizontal Pod Autoscaling",
    ],
  },
  {
    number: "04",
    category: "INFRASTRUCTURE AS CODE",
    title: "Infrastructure Automation",
    description:
      "Declarative infrastructure provisioning, reusable configurations, and environment management.",
    skills: [
      "Terraform",
      "Terraform Modules",
      "ARM Templates",
      "Infrastructure as Code",
      "Environment Configuration",
      "PowerShell",
    ],
  },
  {
    number: "05",
    category: "IDENTITY & NETWORK SECURITY",
    title: "Cloud Security",
    description:
      "Identity management, access control, network security, and cloud network configuration.",
    skills: [
      "Microsoft Entra ID",
      "Azure RBAC",
      "Network Security Groups (NSGs)",
      "Azure Virtual Networks",
      "VNet Peering",
      "Private Endpoints",
      "Docker Networking",
    ],
  },
  {
    number: "06",
    category: "MONITORING & OPERATIONS",
    title: "Cloud Operations",
    description:
      "Deployment validation, monitoring, incident troubleshooting, and release support.",
    skills: [
      "Azure Monitor",
      "Application Insights",
      "Deployment Validation",
      "Production Support",
      "Incident Troubleshooting",
      "kubectl",
      "PowerShell",
      "Release Management",
    ],
  },
];

const tools = [
  "Microsoft Azure",
  "Azure DevOps",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Git",
  "GitHub Actions",
  "PowerShell",
  "Python",
  "PostgreSQL",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="container">
        {/* SECTION HEADER */}
        <SectionTitle
          eyebrow="03 / Technical Expertise"
          title="The stack behind the"
          highlight="systems."
          description="Technical skills spanning Azure cloud infrastructure, CI/CD, Kubernetes, containerization, infrastructure as code, cloud security, monitoring, and operational support."
          align="left"
          className="mb-12 lg:mb-16"
        />

        {/* SKILL CARDS */}
        <div className="system-grid">
          {skillGroups.map((group) => (
            <article key={group.number} className="system-card">
              <div className="system-card-header">
                <span className="system-card-number">
                  {group.number}
                </span>

                <span className="system-card-type">
                  {group.category}
                </span>
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {group.description}
                </p>

                <div className="my-6 system-divider" />

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* TOOLS STRIP */}
        <div className="mt-5 border border-white/[0.07] bg-white/[0.015]">
          <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <p className="micro-label micro-label-cyan">
                TOOLS IN THE LOOP
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Technologies used across development, deployment, and
                operations.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="tech-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER META */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.07] pt-4 text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>SKILLS / 06 DOMAINS</span>

          <span>
            AZURE · DEVOPS · KUBERNETES · INFRASTRUCTURE
          </span>
        </div>
      </div>
    </section>
  );
}