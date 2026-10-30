import SectionTitle from "./SectionTitle";

const projects = [
  {
    number: "01",
    category: "INFRASTRUCTURE / AUTOMATION",
    title: "Terraform + Docker",
    subtitle: "Infrastructure Automation",
    description:
      "A modular infrastructure automation project using Terraform and Docker to configure isolated development and production environments.",
    architecture: [
      "Terraform",
      "Network",
      "Nginx",
      "Flask",
      "PostgreSQL",
    ],
    implementation: [
      "Reusable Terraform modules for infrastructure components",
      "Separate development and production environment configurations",
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
      "HCL",
      "Docker",
      "Python",
      "Flask",
      "PostgreSQL",
      "Nginx",
      "GitHub Actions",
    ],
    github:
      "https://github.com/RafeekAhamed/terraform-docker-infrastructure",
    linkLabel: "View Repository",
  },
  {
    number: "02",
    category: "CONTAINERS / ORCHESTRATION",
    title: "Kubernetes",
    subtitle: "Microservices Platform",
    description:
      "A containerized microservices platform using Kubernetes for service discovery, ingress routing, configuration management, health checks, Helm deployments, and autoscaling.",
    architecture: [
      "Ingress",
      "Services",
      "Backend",
      "PostgreSQL",
      "HPA",
    ],
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
      "Service connectivity checks",
      "Application health validation",
    ],
    stack: [
      "Kubernetes",
      "Docker",
      "Helm",
      "YAML",
      "PostgreSQL",
      "GitHub Actions",
      "kubectl",
    ],
    github:
      "https://github.com/RafeekAhamed/kubernetes-microservices",
    linkLabel: "View Repository",
  },
  {
    number: "03",
    category: "CI/CD / RELEASE ENGINEERING",
    title: "Azure DevOps",
    subtitle: "CI/CD & Release Workflow",
    description:
      "A CI/CD workflow showcasing source control, build execution, artifact handling, environment-based release deployment, and post-deployment validation.",
    architecture: [
      "Git",
      "Build",
      "Artifact",
      "Release",
      "Validation",
    ],
    implementation: [
      "Source-controlled deployment workflows",
      "Build execution and artifact validation",
      "Release deployment workflow",
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
    linkLabel: "Explore GitHub Profile",
  },
];

function ArchitectureFlow({ items, projectTitle }) {
  return (
    <ol
      className="flex flex-wrap items-center gap-2 border border-white/[0.08] bg-white/[0.02] px-4 py-4"
      aria-label={`${projectTitle} simplified architecture flow`}
    >
      {items.map((item, index) => (
        <li
          key={item}
          className="flex items-center gap-2"
        >
          <span className="font-mono text-xs text-cyan-300 md:text-sm">
            {item}
          </span>

          {index !== items.length - 1 && (
            <span
              aria-hidden="true"
              className="text-slate-600"
            >
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function ProjectCard({ project }) {
  const isRepository =
    project.github.includes("/terraform-docker-infrastructure") ||
    project.github.includes("/kubernetes-microservices");

  return (
    <article
      className="system-card overflow-hidden"
      aria-labelledby={`project-${project.number}-title`}
    >
      <div className="system-card-header">
        <span className="system-card-number">
          {project.number}
        </span>

        <span className="system-card-type">
          {project.category}
        </span>
      </div>

      <div className="p-5 md:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="micro-label micro-label-cyan">
              PROJECT / {project.number}
            </p>

            <h3
              id={`project-${project.number}-title`}
              className="mt-4 text-2xl font-semibold tracking-tight text-white md:text-4xl"
            >
              {project.title}
            </h3>

            <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-slate-500 md:text-sm">
              {project.subtitle}
            </p>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 md:text-base">
              {project.description}
            </p>

            <div className="mt-8">
              <p className="micro-label mb-3">
                ARCHITECTURE
              </p>

              <ArchitectureFlow
                items={project.architecture}
                projectTitle={project.title}
              />
            </div>

            <div className="mt-8">
              <p className="micro-label mb-3">
                TECHNOLOGY STACK
              </p>

              <ul
                className="flex flex-wrap gap-2"
                aria-label={`${project.title} technology stack`}
              >
                {project.stack.map((technology) => (
                  <li
                    key={technology}
                    className="tech-chip"
                  >
                    {technology}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-8">
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
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

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
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SOURCE CODE */}
        <div className="mt-10 border-t border-white/[0.07] pt-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="min-w-0">
              <p className="micro-label">
                {isRepository ? "SOURCE CODE" : "GITHUB PROFILE"}
              </p>

              <p className="mt-2 break-all font-mono text-xs text-slate-500">
                {project.github.replace("https://", "")}
              </p>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
              className="inline-flex w-fit shrink-0 items-center gap-3 border border-cyan-400/30 px-4 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-300 transition-colors hover:border-cyan-300 hover:bg-cyan-400/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {project.linkLabel}
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
      aria-labelledby="projects-heading"
    >
      <div className="container">
        <SectionTitle
          id="projects-heading"
          eyebrow="05 / Selected Projects"
          title="Systems built to"
          highlight="operate."
          description="Hands-on projects covering infrastructure automation, Kubernetes orchestration, CI/CD workflows, deployment validation, and release engineering practices."
          align="left"
          className="mb-12 md:mb-16"
        />

        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              project={project}
            />
          ))}
        </div>

        {/* GITHUB PORTFOLIO */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <span className="micro-label">
            PROJECT PORTFOLIO
          </span>

          <a
            href="https://github.com/RafeekAhamed"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Explore all GitHub repositories"
            className="inline-flex w-fit items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Explore GitHub Repositories
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}