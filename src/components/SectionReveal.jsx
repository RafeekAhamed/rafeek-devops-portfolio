import { useEffect, useRef } from "react";

function SectionReveal({ children, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Keep content visible when reduced motion is enabled
    // or IntersectionObserver is unavailable.
    if (
      prefersReducedMotion ||
      !("IntersectionObserver" in window)
    ) {
      element.classList.add("is-visible");
      return undefined;
    }

    let observer;

    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(element);
          }
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.01,
        }
      );

      observer.observe(element);
    } catch {
      // Fail open: never leave content hidden if observation fails.
      element.classList.add("is-visible");
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`section-reveal ${className}`.trim()}
    >
      {children}
    </div>
  );
}

export default SectionReveal;