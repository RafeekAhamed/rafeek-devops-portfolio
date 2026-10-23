import { ArrowUpRight, Mail } from "lucide-react";

const RESUME_PATH = "/Rafeek%20Ahamed%20M.pdf";

const quickFacts = [
  { label: "EXPERIENCE", value: "1+ Year" },
  { label: "SPECIALIZATION", value: "Azure / DevOps" },
  { label: "PLATFORM", value: "Kubernetes" },
  { label: "AVAILABILITY", value: "Immediate Joiner" },
];

const stack = [
  "Azure",
  "Azure DevOps",
  "CI/CD",
  "Kubernetes",
  "Docker",
  "Terraform",
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />
        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-cyan-400/[0.025] blur-3xl" />
      </div>

      <div className="container">
        <div className="flex items-center gap-3 pb-6 pt-24 md:pt-28">
          <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Immediate Joiner / Open to DevOps &amp; Cloud Roles
          </span>
        </div>

        <div className="grid min-h-[calc(100vh-190px)] items-center gap-12 pb-12 lg:grid-cols-[1fr_0.8fr] lg:gap-12 xl:grid-cols-[1fr_0.75fr] xl:gap-16">
          <div className="min-w-0">
            <div className="section-label">01 / Overview</div>

            <div className="mt-7">
              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                DevOps Engineer / Azure Cloud Engineer
              </p>

              <h1 id="hero-heading" className="editorial-title max-w-4xl">
                Building
                <br />
                reliable
                <br />
                <span className="cyan-text">cloud systems.</span>
              </h1>
            </div>

            <div className="mt-7 max-w-2xl">
              <p className="text-base leading-8 text-slate-400 md:text-lg">
                Azure-focused DevOps Engineer with hands-on experience in
                release management, CI/CD deployment validation, Kubernetes
                monitoring, and cloud operations. Building practical
                solutions with Azure DevOps, Docker, Terraform, and
                infrastructure automation.
              </p>
            </div>

            <div
              className="mt-6 flex max-w-2xl flex-wrap gap-2"
              aria-label="Core technologies"
            >
              {stack.map((item) => (
                <span key={item} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume PDF in a new tab"
                className="group inline-flex min-h-12 items-center justify-center gap-3 border border-cyan-400/30 bg-cyan-400/[0.08] px-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 transition hover:border-cyan-400/60 hover:bg-cyan-400/[0.13] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                View Resume
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="https://github.com/RafeekAhamed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile in a new tab"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/10 bg-white/[0.025] px-6 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                GitHub
                <span
                  aria-hidden="true"
                  className="font-mono text-[10px] text-slate-600"
                >
                  GH
                </span>
              </a>

              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-transparent px-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                Explore Projects
                <ArrowUpRight size={14} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-transparent px-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                <Mail size={14} aria-hidden="true" />
                Contact Me
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-3xl bg-cyan-400/[0.07] blur-3xl"
            />

            <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900 shadow-2xl shadow-cyan-950/30">
              <img
                src="/profile.jpg"
                alt="Rafeek Ahamed M, DevOps Engineer and Azure Cloud Engineer"
                width={1122}
                height={1402}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050817] via-[#050817]/75 to-transparent p-6 pt-24">
                <p className="text-xl font-semibold tracking-tight text-white">
                  Rafeek Ahamed M
                </p>

                <p className="mt-2 text-sm text-cyan-300">
                  DevOps Engineer | Azure Cloud Engineer
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="relative flex h-2 w-2"
                  >
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                    <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-300">
                    Immediate Joiner
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-500">
                Cloud Engineering
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/70">
                Automation · Reliability
              </span>
            </div>
          </div>
        </div>

        <div className="border-y border-white/[0.07]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {quickFacts.map((item, index) => (
              <div
                key={item.label}
                className={`min-h-[105px] px-5 py-6 md:px-7 ${
                  index !== quickFacts.length - 1
                    ? "border-r border-white/[0.07]"
                    : ""
                } ${
                  index >= 2
                    ? "border-t border-white/[0.07] md:border-t-0"
                    : ""
                }`}
              >
                <p className="micro-label">{item.label}</p>

                <p className="mt-3 text-sm font-medium text-slate-200">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            Azure / Cloud Engineering / DevOps
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            India / Open to Relocation
          </span>
        </div>
      </div>
    </section>
  );
}