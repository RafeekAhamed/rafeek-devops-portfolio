const focusAreas = [
  {
    number: "01",
    title: "Cloud Engineering",
    description:
      "Working with Azure infrastructure, cloud services, networking, monitoring, and AKS-based workloads.",
  },
  {
    number: "02",
    title: "DevOps & CI/CD",
    description:
      "Building practical CI/CD workflows with Azure DevOps, GitHub Actions, Git, YAML, and release automation.",
  },
  {
    number: "03",
    title: "Containers & IaC",
    description:
      "Hands-on work with Docker, Kubernetes, Helm, and Terraform for repeatable application and infrastructure deployments.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#050817] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            About
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Building practical DevOps and cloud engineering skills.
          </h2>
        </div>

        {/* Main content */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Profile */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-7 sm:p-9">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              I am a DevOps Engineer focused on Azure cloud infrastructure,
              CI/CD, Kubernetes, Docker, and Terraform. My professional
              experience includes release management, deployment validation,
              Kubernetes workload checks, cloud monitoring, and production
              support.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              Alongside professional experience, I build hands-on projects
              around infrastructure automation, container orchestration, and
              CI/CD to strengthen my practical understanding of modern DevOps
              workflows.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
              I am particularly interested in opportunities involving cloud
              engineering, DevOps, platform operations, infrastructure
              automation, and reliable application delivery.
            </p>

            {/* Quick facts */}
            <div className="mt-8 grid gap-3 border-t border-slate-800/80 pt-7 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  Focus
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  DevOps & Cloud
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  Core Platform
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  Microsoft Azure
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-slate-600">
                  Availability
                </p>
                <p className="mt-2 text-sm font-semibold text-emerald-400">
                  Open to Opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Focus areas */}
          <div className="space-y-4">
            {focusAreas.map((area) => (
              <article
                key={area.number}
                className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/60 sm:p-7"
              >
                <div className="flex gap-5">
                  <span className="shrink-0 text-sm font-semibold text-cyan-400">
                    {area.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {area.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {area.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 ml-9 h-px w-8 bg-slate-700 transition-all duration-500 group-hover:w-16 group-hover:bg-cyan-400" />
              </article>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.03] px-6 py-7 sm:px-8">
          <p className="text-sm leading-7 text-slate-400 sm:text-base">
            <span className="font-semibold text-cyan-300">
              Current direction:
            </span>{" "}
            developing deeper expertise in Azure, Kubernetes, CI/CD,
            infrastructure as code, and cloud operations through professional
            experience and hands-on engineering projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;