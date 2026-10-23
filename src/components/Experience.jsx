const experiences = [
  {
    number: "01",
    company: "Global Software Solution (TVL) Pvt. Ltd.",
    role: "DevOps Engineer — Release Management",
    location: "Tirunelveli, Tamil Nadu",
    period: "Dec 2024 — Jun 2025",

    impact: [
      {
        value: "06",
        label: "CLIENT ENVIRONMENTS",
      },
      {
        value: "99%+",
        label: "AVAILABILITY SUPPORTED",
      },
      {
        value: "CI/CD",
        label: "RELEASE OPERATIONS",
      },
    ],

    summary:
      "Supported release management and cloud operations for the NPSS financial transaction platform across multiple client environments, focusing on Azure infrastructure, AKS workloads, deployment validation, monitoring, and production support.",

    responsibilities: [
      "Supported application releases for the NPSS financial transaction platform across six enterprise client environments.",
      "Monitored Azure infrastructure and AKS workloads, performing operational checks to support application availability and production stability.",
      "Validated Azure DevOps build artifacts, deployment status, and PostgreSQL database scripts before and after releases.",
      "Used kubectl to inspect Kubernetes pod health and deployment status and assist with workload troubleshooting.",
      "Coordinated with development, QA, business, and client teams to support release execution and production operations.",
      "Maintained release documentation, including runbooks, SOPs, release notes, operational trackers, and Azure DevOps dashboards.",
    ],

    technologies: [
      "Microsoft Azure",
      "Azure DevOps",
      "AKS",
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
        label: "BACKEND DEVELOPMENT",
      },
      {
        value: "REST",
        label: "API DEVELOPMENT",
      },
      {
        value: "SQL",
        label: "DATABASE OPERATIONS",
      },
    ],

    summary:
      "Gained practical development experience with Python and Django, REST API functionality, relational database operations, and Agile development practices.",

    responsibilities: [
      "Developed backend modules using Python and Django.",
      "Implemented REST API functionality to support application workflows.",
      "Worked with MySQL and PostgreSQL databases, including CRUD operations.",
      "Collaborated on development tasks within an Agile workflow.",
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
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="section-label">
              04 / Experience
            </span>

            <span className="technical-label">
              CLOUD / DEVOPS / RELEASES
            </span>
          </div>

          <h2 className="editorial-title mt-6 max-w-5xl">
            Experience in
            <br />
            <span className="muted">production.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Experience supporting enterprise releases, Azure cloud
            operations, Kubernetes workloads, deployment validation,
            monitoring, and production support.
          </p>
        </div>

        {/* EXPERIENCE RECORDS */}
        <div className="space-y-8">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="system-card"
            >
              {/* CARD HEADER */}
              <div className="system-card-header">
                <span className="system-card-number">
                  {experience.number}
                </span>

                <span className="system-card-type">
                  PROFESSIONAL / EXPERIENCE
                </span>
              </div>

              <div className="p-5 md:p-8 lg:p-10">
                {/* COMPANY AND ROLE */}
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                  <div>
                    <p className="micro-label micro-label-cyan">
                      {experience.period}
                    </p>

                    <h3 className="mt-3 max-w-3xl text-xl font-semibold tracking-tight text-white md:text-3xl">
                      {experience.role}
                    </h3>

                    <p className="mt-3 text-base text-slate-300">
                      {experience.company}
                    </p>

                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      {experience.location}
                    </p>
                  </div>

                  <div className="flex items-start lg:justify-end">
                    <span className="tech-chip">
                      {experience.number === "01"
                        ? "RELEASE / OPERATIONS"
                        : "SOFTWARE DEVELOPMENT"}
                    </span>
                  </div>
                </div>

                {/* EXPERIENCE HIGHLIGHTS */}
                <div className="mt-8 grid grid-cols-1 border-y border-white/[0.07] sm:grid-cols-3">
                  {experience.impact.map((item, index) => (
                    <div
                      key={item.label}
                      className={`px-4 py-5 md:px-5 md:py-6 ${
                        index !== 0
                          ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
                          : ""
                      }`}
                    >
                      <p className="font-mono text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {item.value}
                      </p>

                      <p className="mt-2 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-400">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* SUMMARY */}
                <div className="mt-8 max-w-4xl">
                  <p className="text-sm leading-7 text-slate-400 md:text-base md:leading-8">
                    {experience.summary}
                  </p>
                </div>

                {/* RESPONSIBILITIES AND TECHNOLOGIES */}
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

                {/* FOOTER */}
                <div className="mt-10 border-t border-white/[0.07] pt-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <span className="micro-label">
                      DELIVERY DOMAIN
                    </span>

                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                      {experience.number === "01"
                        ? "Azure / CI/CD / Production Operations"
                        : "Python / Django / REST APIs"}
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