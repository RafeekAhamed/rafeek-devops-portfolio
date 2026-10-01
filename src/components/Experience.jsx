const experiences = [
  {
    number: "01",
    role: "DevOps Engineer",
    company: "Global Software Solution (TVL) Pvt. Ltd.",
    location: "Tirunelveli, India",
    period: "Dec 2024 – Jun 2025",
    type: "Professional Experience",
    summary:
      "Supported release management and DevOps operations for an enterprise financial transaction platform across multiple client environments.",
    responsibilities: [
      "Supported Azure-hosted application environments and AKS workloads.",
      "Validated Azure DevOps build IDs, artifacts, and release readiness before deployments.",
      "Performed Kubernetes pod health checks and investigated deployment-related issues using kubectl.",
      "Monitored application and infrastructure health using Azure Monitor.",
      "Performed network and IP connectivity checks during release validation.",
      "Executed PostgreSQL database scripts as part of application release activities.",
      "Maintained release logs, trackers, SOPs, runbooks, release notes, and operational documentation.",
      "Coordinated with development, QA, business, and client teams during release and production-support activities.",
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
    role: "Python Full Stack Developer",
    company: "Inmakes Infotech Pvt. Ltd.",
    location: "Kochi, Kerala",
    period: "Jul 2023 – Sep 2023",
    type: "Developer Intern",
    summary:
      "Worked on Python and Django application development, REST API integration, database operations, and responsive frontend development in an Agile environment.",
    responsibilities: [
      "Developed backend modules using Python and Django.",
      "Built REST APIs for frontend-backend integration.",
      "Executed CRUD operations using MySQL and PostgreSQL databases.",
      "Built responsive UI components using HTML and CSS.",
      "Collaborated in an Agile team environment and delivered incremental features across sprint cycles.",
    ],
    technologies: [
      "Python",
      "Django",
      "REST APIs",
      "MySQL",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Agile",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#050817] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Experience across DevOps and application development.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Professional experience spanning cloud operations, release
            management, Kubernetes workloads, CI/CD, backend development,
            databases, and application delivery.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 hidden h-[calc(100%-8px)] w-px bg-gradient-to-b from-cyan-400/60 via-slate-700 to-transparent md:block" />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-cyan-400 bg-[#050817] shadow-[0_0_18px_rgba(34,211,238,0.25)] md:block" />

                <div className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50 sm:p-8 lg:p-9">
                  {/* Header */}
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-sm font-semibold text-cyan-400">
                          {experience.number}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-slate-700" />

                        <span className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          {experience.type}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                        {experience.role}
                      </h3>

                      <p className="mt-3 text-base font-semibold text-cyan-400">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        {experience.location}
                      </p>
                    </div>

                    {/* Period */}
                    <div className="shrink-0 rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3">
                      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                        Period
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-300">
                        {experience.period}
                      </p>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mt-8 border-t border-slate-800/80 pt-7">
                    <p className="max-w-4xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                      {experience.summary}
                    </p>
                  </div>

                  {/* Responsibilities + Technology */}
                  <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
                    {/* Responsibilities */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Responsibilities
                      </p>

                      <ul className="mt-5 space-y-3">
                        {experience.responsibilities.map(
                          (responsibility) => (
                            <li
                              key={responsibility}
                              className="flex gap-3 text-sm leading-7 text-slate-400"
                            >
                              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                              <span>{responsibility}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technology stack */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Technology Stack
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {experience.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-slate-800 bg-slate-950/70 px-3 py-2 text-xs font-medium text-slate-400 transition-colors duration-300 hover:border-cyan-400/30 hover:text-cyan-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-8 h-px w-12 bg-slate-700 transition-all duration-500 group-hover:w-24 group-hover:bg-cyan-400" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;