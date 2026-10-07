const toolkit = [
  {
    category: "CLOUD",
    items: ["Microsoft Azure", "Azure VMs", "Azure Storage", "Azure Networking", "AKS"],
  },
  {
    category: "DEVOPS",
    items: ["Azure DevOps", "CI/CD", "Git", "GitHub", "GitHub Actions", "YAML"],
  },
  {
    category: "CONTAINERS",
    items: ["Docker", "Kubernetes", "Helm", "Ingress", "ConfigMaps", "Secrets"],
  },
  {
    category: "INFRASTRUCTURE",
    items: ["Terraform", "Terraform Modules", "ARM Templates", "PowerShell"],
  },
  {
    category: "SECURITY",
    items: ["Entra ID", "RBAC", "NSGs", "VNets", "Private Endpoints"],
  },
  {
    category: "OPERATIONS",
    items: ["Azure Monitor", "kubectl", "Production Support", "Release Management"],
  },
];

export default function EngineeringToolkit() {
  return (
    <section className="section-shell py-20 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col gap-4 border-b border-white/[0.07] pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-label">Engineering Toolkit</div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Tools I use to build,
              <span className="cyan-text"> deploy & operate.</span>
            </h2>
          </div>

          <span className="technical-label">
            CLOUD / DEVOPS / PLATFORM
          </span>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/[0.08] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
          {toolkit.map((group) => (
            <article
              key={group.category}
              className="bg-[#080c0e] p-5 transition-colors duration-300 hover:bg-[#0b1113] md:p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="micro-label micro-label-cyan">
                  {group.category}
                </span>

                <span className="font-mono text-[9px] tracking-[0.16em] text-slate-600">
                  {String(group.items.length).padStart(2, "0")} TOOLS
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span className="micro-label">
            PRACTICAL DEVOPS STACK
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600">
            Azure → CI/CD → Containers → Infrastructure → Operations
          </span>
        </div>
      </div>
    </section>
  );
}