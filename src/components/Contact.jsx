import { Mail, ArrowUpRight, Download } from "lucide-react";

const contactLinks = [
  {
    label: "EMAIL",
    value: "rafeekahamed046@gmail.com",
    href: "mailto:rafeekahamed046@gmail.com",
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/rafeek-ahamed-devops",
    href: "https://www.linkedin.com/in/rafeek-ahamed-devops",
  },
  {
    label: "GITHUB",
    value: "github.com/RafeekAhamed",
    href: "https://github.com/RafeekAhamed",
  },
  {
    label: "LEETCODE",
    value: "leetcode.com/u/rafeek-ahamed-m",
    href: "https://leetcode.com/u/rafeek-ahamed-m/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-shell py-24 md:py-32">
      <div className="container">
        <div className="border border-cyan-400/20 bg-[#080c0e]">
          <div className="border-b border-white/[0.07] px-5 py-4 md:px-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="section-label">08 / Contact</span>

              <span className="technical-label">
                OPEN TO DEVOPS / CLOUD OPPORTUNITIES
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="border-b border-white/[0.07] p-6 md:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="micro-label micro-label-cyan">
                AVAILABLE FOR OPPORTUNITIES
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="cyan-text">reliable.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                I&apos;m looking for opportunities where I can contribute to
                DevOps, Azure cloud operations, CI/CD, Kubernetes, and
                infrastructure automation while continuing to grow as an
                engineer.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:rafeekahamed046@gmail.com"
                  className="inline-flex items-center justify-center gap-2 bg-cyan-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-300"
                >
                  <Mail size={15} />
                  Email Me
                </a>

                <a
                  href="/Rafeek_Ahamed_DevOps_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/[0.12] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]"
                >
                  <Download size={15} />
                  View Resume
                </a>
              </div>
            </div>

            <div>
              <div className="border-b border-white/[0.07] p-6 md:p-8">
                <p className="micro-label">HIRING SIGNALS</p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      PRIMARY ROLE
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      DevOps Engineer
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      CORE FOCUS
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Azure · Azure DevOps · CI/CD · Kubernetes · Docker ·
                      Terraform
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      LOCATION
                    </p>
                    <p className="mt-2 text-sm text-slate-200">
                      India · Open to relocation
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      STATUS
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Available for opportunities
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noreferrer"
                    }
                    className="group flex items-center justify-between border-b border-white/[0.07] px-6 py-5 transition hover:bg-white/[0.02] md:px-8"
                  >
                    <div className="min-w-0">
                      <p className="micro-label">{link.label}</p>
                      <p className="mt-2 truncate font-mono text-xs text-slate-400 transition group-hover:text-cyan-300">
                        {link.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-4 shrink-0 text-slate-600 transition group-hover:text-cyan-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              RESPONSE CHANNEL / EMAIL
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              Tirunelveli, Tamil Nadu / India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}