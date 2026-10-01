import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Download, FileText } from "lucide-react";

import DevOpsVisual from "./DevOpsVisual";

const technologies = [
  "Azure",
  "Azure DevOps",
  "AKS",
  "Docker",
  "Kubernetes",
  "Terraform",
];

function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const heroElements = heroRef.current?.querySelectorAll(
        ".hero-status, .hero-role, .hero-title, .hero-subtitle, .hero-description, .hero-tech, .hero-buttons"
      );

      if (!heroElements?.length) {
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(heroElements, {
          clearProps: "all",
        });

        return;
      }

      gsap.fromTo(
        heroElements,
        {
          y: 24,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform,opacity,visibility",
        }
      );
    },
    {
      scope: heroRef,
    }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-12 lg:pt-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(148,163,184,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl">
          <div className="hero-status inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 text-xs font-medium text-cyan-300">
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            Available for opportunities
          </div>

          <p className="hero-role mt-7 text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-base">
            DevOps Engineer
          </p>

          <h1
            id="hero-title"
            className="hero-title mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Azure Cloud
            <span className="block text-cyan-400">
              Engineer
            </span>
          </h1>

          <p className="hero-subtitle mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            Building reliable cloud infrastructure, automated delivery
            pipelines, and containerized platforms.
          </p>

          <p className="hero-description mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            DevOps Engineer focused on Azure, Azure DevOps, Kubernetes,
            Docker, Terraform, CI/CD, and cloud infrastructure. I build
            practical deployment workflows and infrastructure automation
            with a strong focus on reliability and operational efficiency.
          </p>

          {/* Technologies */}
          <div
            className="hero-tech mt-8 flex flex-wrap gap-2.5"
            aria-label="Core technologies"
          >
            {technologies.map((technology) => (
              <span
                key={technology}
                className="hero-tech-item rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Resume Actions */}
          <div className="hero-buttons mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* View Resume */}
            <a
              href="/Rafeek_Ahamed_DevOps_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Rafeek Ahamed DevOps Engineer resume"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-5 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-cyan-400/10 sm:w-auto"
            >
              <FileText
                aria-hidden="true"
                size={17}
              />
              View Resume
            </a>

            {/* Download PDF */}
            <a
              href="/Rafeek_Ahamed_DevOps_Resume.pdf"
              download="Rafeek_Ahamed_DevOps_Resume.pdf"
              aria-label="Download Rafeek Ahamed DevOps Engineer PDF resume"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-5 py-3.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:text-white sm:w-auto"
            >
              <Download
                aria-hidden="true"
                size={17}
              />
              PDF
            </a>

            {/* Download DOCX */}
            <a
              href="/Rafeek_Ahamed_DevOps_Resume.docx"
              download="Rafeek_Ahamed_DevOps_Resume.docx"
              aria-label="Download Rafeek Ahamed DevOps Engineer Word resume"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/70 px-5 py-3.5 text-sm font-semibold text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:text-white sm:w-auto"
            >
              <Download
                aria-hidden="true"
                size={17}
              />
              DOCX
            </a>
          </div>
        </div>

        {/* Desktop Visual */}
        <div className="hero-visual relative z-10 hidden lg:block">
          <DevOpsVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;