import { useEffect, useRef } from "react";
import gsap from "gsap";

const pipeline = [
  {
    id: "01",
    title: "SOURCE",
    value: "Git",
    detail: "Version Control",
  },
  {
    id: "02",
    title: "BUILD",
    value: "CI/CD",
    detail: "Azure DevOps",
  },
  {
    id: "03",
    title: "CONTAINER",
    value: "Docker",
    detail: "Image Build",
  },
  {
    id: "04",
    title: "PLATFORM",
    value: "Kubernetes",
    detail: "Workloads",
  },
  {
    id: "05",
    title: "MONITOR",
    value: "Azure Monitor",
    detail: "Operations",
  },
];

export default function DevOpsVisual() {
  const rootRef = useRef(null);
  const lineRef = useRef(null);
  const nodeRefs = useRef([]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      /* ---------------------------------------------
         Pipeline entrance
         --------------------------------------------- */

      gsap.fromTo(
        lineRef.current,
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.out",
          delay: 0.2,
        }
      );

      gsap.fromTo(
        nodeRefs.current,
        {
          opacity: 0,
          y: 14,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.3,
        }
      );

      /* ---------------------------------------------
         Moving pipeline signal
         --------------------------------------------- */

      gsap.to(".pipeline-pulse", {
        xPercent: 100,
        duration: 2.4,
        repeat: -1,
        ease: "none",
      });

      /* ---------------------------------------------
         Ambient orbit
         --------------------------------------------- */

      gsap.to(".visual-orbit", {
        rotate: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".visual-orbit-inner", {
        rotate: -360,
        duration: 22,
        repeat: -1,
        ease: "none",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MOUSE PARALLAX
     ===================================================== */

  const handleMouseMove = (event) => {
    const root = rootRef.current;

    if (!root) return;

    if (
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches
    ) {
      return;
    }

    const rect = root.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    const x =
      ((event.clientX - rect.left) / rect.width - 0.5) * 8;

    const y =
      ((event.clientY - rect.top) / rect.height - 0.5) * 8;

    gsap.to(".pipeline-core", {
      x,
      y,
      duration: 0.55,
      ease: "power2.out",
      overwrite: true,
    });

    gsap.to(".pipeline-layer", {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.7,
      ease: "power2.out",
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".pipeline-core", {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "power3.out",
    });

    gsap.to(".pipeline-layer", {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={rootRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        flex
        min-h-[460px]
        w-full
        items-center
        justify-center
        overflow-visible
        lg:min-h-[500px]
        xl:min-h-[540px]
      "
      aria-label="DevOps delivery pipeline visualization"
    >

      {/* ===================================================
          AMBIENT BACKGROUND
          =================================================== */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[360px]
            w-[360px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-cyan-400/[0.025]
            blur-3xl
            lg:h-[400px]
            lg:w-[400px]
          "
        />

        <div
          className="
            visual-orbit
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-cyan-400/[0.06]
            lg:h-[390px]
            lg:w-[390px]
          "
        />

        <div
          className="
            visual-orbit-inner
            absolute
            left-1/2
            top-1/2
            h-[270px]
            w-[270px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-dashed
            border-white/[0.06]
            lg:h-[300px]
            lg:w-[300px]
          "
        />

      </div>


      {/* ===================================================
          MAIN VISUAL
          =================================================== */}

      <div
        className="
          pipeline-core
          relative
          z-10
          w-full
          max-w-[560px]
          xl:max-w-[590px]
        "
      >

        {/* Top system label */}

        <div className="mb-4 flex items-center justify-between px-1">

          <span
            className="
              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-slate-600
            "
          >
            DELIVERY PIPELINE
          </span>

          <span
            className="
              flex
              items-center
              gap-2
              font-mono
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.18em]
              text-cyan-400/70
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            SYSTEM ONLINE
          </span>

        </div>


        {/* =================================================
            PIPELINE CARD
            ================================================= */}

        <div className="system-card relative overflow-hidden">

          <div className="system-card-header">

            <span className="system-card-number">
              DEVOPS / 01
            </span>

            <span className="system-card-type">
              SOURCE → PRODUCTION
            </span>

          </div>


          <div className="pipeline-layer p-4 md:p-6">

            {/* Pipeline */}

            <div className="relative">

              {/* Base line */}

              <div
                className="
                  absolute
                  left-[7%]
                  right-[7%]
                  top-[27px]
                  hidden
                  h-px
                  bg-white/[0.08]
                  md:block
                "
              />

              {/* Animated line */}

              <div
                ref={lineRef}
                className="
                  absolute
                  left-[7%]
                  right-[7%]
                  top-[27px]
                  hidden
                  h-px
                  bg-gradient-to-r
                  from-cyan-400/60
                  via-cyan-400/25
                  to-transparent
                  md:block
                "
              />

              {/* Moving signal */}

              <div
                className="
                  absolute
                  left-[7%]
                  top-[24px]
                  hidden
                  h-[7px]
                  w-[18%]
                  overflow-hidden
                  md:block
                "
              >
                <div
                  className="
                    pipeline-pulse
                    h-full
                    w-full
                    -translate-x-full
                    bg-gradient-to-r
                    from-transparent
                    via-cyan-300
                    to-transparent
                    opacity-60
                  "
                />
              </div>


              {/* Pipeline nodes */}

              <div className="grid grid-cols-2 gap-2.5 md:grid-cols-5 md:gap-2">

                {pipeline.map((item, index) => (
                  <div
                    key={item.id}
                    ref={(element) => {
                      nodeRefs.current[index] = element;
                    }}
                    className={`relative ${
                      index === pipeline.length - 1
                        ? "col-span-2 md:col-span-1"
                        : ""
                    }`}
                  >

                    <div
                      className="
                        relative
                        z-10
                        border
                        border-white/[0.08]
                        bg-[#091113]/90
                        p-2.5
                        backdrop-blur-md
                        transition
                        hover:border-cyan-400/25
                        md:p-3
                      "
                    >

                      <div className="mb-3 flex items-center justify-between">

                        <span
                          className="
                            font-mono
                            text-[8px]
                            font-bold
                            tracking-[0.14em]
                            text-cyan-400/70
                          "
                        >
                          {item.id}
                        </span>

                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-cyan-400/70
                            shadow-[0_0_10px_rgba(34,211,238,0.45)]
                          "
                        />

                      </div>

                      <p
                        className="
                          font-mono
                          text-[8px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-slate-600
                        "
                      >
                        {item.title}
                      </p>

                      <p className="mt-2 text-[13px] font-semibold text-slate-200 md:text-sm">
                        {item.value}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-slate-600">
                        {item.detail}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>


            {/* =================================================
                PIPELINE STATUS
                ================================================= */}

            <div
              className="
                mt-6
                grid
                gap-3
                border-t
                border-white/[0.07]
                pt-4
                sm:grid-cols-3
              "
            >

              <div>
                <p className="micro-label">
                  DEPLOYMENT
                </p>

                <p className="mt-2 font-mono text-[10px] text-slate-400">
                  AUTOMATED
                </p>
              </div>

              <div>
                <p className="micro-label">
                  VALIDATION
                </p>

                <p className="mt-2 font-mono text-[10px] text-slate-400">
                  CONTINUOUS
                </p>
              </div>

              <div>
                <p className="micro-label">
                  OPERATIONS
                </p>

                <p className="mt-2 font-mono text-[10px] text-cyan-400/80">
                  MONITORED
                </p>
              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            BOTTOM ARCHITECTURE INDICATOR
            =================================================== */}

        <div className="mt-4 flex items-center justify-between px-1">

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-slate-700
            "
          >
            AZURE / CONTAINERS / CI-CD
          </span>

          <span
            className="
              font-mono
              text-[8px]
              uppercase
              tracking-[0.18em]
              text-slate-700
            "
          >
            v1.0 / ACTIVE
          </span>

        </div>

      </div>

    </div>
  );
}