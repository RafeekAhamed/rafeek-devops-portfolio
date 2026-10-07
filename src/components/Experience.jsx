const experiences = [
  {
    number: "01",
    company: "Global Software Solution (TVL) Pvt. Ltd.",
    role: "DevOps Engineer — Release Management",
    location: "Tirunelveli, Tamil Nadu",
    period: "Dec 2024 — Jul 2025",

    impact: [
      {
        value: "06",
        label: "CLIENT ENVIRONMENTS",
      },
      {
        value: "99%+",
        label: "APP AVAILABILITY",
      },
      {
        value: "CI/CD",
        label: "RELEASE OPERATIONS",
      },
    ],

    summary:
      "Managed enterprise application release operations for the NPSS financial transaction platform across multiple client environments, supporting Azure infrastructure, AKS workloads, deployment validation, monitoring, and production operations.",

    responsibilities: [
      "Managed end-to-end CI/CD release deployments for the NPSS financial transaction platform across 6 enterprise client environments.",
      "Supported Azure infrastructure and AKS workloads while maintaining 99%+ application availability through monitoring and operational checks.",
      "Validated Azure DevOps pipelines, build artifacts, deployment status, PostgreSQL scripts, and release quality before and after deployments.",
      "Performed Kubernetes workload validation using kubectl, including pod health checks, deployment status, and troubleshooting of workload issues.",
      "Collaborated with development, QA, business, and client teams during application releases and production support activities.",
      "Maintained release documentation including runbooks, SOPs, release notes, operational trackers, and Azure DevOps dashboards.",
    ],

    technologies: [
      "Azure",
      "AKS",
      "Azure DevOps",
      "Kubernetes",
      "Docker",
      "PostgreSQL",
      "Azure Monitor",
      "PowerShell",
      "kubectl",
    ],
  },

  {
    number: "02",
    company: "Inmakes Infotech Pvt. Ltd.",
    role: "Python Full Stack Developer Intern",
    location: "Kochi, Kerala",
    period: "Jul 2023 — Sep 2023",

    impact: [
      {
        value: "PYTHON",
        label: "BACKEND",
      },
      {
        value: "REST",
        label: "API DEVELOPMENT",
      },
      {
        value: "SQL",
        label: "DATABASE",
      },
    ],

    summary:
      "Worked on Python and Django-based application development with REST APIs, database operations, and Agile development practices.",

    responsibilities: [
      "Developed backend modules using Python and Django.",
      "Implemented REST API functionality for application workflows.",
      "Worked with MySQL and PostgreSQL CRUD operations.",
      "Collaborated within an Agile development environment.",
    ],

    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "Agile",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-shell py-24 md:py-32"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <div className="section-label">
            04 / Experience
          </div>

          <div className="mt-6 max-w-5xl">
            <h2 className="editorial-title">
              Experience /
              <br />
              in production.
            </h2>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
            Hands-on experience across release management, Azure
            operations, Kubernetes workloads, deployment validation,
            monitoring, and production support.
          </p>
        </div>

        {/* Experience records */}
        <div className="space-y-8">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="system-card"
            >
              {/* Header */}
              <div className="system-card-header">
                <span className="system-card-number">
                  {experience.number}
                </span>

                <span className="system-card-type">
                  PROFESSIONAL / EXPERIENCE
                </span>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                {/* Company / role */}
                <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="micro-label micro-label-cyan">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight text-white md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-3 text-base text-slate-300">
                      {experience.company}
                    </p>

                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
                      {experience.location}
                    </p>
                  </div>

                  {/* Experience status */}
                  <div className="flex items-start lg:justify-end">
                    <span className="tech-chip">
                      RELEASE / OPERATIONS
                    </span>
                  </div>
                </div>

                {/* Impact metrics */}
                <div className="mt-8 grid grid-cols-1 border-y border-white/[0.07] sm:grid-cols-3">
                  {experience.impact.map((item, index) => (
                    <div
                      key={item.label}
                      className={`px-5 py-6 ${
                        index !== 0
                          ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
                          : ""
                      }`}
                    >
                      <p className="font-mono text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {item.value}
                      </p>

                      <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="mt-8 max-w-4xl">
                  <p className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                    {experience.summary}
                  </p>
                </div>

                {/* Responsibilities */}
                <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.38fr]">
                  <div>
                    <p className="micro-label mb-5">
                      RESPONSIBILITIES
                    </p>

                    <div className="space-y-4">
                      {experience.responsibilities.map(
                        (responsibility, index) => (
                          <div
                            key={responsibility}
                            className="flex gap-4"
                          >
                            <span className="shrink-0 font-mono text-[9px] font-bold tracking-[0.12em] text-cyan-400/70">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <p className="text-sm leading-7 text-slate-400">
                              {responsibility}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Stack */}
                  <div>
                    <p className="micro-label mb-5">
                      TECHNOLOGY STACK
                    </p>

                    <div className="flex flex-wrap gap-2 lg:max-w-xs">
                      {experience.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="tech-chip"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom line */}
                <div className="mt-10 border-t border-white/[0.07] pt-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="micro-label">
                      DELIVERY DOMAIN
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                      Cloud / Release / Production Operations
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}