import { useEffect, useRef } from "react";

function SectionReveal({ children, className = "" }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className={`section-reveal ${className}`}>
      {children}
    </div>
  );
}

export default SectionReveal;
