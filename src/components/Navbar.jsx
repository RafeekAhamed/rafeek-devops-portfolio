import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", id: "home", number: "01" },
  { label: "About", id: "about", number: "02" },
  { label: "Skills", id: "skills", number: "03" },
  { label: "Experience", id: "experience", number: "04" },
  { label: "Projects", id: "projects", number: "05" },
  { label: "Certifications", id: "certifications", number: "06" },
  { label: "Education", id: "education", number: "07" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 140;

      let current = "home";

      sections.forEach((section) => {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      });

      setActive(current);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/[0.09] bg-[#050708]/90 shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
            : "border-white/[0.05] bg-[#050708]/70"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-[min(100%-28px,1280px)] items-center justify-between">
          {/* Brand */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-3 text-left"
            aria-label="Go to homepage"
          >
            <span className="flex h-9 w-9 items-center justify-center border border-cyan-400/25 bg-cyan-400/[0.06] font-mono text-[11px] font-bold text-cyan-300 transition group-hover:border-cyan-400/50 group-hover:bg-cyan-400/[0.1]">
              RA
            </span>

            <span className="hidden sm:block">
              <span className="block text-xs font-semibold tracking-[0.08em] text-slate-200">
                RAFEEK AHAMED
              </span>

              <span className="mt-0.5 block font-mono text-[8px] uppercase tracking-[0.16em] text-slate-600">
                DEVOPS / CLOUD ENGINEERING
              </span>
            </span>
          </button>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center gap-2 px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.12em] transition ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-500 hover:text-slate-200"
                  }`}
                >
                  <span
                    className={`text-[8px] transition ${
                      isActive
                        ? "text-cyan-400/80"
                        : "text-slate-700 group-hover:text-slate-500"
                    }`}
                  >
                    {item.number}
                  </span>

                  {item.label}

                  <span
                    className={`absolute bottom-0 left-3 right-3 h-px origin-left bg-cyan-400 transition-transform duration-300 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <button
            type="button"
            onClick={scrollToContact}
            className="hidden min-h-10 items-center gap-2 border border-cyan-400/25 bg-cyan-400/[0.06] px-4 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.1] md:flex"
          >
            Contact
            <ArrowUpRight size={13} />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center border border-white/[0.08] bg-white/[0.025] text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-300 lg:hidden"
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#050708]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-auto flex h-full w-[min(100%-28px,1280px)] flex-col pt-28">
          <div className="mb-8 flex items-center justify-between border-b border-white/[0.07] pb-5">
            <span className="micro-label">
              NAVIGATION / SYSTEM
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-400/60">
              {active}
            </span>
          </div>

          <nav
            aria-label="Mobile navigation"
            className="flex flex-col"
          >
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center justify-between border-b border-white/[0.06] py-5 text-left transition ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      className={`font-mono text-[9px] ${
                        isActive
                          ? "text-cyan-400"
                          : "text-slate-700"
                      }`}
                    >
                      {item.number}
                    </span>

                    <span className="text-lg font-medium tracking-tight">
                      {item.label}
                    </span>
                  </span>

                  <ArrowUpRight
                    size={16}
                    className={`transition-transform ${
                      isActive
                        ? "translate-x-0 text-cyan-400"
                        : "-translate-x-1 text-slate-700 group-hover:translate-x-0 group-hover:text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={scrollToContact}
            className="mt-8 flex min-h-12 items-center justify-center gap-3 border border-cyan-400/25 bg-cyan-400/[0.06] font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-300 transition hover:border-cyan-400/50 hover:bg-cyan-400/[0.1]"
          >
            Start a conversation
            <ArrowUpRight size={14} />
          </button>

          <div className="mt-auto border-t border-white/[0.07] py-6">
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-700">
              Azure / DevOps / Kubernetes / CI-CD
            </p>
          </div>
        </div>
      </div>
    </>
  );
}