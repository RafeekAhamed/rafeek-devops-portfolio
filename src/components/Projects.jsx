const projects = [
  {
    number: "01",
    title: "Terraform + Docker Infrastructure Automation",
    category: "Infrastructure as Code",
    description:
      "Reusable Terraform modules for provisioning a multi-environment Docker infrastructure with Nginx, Flask backend, PostgreSQL, isolated networks, and environment-specific configuration.",
    technologies: [
      "Terraform",
      "Docker",
      "Nginx",
      "Flask",
      "PostgreSQL",
      "GitHub Actions",
    ],
    highlights: [
      "Reusable Terraform modules",
      "Separate Dev and Prod environments",
      "Docker networking and service discovery",
      "Terraform validation and CI automation",
    ],
    github: "https://github.com/RafeekAhamed/terraform-docker-infrastructure",
  },
  {
    number: "02",
    title: "Kubernetes Microservices Platform",
    category: "Kubernetes & Container Orchestration",
    description:
      "Containerized Flask microservices deployed on Kubernetes using Deployments, Services, ConfigMaps, Secrets, health probes, RBAC, rolling updates, HPA, and Helm.",
    technologies: [
      "Kubernetes",
      "Docker",
      "Helm",
      "YAML",
      "GitHub Actions",
      "Linux",
    ],
    highlights: [
      "Helm-based application deployment",
      "Kubernetes Services and Ingress",
      "ConfigMaps and Secrets",
      "Health probes and rolling updates",
      "Horizontal Pod Autoscaling",
    ],
    github: "https://github.com/RafeekAhamed/kubernetes-microservices",
  },
  {
    number: "03",
    title: "Azure DevOps CI/CD Platform",
    category: "Cloud & CI/CD",
    description:
      "Azure-focused DevOps project demonstrating Git-based development, YAML CI/CD pipelines, Docker containerization, Kubernetes deployment manifests, application testing, and AKS-oriented workflows.",
    technologies: [
      "Azure",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "Git",
      "YAML",
    ],
    highlights: [
      "YAML-based CI/CD pipeline",
      "Docker image workflow",
      "Kubernetes deployment manifests",
      "Automated application testing",
    ],
    github: "https://github.com/RafeekAhamed/project1-azure-devops",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#030611] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Projects
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Infrastructure built to demonstrate real DevOps workflows.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Hands-on projects covering infrastructure automation, container
            orchestration, CI/CD, cloud engineering, and production-oriented
            deployment practices.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-slate-900/60 hover:shadow-[0_20px_60px_rgba(8,145,178,0.08)] sm:p-7"
            >
              {/* Top accent */}
              <div className="absolute left-0 top-0 h-px w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {project.number}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  {project.category}
                </span>
              </div>

              <h3 className="mt-7 text-xl font-bold leading-8 text-white sm:text-2xl">
                {project.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1.5 text-[11px] font-medium text-slate-400 transition-colors duration-300 group-hover:border-slate-700 group-hover:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-7 border-t border-slate-800/80 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Highlights
                </p>

                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex gap-3 text-sm leading-6 text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GitHub */}
              <div className="mt-auto pt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-cyan-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-950 text-xs font-bold transition-colors duration-300 group-hover:border-cyan-400/30">
                    GH
                  </span>

                  <span>View on GitHub</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://github.com/RafeekAhamed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/40 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <span className="text-xs font-bold">GH</span>
            Explore all projects
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;