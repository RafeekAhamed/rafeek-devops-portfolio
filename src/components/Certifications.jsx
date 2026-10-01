const certifications = [
  {
    number: "01",
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "2026",
    type: "Certification",
    badge: "AZ-900",
  },
  {
    number: "02",
    title: "Microsoft Applied Skills: Generate Reports with AI Research Agents",
    issuer: "Microsoft",
    date: "Jul 2026",
    type: "Applied Skills",
    badge: "Microsoft",
  },
  {
    number: "03",
    title: "Professional Certification Program – Cloud Architect",
    issuer: "Simplilearn",
    date: "May 2026",
    type: "Professional Certification",
    badge: "Distinction",
  },
  {
    number: "04",
    title: "Python Full Stack Developer Certification",
    issuer: "Inmakes Infotech Pvt. Ltd.",
    date: "2023",
    type: "Certification",
    badge: "Python",
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#050817] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Certifications
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Certifications and professional learning.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Credentials and structured learning focused on cloud computing,
            Azure, AI research workflows, and application development.
          </p>
        </div>

        {/* Certification grid */}
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((certification) => (
            <article
              key={certification.number}
              className="group rounded-2xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/60 sm:p-8"
            >
              {/* Top row */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-400">
                  {certification.number}
                </span>

                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs text-slate-400">
                  {certification.badge}
                </span>
              </div>

              {/* Certification title */}
              <h3 className="mt-7 text-xl font-bold leading-8 text-white sm:text-2xl">
                {certification.title}
              </h3>

              {/* Issuer */}
              <p className="mt-4 text-sm font-medium text-cyan-400">
                {certification.issuer}
              </p>

              {/* Details */}
              <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span>{certification.type}</span>

                <span className="h-1 w-1 rounded-full bg-slate-700" />

                <span>{certification.date}</span>
              </div>

              {/* Bottom line */}
              <div className="mt-7 h-px w-12 bg-slate-700 transition-all duration-300 group-hover:w-20 group-hover:bg-cyan-400" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;