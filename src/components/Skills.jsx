const skillGroups = [
  {
    number: "01",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Cloud Platforms",
    description:
      "Azure-focused infrastructure administration, cloud resources, networking, and platform operations.",
    skills: [
      "Microsoft Azure",
      "Azure VMs",
      "Azure Storage",
      "Azure Networking",
      "AKS",
      "Virtual Networks",
      "VNet Peering",
    ],
  },
  {
    number: "02",
    category: "DEVOPS & CI/CD",
    title: "Delivery Engineering",
    description:
      "Build and release workflows, source control, deployment automation, and CI/CD operations.",
    skills: [
      "Azure DevOps",
      "Azure Pipelines",
      "Git",
      "GitHub",
      "GitHub Actions",
      "YAML",
      "CI/CD",
    ],
  },
  {
    number: "03",
    category: "CONTAINERS & KUBERNETES",
    title: "Container Platforms",
    description:
      "Containerized workloads, Kubernetes orchestration, service routing, configuration, and scaling.",
    skills: [
      "Docker",
      "Kubernetes",
      "AKS",
      "Helm",
      "Services",
      "Ingress",
      "ConfigMaps",
      "Secrets",
      "Health Probes",
      "HPA",
    ],
  },
  {
    number: "04",
    category: "INFRASTRUCTURE AS CODE",
    title: "Infrastructure Automation",
    description:
      "Declarative infrastructure provisioning and repeatable environment configuration.",
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
    category: "SECURITY & NETWORKING",
    title: "Cloud Security",
    description:
      "Identity, access control, network segmentation, and secure Azure infrastructure configuration.",
    skills: [
      "Microsoft Entra ID",
      "RBAC",
      "NSGs",
      "Azure VNet",
      "VNet Peering",
      "Private Endpoints",
      "Docker Networking",
    ],
  },
  {
    number: "06",
    category: "MONITORING & OPERATIONS",
    title: "Production Operations",
    description:
      "Application monitoring, deployment validation, incident troubleshooting, and operational support.",
    skills: [
      "Azure Monitor",
      "Deployment Validation",
      "Production Support",
      "Incident Troubleshooting",
      "Release Management",
      "kubectl",
      "PowerShell",
    ],
  },
];

const tools = [
  "Azure",
  "Azure DevOps",
  "Kubernetes",
  "Docker",
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
        {/* SECTION HEADER — LEFT ALIGNED */}
        <div className="mb-12 lg:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="section-label">03 / Skills</span>

            <span className="technical-label">
              CLOUD / DEVOPS / PLATFORM
            </span>
          </div>

          <h2 className="editorial-title mt-6 max-w-4xl">
            The stack
            <br />
            behind the
            <br />
            <span className="muted">systems.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A practical engineering stack built around Azure cloud operations,
            CI/CD, Kubernetes, containerization, infrastructure as code,
            security, and production support.
          </p>
        </div>

        {/* SKILL CARDS */}
        <div className="system-grid">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="system-card"
            >
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
                    <span
                      key={skill}
                      className="tech-chip"
                    >
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
                <span
                  key={tool}
                  className="tech-chip"
                >
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