const workflow = [
  {
    number: "01",
    title: "SOURCE CONTROL",
    description:
      "Track application and infrastructure changes, maintain version history, and collaborate through Git-based workflows.",
    tools: ["Git", "GitHub"],
  },
  {
    number: "02",
    title: "BUILD & VALIDATE",
    description:
      "Run CI/CD workflows to build, validate, and prepare application changes and deployment artifacts.",
    tools: ["Azure DevOps", "YAML", "CI/CD"],
  },
  {
    number: "03",
    title: "CONTAINERIZE",
    description:
      "Package applications and their dependencies into portable containers for consistent execution across environments.",
    tools: ["Docker"],
  },
  {
    number: "04",
    title: "ORCHESTRATE",
    description:
      "Manage containerized workloads, configure deployments, and validate application health using Kubernetes.",
    tools: ["Kubernetes", "AKS", "Helm"],
  },
  {
    number: "05",
    title: "DEPLOY & VALIDATE",
    description:
      "Support controlled releases through deployment execution, artifact checks, and post-deployment validation.",
    tools: ["Azure DevOps", "PowerShell", "kubectl"],
  },
  {
    number: "06",
    title: "MONITOR & OPERATE",
    description:
      "Monitor workload health, investigate deployment issues, and support application availability and production operations.",
    tools: ["Azure Monitor", "AKS", "Production Support"],
  },
];

export default function EngineeringWorkflow() {
  return (
    <section
      id="workflow"
      className="py-24 md:py-32"
      aria-labelledby="workflow-heading"
    >
      <div className="container">
        <div className="mb-12 md:mb-16">
          <span className="section-label">Engineering Workflow</span>

          <h2 id="workflow-heading" className="editorial-title mt-6">
            From commit
            <br />
            to <span className="cyan-text">production.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            A structured delivery workflow covering source control, CI/CD,
            containerization, Kubernetes orchestration, release validation,
            and operational monitoring.
          </p>
        </div>

        <div className="system-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((item) => (
            <article key={item.number} className="system-card group">
              <div className="system-card-header">
                <span className="system-card-number">{item.number}</span>
                <span className="system-card-type">DELIVERY STAGE</span>
              </div>

              <div className="p-5 md:p-6">
                <div className="micro-label micro-label-cyan">
                  STAGE / {item.number}
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-white md:text-xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <span key={tool} className="tech-chip">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="system-divider mt-10" />

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
          <span className="technical-label">
            ENGINEERING DELIVERY MODEL
          </span>

          <span className="text-xs text-slate-500">
            Source → Build → Containerize → Orchestrate → Deploy → Monitor
          </span>
        </div>
      </div>
    </section>
  );
}