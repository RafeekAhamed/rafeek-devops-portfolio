const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RafeekAhamed",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafeek-ahamed-devops",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/rafeek-ahamed-m/",
  },
  {
    label: "Email",
    href: "mailto:rafeekahamedm@gmail.com",
  },
  {
    label: "Phone",
    href: "tel:+917540074392",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-slate-800/60 bg-[#030611] px-6 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white transition-colors hover:text-cyan-300"
            >
              Rafeek Ahamed M
            </a>

            <p className="mt-2 text-sm text-slate-500">
              DevOps Engineer{" "}
              <span className="text-slate-700">|</span>{" "}
              Azure Cloud Engineer
            </p>

            <p className="mt-2 text-xs text-slate-600">
              Azure • Kubernetes • Docker • Terraform • CI/CD
            </p>
          </div>

          {/* Footer links */}
          <div className="flex max-w-xl flex-wrap items-center gap-3">
            {footerLinks.map((link) => {
              const isEmail = link.label === "Email";
              const isPhone = link.label === "Phone";

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isEmail || isPhone ? undefined : "_blank"}
                  rel={
                    isEmail || isPhone
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="rounded-lg border border-slate-800 px-4 py-2 text-xs font-medium text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-slate-800/70" />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-slate-600">
            © {currentYear} Rafeek Ahamed M. All rights reserved.
          </p>

          {/* Status + Back to top */}
          <div className="flex flex-wrap items-center gap-5">
            {/* Availability */}
            <div className="flex items-center gap-2 text-slate-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400/20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span>Available for opportunities</span>
            </div>

            {/* Back to top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-slate-500 transition-colors hover:text-cyan-300"
              aria-label="Back to top"
            >
              <span>Back to top</span>

              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;