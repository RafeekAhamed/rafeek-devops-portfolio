import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SectionReveal({
  children,
  className = "",
  y = 32,
  duration = 0.7,
}) {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      gsap.from(sectionRef.current, {
        y,
        autoAlpha: 0,
        duration,
        ease: "power2.out",
        clearProps: "transform,opacity,visibility",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          once: true,
        },
      });
    },
    {
      scope: sectionRef,
    }
  );

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}

export default SectionReveal;