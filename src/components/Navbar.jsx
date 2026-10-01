import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].id);
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0.05, 0.2, 0.4],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);

    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary navigation"
        className="border-b border-slate-800/50 bg-slate-950/75 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Brand */}
          <a
            href="#home"
            onClick={() => handleNavClick("#home")}
            className="group inline-flex items-center gap-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950"
            aria-label="Rafeek Ahamed M - Home"
          >
            <span
              aria-hidden="true"
              className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
            >
              RA
            </span>

            <span className="hidden sm:block">
              <span className="block text-sm font-bold tracking-wide text-white">
                Rafeek Ahamed M
              </span>

              <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                DevOps Engineer
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative rounded-lg px-3 py-2.5 text-xs font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {item.label}

                  <span
                    aria-hidden="true"
                    className={`absolute bottom-0 left-1/2 h-px -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-70"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/70 text-slate-300 transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 lg:hidden"
          >
            {isOpen ? (
              <X size={20} aria-hidden="true" />
            ) : (
              <Menu size={20} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`border-t border-slate-800/60 bg-slate-950/95 transition-all duration-300 lg:hidden ${
            isOpen
              ? "max-h-[calc(100vh-5rem)] opacity-100"
              : "pointer-events-none max-h-0 overflow-hidden opacity-0"
          }`}
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto max-w-7xl px-5 py-4 sm:px-8"
          >
            <div className="flex max-h-[calc(100vh-7rem)] flex-col overflow-y-auto">
              {navItems.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    tabIndex={isOpen ? 0 : -1}
                    aria-current={
                      isActive ? "location" : undefined
                    }
                    className={`rounded-xl border-b border-slate-800/60 px-4 py-4 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-inset ${
                      isActive
                        ? "bg-cyan-400/5 text-cyan-300"
                        : "text-slate-300 hover:bg-slate-900 hover:text-cyan-300"
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
                        />
                      )}
                    </span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;