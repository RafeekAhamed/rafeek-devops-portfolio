const contactLinks = [
  {
    label: "Email",
    value: "rafeekahamedm@gmail.com",
    href: "mailto:rafeekahamedm@gmail.com",
    description: "For opportunities and professional inquiries",
  },
  {
    label: "Phone",
    value: "+91 7540074392",
    href: "tel:+917540074392",
    description: "Available for professional calls",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rafeek-ahamed-devops",
    href: "https://www.linkedin.com/in/rafeek-ahamed-devops",
    description: "Connect with me professionally",
  },
  {
    label: "GitHub",
    value: "github.com/RafeekAhamed",
    href: "https://github.com/RafeekAhamed",
    description: "Explore my DevOps projects",
  },
  {
    label: "LeetCode",
    value: "leetcode.com/u/rafeek-ahamed-m/",
    href: "https://leetcode.com/u/rafeek-ahamed-m/",
    description: "View my problem-solving practice",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#050817] px-6 py-24 sm:px-8 lg:px-12"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-400/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let&apos;s build reliable systems together.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            I&apos;m open to DevOps, cloud engineering, platform operations,
            and infrastructure-focused opportunities. Feel free to connect
            with me through any of the channels below.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-cyan-400/15 bg-slate-900/40 p-6 shadow-[0_20px_80px_rgba(8,145,178,0.06)] sm:p-8 lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-2 text-xs font-medium text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Available for opportunities
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Interested in working together?
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Reach out for DevOps, Azure, cloud infrastructure, CI/CD,
                Kubernetes, or platform engineering opportunities.
              </p>
            </div>

            {/* Email CTA */}
            <a
              href="mailto:rafeekahamedm@gmail.com"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)]"
            >
              Email Me
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>

        {/* Contact links */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => {
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
                className="group rounded-2xl border border-slate-800 bg-slate-900/25 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/50"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                      {link.label}
                    </p>

                    <p className="mt-3 break-all text-sm font-semibold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
                      {link.value}
                    </p>

                    <p className="mt-2 text-xs leading-6 text-slate-500">
                      {link.description}
                    </p>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-950 text-sm text-slate-500 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:text-cyan-300">
                    ↗
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* Availability / focus */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {/* Role */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5 transition-colors duration-300 hover:border-slate-700">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
              Role Focus
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-300">
              DevOps Engineer
            </p>
          </div>

          {/* Cloud */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5 transition-colors duration-300 hover:border-slate-700">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
              Cloud Focus
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-300">
              Azure Cloud Engineering
            </p>
          </div>

          {/* Core Stack */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/20 p-5 transition-colors duration-300 hover:border-slate-700">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-600">
              Core Stack
            </p>

            <p className="mt-2 text-sm font-semibold text-slate-300">
              Kubernetes · Docker · Terraform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;