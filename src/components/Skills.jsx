const skillGroups = [
  {
    number: "01",
    title: "Cloud & Infrastructure",
    description:
      "Cloud platforms and infrastructure services used for deployment, administration, monitoring, networking, and DevOps workflows.",
    skills: [
      "Microsoft Azure",
      "Azure VMs",
      "Azure Storage",
      "Azure Networking",
      "AKS",
      "AWS",
      "IAM",
      "VPC",
      "Microsoft Entra ID",
      "RBAC",
      "NSGs",
      "Private Endpoints",
    ],
  },
  {
    number: "02",
    title: "DevOps & CI/CD",
    description:
      "Tools and practices used to automate source control, builds, releases, deployment validation, and application delivery.",
    skills: [
      "Azure DevOps",
      "Azure Pipelines",
      "GitHub Actions",
      "Git",
      "YAML",
      "CI/CD",
      "Build & Release",
      "Release Management",
      "Deployment Validation",
    ],
  },
  {
    number: "03",
    title: "Containers & Kubernetes",
    description:
      "Containerization and Kubernetes concepts used for application deployment, orchestration, scaling, and workload management.",
    skills: [
      "Docker",
      "Kubernetes",
      "Helm",
      "AKS",
      "Services",
      "Ingress",
      "ConfigMaps",
      "Secrets",
      "RBAC",
      "Health Probes",
      "Rolling Updates",
      "HPA",
    ],
  },
  {
    number: "04",
    title: "Infrastructure as Code",
    description:
      "Infrastructure automation using declarative configuration, reusable modules, and environment-specific infrastructure components.",
    skills: [
      "Terraform",
      "Terraform Modules",
      "ARM Templates",
      "Infrastructure as Code",
      "Docker Provider",
      "Environment Configuration",
      "PowerShell",
    ],
  },
  {
    number: "05",
    title: "Monitoring & Operations",
    description:
      "Monitoring, troubleshooting, deployment validation, and operational practices for cloud and containerized workloads.",
    skills: [
      "Azure Monitor",
      "Application Insights",
      "Kubernetes Troubleshooting",
      "kubectl",
      "Pod Health Checks",
      "Network Troubleshooting",
      "Release Validation",
      "Production Support",
      "Deployment Validation",
    ],
  },
  {
    number: "06",
    title: "Scripting & Development",
    description:
      "Programming and database technologies supporting automation, backend development, API integration, and application workflows.",
    skills: [
      "PowerShell",
      "Python",
      "Flask",
      "Django",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Linux",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#030611] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I work with.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            A practical technology stack covering cloud infrastructure,
            DevOps automation, container orchestration, infrastructure as
            code, monitoring, and application development.
          </p>
        </div>

        {/* Skill groups */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/60 sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {group.number}
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
                  Skill Group
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-white">
                {group.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-7 text-slate-500">
                {group.description}
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom accent */}
              <div className="mt-7 h-px w-10 bg-slate-700 transition-all duration-500 group-hover:w-20 group-hover:bg-cyan-400" />
            </article>
          ))}
        </div>

        {/* Core stack */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/20 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Core DevOps Stack
              </p>

              <h3 className="mt-2 text-xl font-bold text-white">
                Azure · Azure DevOps · Kubernetes · Docker · Terraform
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Cloud",
                "CI/CD",
                "Containers",
                "IaC",
                "Monitoring",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;