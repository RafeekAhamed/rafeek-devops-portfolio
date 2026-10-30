import { Mail, ArrowUpRight, Download } from "lucide-react";

const EMAIL = "rafeekahamed046@gmail.com";
const RESUME_PATH = "/Rafeek%20Ahamed%20M.pdf";
const EMAIL_SUBJECT = "DevOps / Azure Cloud Opportunity";

const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
  EMAIL_SUBJECT
)}`;

const contactLinks = [
  {
    label: "EMAIL",
    value: EMAIL,
    href: emailHref,
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

const hiringInformation = [
  {
    label: "TARGET ROLES",
    value:
      "DevOps Engineer · Azure DevOps Engineer · Azure Cloud Engineer · Cloud Operations Engineer",
  },
  {
    label: "TECHNICAL FOCUS",
    value:
      "Azure · Azure DevOps · CI/CD · Kubernetes · AKS · Docker · Terraform",
  },
  {
    label: "LOCATION",
    value: "Tirunelveli, Tamil Nadu, India · Open to relocation",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-shell py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
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
                IMMEDIATE JOINER / OPEN TO WORK
              </p>

              <h2
                id="contact-heading"
                className="mt-6 max-w-4xl text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-white md:text-7xl"
              >
                Let&apos;s build
                <br />
                something
                <br />
                <span className="cyan-text">reliable.</span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
                I&apos;m exploring DevOps and Azure Cloud opportunities where
                I can contribute to CI/CD pipelines, cloud operations,
                Kubernetes, containerization, and infrastructure automation.
                I bring professional experience in release management and a
                practical, operations-focused approach to deployment
                validation and troubleshooting.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={emailHref}
                  className="inline-flex items-center justify-center gap-2 bg-cyan-400 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  <Mail size={15} aria-hidden="true" />
                  Contact Me
                </a>

                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View resume PDF in a new tab"
                  className="inline-flex items-center justify-center gap-2 border border-white/[0.12] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                >
                  <Download size={15} aria-hidden="true" />
                  View Resume
                </a>
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-500">
                Recruiters and hiring teams are welcome to contact me about
                relevant opportunities.
              </p>
            </div>

            <div>
              <div className="border-b border-white/[0.07] p-6 md:p-8">
                <p className="micro-label">HIRING INFORMATION</p>

                <dl className="mt-6 space-y-5">
                  {hiringInformation.map((item) => (
                    <div key={item.label}>
                      <dt className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                        {item.label}
                      </dt>
                      <dd className="mt-2 text-sm leading-6 text-slate-200">
                        {item.value}
                      </dd>
                    </div>
                  ))}

                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      AVAILABILITY
                    </dt>
                    <dd className="mt-2 flex items-center gap-2 text-sm text-emerald-300">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                        aria-hidden="true"
                      />
                      Immediate Joiner
                    </dd>
                  </div>
                </dl>
              </div>

              <nav aria-label="Professional links">
                {contactLinks.map((link) => {
                  const isEmail = link.href.startsWith("mailto:");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={
                        isEmail
                          ? `Email ${EMAIL}`
                          : `Open ${link.label} profile in a new tab`
                      }
                      className="group flex items-center justify-between border-b border-white/[0.07] px-6 py-5 transition hover:bg-white/[0.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-cyan-400 md:px-8"
                    >
                      <div className="min-w-0">
                        <p className="micro-label">{link.label}</p>
                        <p className="mt-2 truncate font-mono text-xs text-slate-400 transition group-hover:text-cyan-300">
                          {link.value}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={16}
                        aria-hidden="true"
                        className="ml-4 shrink-0 text-slate-600 transition group-hover:text-cyan-300"
                      />
                    </a>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              RECRUITER CONTACT / EMAIL
            </span>

            <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
              TIRUNELVELI, TAMIL NADU / INDIA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}