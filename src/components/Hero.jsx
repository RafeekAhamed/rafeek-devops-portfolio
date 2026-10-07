import { ArrowUpRight } from "lucide-react";
import DevOpsVisual from "./DevOpsVisual";

const quickFacts = [
  {
    label: "EXPERIENCE",
    value: "1+ Year",
  },
  {
    label: "FOCUS",
    value: "Azure / DevOps",
  },
  {
    label: "PLATFORM",
    value: "Kubernetes",
  },
  {
    label: "STATUS",
    value: "Available",
  },
];

const stack = [
  "Azure",
  "Azure DevOps",
  "Kubernetes",
  "Docker",
  "Terraform",
  "CI/CD",
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[8%] top-[18%] h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-3xl" />

        <div className="absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-cyan-400/[0.025] blur-3xl" />
      </div>

      <div className="container">

        {/* ===================================================
            AVAILABILITY
            =================================================== */}

        <div className="flex items-center gap-3 pb-6 pt-24 md:pt-28">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
          </span>

          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Available for DevOps / Cloud Opportunities
          </span>
        </div>


        {/* ===================================================
            MAIN HERO
            =================================================== */}

        <div
          className="
            grid
            min-h-[calc(100vh-190px)]
            items-center
            gap-12
            lg:grid-cols-[1fr_0.95fr]
            lg:gap-8
            xl:grid-cols-[1fr_1fr]
            xl:gap-12
          "
        >

          {/* =================================================
              LEFT — HERO CONTENT
              ================================================= */}

          <div className="min-w-0">

            <div className="section-label">
              01 / Overview
            </div>

            <div className="mt-7">

              <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400">
                DevOps Engineer
              </p>

              <h1 className="editorial-title max-w-4xl">
                Building
                <br />
                reliable
                <br />
                cloud systems.
              </h1>

            </div>


            {/* Description */}

            <div className="mt-7 max-w-2xl">
              <p className="text-base leading-8 text-slate-400 md:text-lg">
                Azure-focused DevOps Engineer experienced in CI/CD release
                management, Kubernetes, Docker, Terraform, monitoring,
                troubleshooting, and production support.
              </p>
            </div>


            {/* =================================================
                TECHNOLOGY STACK
                ================================================= */}

            <div className="mt-6 flex max-w-2xl flex-wrap gap-2">
              {stack.map((item) => (
                <span
                  key={item}
                  className="tech-chip"
                >
                  {item}
                </span>
              ))}
            </div>


            {/* =================================================
                ACTIONS
                ================================================= */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">

              <a
                href="/Rafeek_Ahamed_DevOps_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  border
                  border-cyan-400/30
                  bg-cyan-400/[0.08]
                  px-6
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-cyan-300
                  transition
                  hover:border-cyan-400/60
                  hover:bg-cyan-400/[0.13]
                "
              >
                View Resume

                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>


              <a
                href="https://github.com/RafeekAhamed"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  border
                  border-white/10
                  bg-white/[0.025]
                  px-6
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-300
                  transition
                  hover:border-white/20
                  hover:bg-white/[0.05]
                "
              >
                GitHub

                <span className="font-mono text-[10px] text-slate-600">
                  GH
                </span>
              </a>


              <button
                type="button"
                onClick={scrollToProjects}
                className="
                  inline-flex
                  min-h-12
                  items-center
                  justify-center
                  gap-3
                  border
                  border-transparent
                  px-5
                  font-mono
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-slate-500
                  transition
                  hover:text-white
                "
              >
                Explore Projects

                <ArrowUpRight size={14} />
              </button>

            </div>

          </div>


          {/* =================================================
              RIGHT — DEVOPS VISUAL
              ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[500px]
              items-center
              justify-center
              lg:flex
              xl:min-h-[560px]
            "
          >
            <div className="relative w-full max-w-[620px]">
              <DevOpsVisual />
            </div>
          </div>

        </div>


        {/* ===================================================
            QUICK FACTS
            =================================================== */}

        <div className="border-y border-white/[0.07]">

          <div className="grid grid-cols-2 md:grid-cols-4">

            {quickFacts.map((item, index) => (
              <div
                key={item.label}
                className={`
                  min-h-[105px]
                  px-5
                  py-6
                  md:px-7
                  ${
                    index !== quickFacts.length - 1
                      ? "border-r border-white/[0.07]"
                      : ""
                  }
                  ${
                    index >= 2
                      ? "border-t border-white/[0.07] md:border-t-0"
                      : ""
                  }
                `}
              >

                <p className="micro-label">
                  {item.label}
                </p>

                <p className="mt-3 text-sm font-medium text-slate-200">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>


        {/* ===================================================
            BOTTOM METADATA
            =================================================== */}

        <div className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            Azure / Cloud Engineering / DevOps
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            India / Remote
          </span>

        </div>

      </div>
    </section>
  );
}