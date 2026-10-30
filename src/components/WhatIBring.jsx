const strengths = [
  {
    number: "01",
    title: "RELEASE ENGINEERING",
    description:
      "Professional experience supporting enterprise application releases, including build and artifact tracking, deployment coordination, database script validation, release documentation, and post-deployment checks.",
    tags: ["Azure DevOps", "CI/CD", "Release Management"],
  },
  {
    number: "02",
    title: "AZURE CLOUD OPERATIONS",
    description:
      "Experience supporting Azure-based environments through infrastructure and network health checks, AKS workload monitoring, service connectivity checks, and operational troubleshooting.",
    tags: ["Microsoft Azure", "AKS", "Azure Monitor"],
  },
  {
    number: "03",
    title: "CONTAINER PLATFORMS",
    description:
      "Hands-on project experience with Docker and Kubernetes, including workload deployments, services, ingress, configuration, health probes, Helm, and autoscaling.",
    tags: ["Docker", "Kubernetes", "Helm"],
  },
  {
    number: "04",
    title: "INFRASTRUCTURE AUTOMATION",
    description:
      "Practical infrastructure-as-code work using Terraform, reusable modules, environment-specific configurations, and infrastructure automation concepts.",
    tags: ["Terraform", "IaC", "Terraform Modules"],
  },
];

export default function WhatIBring() {
  return (
    <section
      id="value"
      className="section-shell py-24 md:py-32"
      aria-labelledby="value-heading"
    >
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <div className="section-label">Why Hire Me</div>

            <h2 id="value-heading" className="editorial-title mt-6">
              What I
              <br />
              <span className="cyan-text">bring.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-slate-400 md:text-base">
              A practical DevOps foundation built on enterprise release
              management experience, Azure cloud operations, container
              platforms, infrastructure automation, and continuous learning.
            </p>

            <div className="mt-10 border-l border-cyan-400/30 pl-5">
              <p className="micro-label micro-label-cyan">
                TARGET PROFILE
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                DevOps Engineer · Azure DevOps Engineer · Azure Cloud
                Engineer · Cloud Operations Engineer
              </p>
            </div>
          </div>

          <div className="space-y-px border border-white/[0.08] bg-white/[0.08]">
            {strengths.map((item) => (
              <article
                key={item.number}
                className="bg-[#080c0e] p-6 transition-colors duration-300 hover:bg-[#0b1113] md:p-7"
              >
                <div className="grid gap-5 md:grid-cols-[52px_1fr]">
                  <span className="font-mono text-xs text-cyan-400/70">
                    {item.number}
                  </span>

                  <div>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-lg font-semibold tracking-tight text-white">
                        {item.title}
                      </h3>

                      <span className="technical-label">
                        CAPABILITY
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tech-chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.07] pt-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="micro-label">
              READY FOR THE NEXT ENVIRONMENT
            </span>

            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
              Learn → Build → Deploy → Operate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}