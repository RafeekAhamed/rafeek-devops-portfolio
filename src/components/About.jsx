const metrics = [
  {
    value: "1+",
    label: "YEAR EXPERIENCE",
    detail: "DevOps / Cloud",
  },
  {
    value: "06",
    label: "CLIENT ENVIRONMENTS",
    detail: "Enterprise releases",
  },
  {
    value: "99%+",
    label: "AVAILABILITY",
    detail: "Application support",
  },
  {
    value: "03+",
    label: "CORE PROJECTS",
    detail: "Cloud / DevOps",
  },
];

const focusAreas = [
  {
    number: "01",
    title: "Cloud Engineering",
    description:
      "Azure infrastructure, networking, identity, access management, monitoring, and operational support.",
    technologies: [
      "Azure",
      "VMs",
      "Storage",
      "VNet",
      "Entra ID",
      "RBAC",
    ],
  },
  {
    number: "02",
    title: "DevOps & CI/CD",
    description:
      "Release management, deployment validation, build artifacts, CI/CD pipelines, Git workflows, and operational documentation.",
    technologies: [
      "Azure DevOps",
      "Git",
      "YAML",
      "CI/CD",
      "PowerShell",
    ],
  },
  {
    number: "03",
    title: "Containers & IaC",
    description:
      "Containerized workloads, Kubernetes operations, infrastructure automation, health checks, and deployment workflows.",
    technologies: [
      "Kubernetes",
      "AKS",
      "Docker",
      "Terraform",
      "Helm",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-shell py-24 md:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label">
            02 / About
          </div>

          <div className="mt-6 max-w-5xl">
            <h2 className="editorial-title">
              Engineering /
              <br />
              with purpose.
            </h2>
          </div>
        </div>

        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              I am a DevOps Engineer focused on Azure cloud operations,
              CI/CD release management, Kubernetes, containerization,
              infrastructure automation, and production support.
            </p>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-500 md:text-base">
              My experience includes supporting enterprise application
              releases across multiple client environments, validating
              deployments, monitoring Azure infrastructure and AKS
              workloads, troubleshooting operational issues, and
              maintaining release documentation and runbooks.
            </p>
          </div>

          {/* Identity panel */}
          <div className="system-card self-start">
            <div className="system-card-header">
              <span className="system-card-number">
                PROFILE
              </span>

              <span className="system-card-type">
                ENGINEERING / FOCUS
              </span>
            </div>

            <div className="p-6 md:p-7">
              <p className="micro-label micro-label-cyan">
                PRIMARY ROLE
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                DevOps Engineer
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Azure Cloud Engineer
              </p>

              <div className="system-divider my-6" />

              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="micro-label">
                    CLOUD
                  </span>

                  <span className="text-sm text-slate-300">
                    Microsoft Azure
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="micro-label">
                    CONTAINERS
                  </span>

                  <span className="text-sm text-slate-300">
                    Kubernetes / Docker
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="micro-label">
                    AUTOMATION
                  </span>

                  <span className="text-sm text-slate-300">
                    Terraform / CI/CD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-16 border-y border-white/[0.07]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`px-5 py-7 md:px-7 md:py-8 ${
                  index % 2 === 0
                    ? "border-r border-white/[0.07]"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-white/[0.07] md:border-t-0"
                    : ""
                } ${
                  index === 2
                    ? "md:border-l md:border-white/[0.07]"
                    : ""
                }`}
              >
                <p className="font-mono text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {metric.value}
                </p>

                <p className="mt-3 font-mono text-[9px] font-bold uppercase tracking-[0.17em] text-cyan-400">
                  {metric.label}
                </p>

                <p className="mt-2 text-xs text-slate-600">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Focus areas */}
        <div className="mt-16">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="micro-label">
              ENGINEERING / FOCUS AREAS
            </p>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
              Cloud → Delivery → Operations
            </span>
          </div>

          <div className="system-grid">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="system-card"
              >
                <div className="system-card-header">
                  <span className="system-card-number">
                    {area.number}
                  </span>

                  <span className="system-card-type">
                    FOCUS
                  </span>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {area.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {area.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {area.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="tech-chip"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 border-t border-white/[0.07] pt-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <span className="micro-label">
              ENGINEERING PRINCIPLE
            </span>

            <p className="max-w-2xl text-sm leading-6 text-slate-500 md:text-right">
              Reliable deployments, observable systems, repeatable
              infrastructure, and clear operational processes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}