const projects = [
  {
    number: "01",
    category: "INFRASTRUCTURE / AUTOMATION",
    title: "Terraform + Docker",
    subtitle: "Infrastructure Automation",
    description:
      "Modular infrastructure automation project using Terraform and Docker to provision isolated development and production environments.",
    architecture:
      "Terraform → Network → Nginx → Flask → PostgreSQL",
    implementation: [
      "Reusable Terraform modules for infrastructure components",
      "Separate Dev and Prod environment configuration",
      "Nginx reverse proxy with Flask backend",
      "PostgreSQL database integration",
      "GitHub Actions validation workflow",
    ],
    validation: [
      "terraform fmt",
      "terraform init",
      "terraform validate",
      "terraform plan",
      "Application health checks",
    ],
    stack: [
      "Terraform",
      "Docker",
      "Python",
      "Flask",
      "PostgreSQL",
      "Nginx",
      "GitHub Actions",
    ],
    github:
      "https://github.com/RafeekAhamed/terraform-docker-infrastructure",
  },
  {
    number: "02",
    category: "CONTAINERS / ORCHESTRATION",
    title: "Kubernetes",
    subtitle: "Microservices Platform",
    description:
      "Containerized microservices platform using Kubernetes with service discovery, ingress routing, configuration management, health probes, Helm, and autoscaling.",
    architecture:
      "Ingress → Backend → PostgreSQL → Services → HPA",
    implementation: [
      "Kubernetes Services for application communication",
      "Ingress routing for microservices",
      "ConfigMaps and Secrets for configuration",
      "RBAC and namespace-based organization",
      "Health probes and rolling updates",
      "Helm-based deployment management",
      "Horizontal Pod Autoscaling",
    ],
    validation: [
      "kubectl workload validation",
      "Pod health checks",
      "Deployment status checks",
      "Service connectivity",
      "Application health validation",
    ],
    stack: [
      "Kubernetes",
      "Docker",
      "Helm",
      "PostgreSQL",
      "YAML",
      "GitHub Actions",
      "kubectl",
    ],
    github:
      "https://github.com/RafeekAhamed/kubernetes-microservices",
  },
  {
    number: "03",
    category: "CI/CD / RELEASE ENGINEERING",
    title: "Azure DevOps",
    subtitle: "CI/CD Platform",
    description:
      "CI/CD workflow focused on source control, build execution, artifact handling, release deployment, and post-deployment validation.",
    architecture:
      "Git → Build → Artifact → Release → Validation",
    implementation: [
      "Source-controlled deployment workflow",
      "Build and artifact validation",
      "Release deployment process",
      "Environment-based deployment checks",
      "Post-deployment application validation",
    ],
    validation: [
      "Build status verification",
      "Artifact validation",
      "Deployment status checks",
      "Application health checks",
      "Release documentation",
    ],
    stack: [
      "Azure DevOps",
      "Git",
      "YAML",
      "CI/CD",
      "PowerShell",
      "Release Management",
    ],
    github: "https://github.com/RafeekAhamed",
  },
];

function ProjectCard({ project }) {
  return (
    <article className="system-card overflow-hidden">
      {/* Header */}
      <div className="system-card-header">
        <span className="system-card-number">
          {project.number}
        </span>

        <span className="system-card-type">
          {project.category}
        </span>
      </div>

      {/* Main content */}
      <div className="p-6 md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <p className="micro-label micro-label-cyan">
              PROJECT / {project.number}
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-2 text-sm font-medium uppercase tracking-[0.12em] text-slate-500">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              {project.description}
            </p>

            {/* Architecture */}
            <div className="mt-8">
              <p className="micro-label mb-3">
                ARCHITECTURE
              </p>

              <div className="border border-white/[0.08] bg-white/[0.02] px-4 py-4 font-mono text-xs leading-6 text-cyan-300 md:text-sm">
                {project.architecture}
              </div>
            </div>

            {/* Stack */}
            <div className="mt-8">
              <p className="micro-label mb-3">
                TECHNOLOGY STACK
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="tech-chip"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="space-y-7">
            {/* Implementation */}
            <div>
              <p className="micro-label micro-label-cyan mb-4">
                IMPLEMENTATION
              </p>

              <ul className="space-y-3">
                {project.implementation.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Validation */}
            <div>
              <p className="micro-label micro-label-cyan mb-4">
                VALIDATION
              </p>

              <ul className="space-y-3">
                {project.validation.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-slate-400"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-white/[0.07] pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="micro-label">
                REPOSITORY
              </p>

              <p className="mt-2 break-all font-mono text-xs text-slate-500">
                github.com/RafeekAhamed
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 border border-cyan-400/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/[0.06]"
            >
              View GitHub
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-shell py-24 md:py-32"
    >
      <div className="container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="section-label">
            05 / Projects
          </div>

          <div className="mt-6 max-w-6xl">
            <h2 className="editorial-title">
              Systems /
              <br />
              built to
              <br />
              <span className="cyan-text">operate.</span>
            </h2>
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
            Hands-on infrastructure, Kubernetes, and CI/CD projects
            demonstrating practical DevOps workflows from automation
            and deployment to validation and operations.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* Bottom status */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="micro-label">
            PROJECT STATUS
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Built / Tested / Documented
          </span>
        </div>
      </div>
    </section>
  );
}