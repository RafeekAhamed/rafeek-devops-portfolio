import {
  Cloud,
  Container,
  Boxes,
  GitBranch,
  Server,
  Workflow,
} from "lucide-react";

function DevOpsVisual() {
  return (
    <div
      aria-hidden="true"
      className="devops-visual relative mx-auto h-[470px] w-full max-w-[500px] perspective-[1000px]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 opacity-70" />

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle, black 20%, transparent 70%)",
        }}
      />

      <div className="devops-orbit devops-orbit-outer pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />
      <div className="devops-orbit devops-orbit-inner pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[320px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <div className="devops-core absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl border border-cyan-400/30 bg-slate-900/95 shadow-[0_0_50px_rgba(34,211,238,0.10)]">
        <div className="text-center">
          <Cloud aria-hidden="true" className="mx-auto text-cyan-400" size={42} strokeWidth={1.7} />
          <p className="mt-3 text-sm font-bold text-white">Azure</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">Cloud Platform</p>
        </div>
      </div>

      <div className="devops-card absolute left-4 top-14 z-30 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"><GitBranch aria-hidden="true" size={18} className="text-cyan-400" /></div>
          <div><p className="text-xs font-semibold text-white">Git</p><p className="text-[10px] text-slate-500">Version Control</p></div>
        </div>
      </div>

      <div className="devops-card absolute right-2 top-12 z-30 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"><Workflow aria-hidden="true" size={18} className="text-cyan-400" /></div>
          <div><p className="text-xs font-semibold text-white">Terraform</p><p className="text-[10px] text-slate-500">Infrastructure as Code</p></div>
        </div>
      </div>

      <div className="devops-card absolute bottom-16 left-8 z-30 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"><Container aria-hidden="true" size={18} className="text-cyan-400" /></div>
          <div><p className="text-xs font-semibold text-white">Docker</p><p className="text-[10px] text-slate-500">Containers</p></div>
        </div>
      </div>

      <div className="devops-card absolute bottom-14 right-5 z-30 rounded-xl border border-slate-700 bg-slate-900 p-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800"><Boxes aria-hidden="true" size={18} className="text-cyan-400" /></div>
          <div><p className="text-xs font-semibold text-white">Kubernetes</p><p className="text-[10px] text-slate-500">Container Orchestration</p></div>
        </div>
      </div>

      <div className="devops-card devops-card-centered absolute left-1/2 top-3 z-30 rounded-xl border border-cyan-400/20 bg-slate-900 px-4 py-3 shadow-lg">
        <div className="flex items-center gap-3">
          <Server aria-hidden="true" size={18} className="text-cyan-400" />
          <div><p className="text-xs font-semibold text-white">AKS</p><p className="text-[10px] text-slate-500">Managed Kubernetes</p></div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-950 px-4 py-2 text-xs text-slate-400">
        Cloud • Containers • Automation
      </div>
    </div>
  );
}

export default DevOpsVisual;
