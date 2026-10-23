const certifications = [
{
number: "01",
type: "MICROSOFT / CERTIFICATION",
title: "Azure Fundamentals",
subtitle: "Microsoft Certified: Azure Fundamentals",
meta: "AZ-900",
year: "2026",
status: "Completed",
description:
"Microsoft Azure fundamentals covering core cloud concepts, Azure services, architecture, security, and governance.",
tags: ["Microsoft Azure", "Cloud Fundamentals", "AZ-900"],
},
{
number: "02",
type: "MICROSOFT / APPLIED SKILLS",
title: "AI Research Agents",
subtitle: "Generate Reports with AI Research Agents",
meta: "Applied Skills",
year: "Jul 2026",
status: "Completed",
description:
"Microsoft Applied Skills credential focused on generating reports with AI research agents.",
tags: ["AI", "Research Agents", "Microsoft"],
},
{
number: "03",
type: "PROFESSIONAL / PROGRAM",
title: "Cloud Architect",
subtitle: "Professional Certification Program",
meta: "Distinction",
year: "May 2026",
status: "Completed",
description:
"Professional certification program focused on cloud architecture and infrastructure concepts.",
tags: ["Cloud Architecture", "Infrastructure", "Simplilearn"],
},
{
number: "04",
type: "DEVELOPMENT / CERTIFICATION",
title: "Python Full Stack Developer",
subtitle: "Python Full Stack Developer Certification",
meta: "Inmakes Infotech",
year: "2023",
status: "Completed",
description:
"Full-stack development training covering Python, Django, REST APIs, databases, and application development.",
tags: ["Python", "Django", "REST APIs"],
},
{
number: "05",
type: "MICROSOFT / EXAM PREPARATION",
title: "Azure Administrator",
subtitle: "Microsoft Azure Administrator",
meta: "AZ-104",
year: "In Progress",
status: "In Preparation",
description:
"Currently preparing for the Azure Administrator certification, with a focus on Azure infrastructure, identity, networking, storage, monitoring, and administration.",
tags: ["Azure Administration", "Networking", "Monitoring"],
},
];

export default function Certifications() {
const completedCount = certifications.filter(
(cert) => cert.status === "Completed"
).length;

return ( <section id="certifications" className="section-shell py-24 md:py-32"> <div className="container"> <div className="mb-12 md:mb-16"> <div className="section-label">06 / Certifications</div>

```
      <div className="mt-6 max-w-5xl">
        <h2 className="editorial-title">
          Credentials /
          <br />
          that support
          <br />
          the work.
        </h2>
      </div>

      <div className="mt-8 max-w-2xl">
        <p className="text-sm leading-7 text-slate-400 md:text-base">
          Credentials and ongoing learning in Microsoft Azure, cloud
          architecture, and software development, supporting my DevOps
          and cloud engineering career.
        </p>
      </div>
    </div>

    <div className="system-grid">
      {certifications.map((cert) => (
        <article
          key={cert.number}
          className="system-card flex min-h-[360px] flex-col"
        >
          <div className="system-card-header">
            <span className="system-card-number">{cert.number}</span>

            <span className="system-card-type">{cert.type}</span>
          </div>

          <div className="flex flex-1 flex-col p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="micro-label micro-label-cyan">{cert.meta}</p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {cert.subtitle}
                </p>
              </div>

              <span className="shrink-0 text-right font-mono text-[10px] tracking-[0.12em] text-slate-500">
                {cert.year}
              </span>
            </div>

            <div className="system-divider my-6" />

            <p className="text-sm leading-7 text-slate-400">
              {cert.description}
            </p>

            <div className="mt-auto pt-7">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="micro-label">CORE / AREAS</p>

                <span
                  className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${
                    cert.status === "Completed"
                      ? "border-cyan-400/20 text-cyan-300"
                      : "border-amber-400/20 text-amber-300"
                  }`}
                >
                  {cert.status}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>

    <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
      <span className="micro-label">CREDENTIAL STATUS</span>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          {completedCount} Completed
        </span>

        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
          AZ-104 / In Preparation
        </span>
      </div>
    </div>
  </div>
</section>


);
}