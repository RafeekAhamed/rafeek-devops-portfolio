import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import {
  Cloud,
  Container,
  Boxes,
  GitBranch,
  Server,
  Workflow,
} from "lucide-react";

function DevOpsVisual() {
  const visualRef = useRef(null);

  useGSAP(
    () => {
      const visual = visualRef.current;

      if (!visual) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) return;

      const core = visual.querySelector(".devops-core");
      const cards = visual.querySelectorAll(".devops-card");
      const outerOrbit = visual.querySelector(".devops-orbit-outer");
      const innerOrbit = visual.querySelector(".devops-orbit-inner");

      const handleMouseMove = (event) => {
        const rect = visual.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        const normalizedX = x / rect.width;
        const normalizedY = y / rect.height;

        gsap.to(core, {
          x: normalizedX * 18,
          y: normalizedY * 18,
          rotateY: normalizedX * 8,
          rotateX: normalizedY * -8,
          duration: 0.6,
          ease: "power2.out",
          overwrite: true,
        });

        gsap.to(cards, {
          x: normalizedX * 12,
          y: normalizedY * 12,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.02,
          overwrite: true,
        });
      };

      const handleMouseLeave = () => {
        gsap.to(core, {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });

        gsap.to(cards, {
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: true,
        });
      };

      visual.addEventListener("mousemove", handleMouseMove);
      visual.addEventListener("mouseleave", handleMouseLeave);

      gsap.to(outerOrbit, {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(innerOrbit, {
        rotation: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });

      return () => {
        visual.removeEventListener("mousemove", handleMouseMove);
        visual.removeEventListener("mouseleave", handleMouseLeave);

        gsap.killTweensOf(core);
        gsap.killTweensOf(cards);
        gsap.killTweensOf(outerOrbit);
        gsap.killTweensOf(innerOrbit);
      };
    },
    {
      scope: visualRef,
    }
  );

  return (
    <div
      ref={visualRef}
      aria-hidden="true"
      className="devops-visual relative mx-auto h-[470px] w-full max-w-[520px] [perspective:1200px]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 opacity-70 blur-2xl" />

      {/* Premium depth rings */}
      <div className="devops-depth-layer pointer-events-none absolute inset-0">
        <div className="depth-ring depth-ring-1" />
        <div className="depth-ring depth-ring-2" />
        <div className="depth-ring depth-ring-3" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(circle, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 20%, transparent 70%)",
        }}
      />

      {/* Orbit rings */}
      <div className="devops-orbit devops-orbit-outer pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      <div className="devops-orbit devops-orbit-inner pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10" />

      {/* Crosshair */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[250px] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[320px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      {/* Azure core */}
      <div className="devops-core premium-glass premium-glow absolute left-1/2 top-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 transform-gpu items-center justify-center rounded-3xl border border-cyan-400/30">
        <div className="text-center">
          <Cloud
            aria-hidden="true"
            className="mx-auto text-cyan-400"
            size={42}
            strokeWidth={1.7}
          />

          <p className="mt-3 text-sm font-bold text-white">
            Azure
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-500">
            Cloud Platform
          </p>
        </div>
      </div>

      {/* Git */}
      <div className="devops-card premium-card absolute left-4 top-14 z-30 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <GitBranch
              aria-hidden="true"
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              Git
            </p>

            <p className="text-[10px] text-slate-500">
              Version Control
            </p>
          </div>
        </div>
      </div>

      {/* Terraform */}
      <div className="devops-card premium-card absolute right-2 top-12 z-30 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <Workflow
              aria-hidden="true"
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              Terraform
            </p>

            <p className="text-[10px] text-slate-500">
              Infrastructure as Code
            </p>
          </div>
        </div>
      </div>

      {/* Docker */}
      <div className="devops-card premium-card absolute bottom-16 left-8 z-30 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <Container
              aria-hidden="true"
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              Docker
            </p>

            <p className="text-[10px] text-slate-500">
              Containers
            </p>
          </div>
        </div>
      </div>

      {/* Kubernetes */}
      <div className="devops-card premium-card absolute bottom-14 right-5 z-30 rounded-xl border border-slate-700/80 bg-slate-900/90 p-4 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <Boxes
              aria-hidden="true"
              size={18}
              className="text-cyan-400"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-white">
              Kubernetes
            </p>

            <p className="text-[10px] text-slate-500">
              Container Orchestration
            </p>
          </div>
        </div>
      </div>

      {/* AKS */}
      <div className="devops-card devops-card-centered premium-card absolute left-1/2 top-3 z-30 rounded-xl border border-cyan-400/20 bg-slate-900/90 px-4 py-3 shadow-lg backdrop-blur-md">
        <div className="flex items-center gap-3">
          <Server
            aria-hidden="true"
            size={18}
            className="text-cyan-400"
          />

          <div>
            <p className="text-xs font-semibold text-white">
              AKS
            </p>

            <p className="text-[10px] text-slate-500">
              Managed Kubernetes
            </p>
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="absolute bottom-3 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-full border border-slate-800 bg-slate-950/90 px-4 py-2 text-xs text-slate-400 backdrop-blur-md">
        Cloud • Containers • Automation
      </div>
    </div>
  );
}

export default DevOpsVisual;