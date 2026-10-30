import SectionTitle from "./SectionTitle";

const skillGroups = [
  {
    number: "01",
    category: "PROGRAMMING LANGUAGES",
    title: "Programming",
    description:
      "Languages used for application development, scripting logic, database queries, and automation tasks.",
    skills: ["Python", "JavaScript", "SQL"],
  },
  {
    number: "02",
    category: "SCRIPTING & AUTOMATION",
    title: "Shell & Automation",
    description:
      "Command-line scripting and automation for system administration and operational tasks.",
    skills: ["PowerShell", "Bash", "Linux Shell"],
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "Frontend & Backend",
    description:
      "Web technologies and application frameworks for building interfaces, backend services, and APIs.",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Vite",
      "Django",
      "REST APIs",
    ],
  },
  {
    number: "04",
    category: "DATABASES & DATA",
    title: "Database Technologies",
    description:
      "Relational databases, SQL queries, and application database integration.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQL Queries",
      "Database Integration",
    ],
  },
  {
    number: "05",
    category: "CLOUD & INFRASTRUCTURE",
    title: "Azure Cloud Engineering",
    description:
      "Cloud infrastructure, virtual machines, storage, networking, identity, and managed Kubernetes services.",
    skills: [
      "Microsoft Azure",
      "Azure Virtual Machines",
      "Azure Storage",
      "Azure Virtual Networks",
      "VNet Peering",
      "Azure Kubernetes Service (AKS)",
      "Microsoft Entra ID",
      "Azure RBAC",
    ],
  },
  {
    number: "06",
    category: "DEVOPS & CI/CD",
    title: "Delivery Engineering",
    description:
      "Source control, build pipelines, artifact management, release workflows, and deployment automation.",
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
    number: "07",
    category: "CONTAINERS & ORCHESTRATION",
    title: "Container Platforms",
    description:
      "Containerized applications and Kubernetes workload management, service routing, configuration, and scaling.",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Kubernetes Services",
      "Ingress",
      "ConfigMaps",
      "Secrets",
      "Health Probes",
      "Horizontal Pod Autoscaling",
    ],
  },
  {
    number: "08",
    category: "INFRASTRUCTURE AS CODE",
    title: "Infrastructure Automation",
    description:
      "Declarative infrastructure provisioning, reusable Terraform modules, and environment configuration.",
    skills: [
      "Terraform",
      "HCL",
      "Terraform Modules",
      "ARM Templates",
      "Infrastructure as Code",
      "Environment Configuration",
    ],
  },
  {
    number: "09",
    category: "IDENTITY & NETWORK SECURITY",
    title: "Cloud Security",
    description:
      "Identity management, access control, network security, and cloud network configuration.",
    skills: [
      "Microsoft Entra ID",
      "Azure RBAC",
      "Network Security Groups",
      "Azure Virtual Networks",
      "VNet Peering",
      "Private Endpoints",
      "Docker Networking",
    ],
  },
  {
    number: "10",
    category: "MONITORING & OPERATIONS",
    title: "Cloud Operations",
    description:
      "Cloud monitoring, deployment validation, application troubleshooting, and release support.",
    skills: [
      "Azure Monitor",
      "Application Insights",
      "Deployment Validation",
      "Production Support",
      "Incident Troubleshooting",
      "kubectl",
      "Release Support",
    ],
  },
];

const tools = [
  "Python",
  "PowerShell",
  "Bash",
  "Linux",
  "Microsoft Azure",
  "Azure DevOps",
  "Git",
  "GitHub Actions",
  "Docker",
  "Kubernetes",
  "Helm",
  "Terraform",
  "PostgreSQL",
  "MySQL",
  "React",
  "Django",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-shell"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <SectionTitle
          id="skills-heading"
          eyebrow="03 / Technical Expertise"
          title="The stack behind the"
          highlight="systems."
          description="Technical capabilities spanning programming, scripting, web development, databases, Azure cloud infrastructure, CI/CD, Kubernetes, infrastructure automation, security, and operations."
          align="left"
          className="mb-12 lg:mb-16"
        />

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

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${group.title} skills`}
                >
                  {group.skills.map((skill) => (
                    <li key={skill} className="tech-chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* TECHNOLOGY TOOLKIT */}
        <div className="mt-5 border border-white/[0.07] bg-white/[0.015]">
          <div className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-6">
            <div>
              <p className="micro-label micro-label-cyan">
                TECHNOLOGY TOOLKIT
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Selected programming languages, development
                technologies, cloud platforms, and tools.
              </p>
            </div>

            <ul
              className="flex flex-wrap gap-2"
              aria-label="Technology toolkit"
            >
              {tools.map((tool) => (
                <li key={tool} className="tech-chip">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FOOTNOTE */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/[0.07] pt-4 text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>SKILLS / 10 TECHNICAL DOMAINS</span>

          <span>
            PROGRAMMING · CLOUD · DEVOPS · AUTOMATION
          </span>
        </div>
      </div>
    </section>
  );
}