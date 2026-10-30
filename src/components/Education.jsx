const education = {
  degree: "B.A. English Literature",
  college: "Sadakathullah Appa College",
  university: "Manonmaniam Sundaranar University",
  period: "Aug 2020 — May 2023",
  cgpa: "7 / 10",
};

const learningPath = [
  {
    number: "01",
    title: "Azure Fundamentals",
    provider: "Microsoft",
    period: "2026",
    type: "CERTIFICATION",
    status: "COMPLETED",
    statusType: "completed",
  },
  {
    number: "02",
    title: "Professional Certification Program in Cloud Architecture",
    provider: "Simplilearn Learning Platform",
    period: "Feb — May 2026",
    type: "PROFESSIONAL CERTIFICATION PROGRAM",
    status: "COMPLETED · GRADE A",
    statusType: "completed",
  },
  {
    number: "03",
    title: "Python Full Stack Developer",
    provider: "Inmakes Infotech",
    period: "2023",
    type: "TECHNICAL TRAINING",
    status: "COMPLETED",
    statusType: "completed",
  },
  {
    number: "04",
    title: "Azure Administrator",
    provider: "Microsoft",
    period: "In progress",
    type: "CERTIFICATION PREPARATION",
    status: "PREPARING · AZ-104",
    statusType: "preparing",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="section-shell py-24 md:py-32"
      aria-labelledby="education-heading"
    >
      <div className="container">
        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <div className="section-label">07 / Education</div>

          <div className="mt-6 max-w-5xl">
            <h2 id="education-heading" className="editorial-title">
              Foundation /
              <br />
              continuous
              <br />
              learning.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 md:text-base">
              An academic foundation complemented by cloud architecture
              training, technical development, and continuous learning in
              Azure and DevOps technologies.
            </p>
          </div>
        </div>

        {/* Academic qualification */}
        <article
          className="system-card"
          aria-labelledby="academic-degree"
        >
          <div className="system-card-header">
            <span className="system-card-number">01</span>
            <span className="system-card-type">
              ACADEMIC / FOUNDATION
            </span>
          </div>

          <div className="grid gap-10 p-6 md:grid-cols-[1.4fr_0.6fr] md:p-8 lg:p-10">
            <div>
              <p className="micro-label micro-label-cyan">
                ACADEMIC QUALIFICATION
              </p>

              <h3
                id="academic-degree"
                className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl"
              >
                {education.degree}
              </h3>

              <p className="mt-4 text-base text-slate-300">
                {education.college}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {education.university}
              </p>

              <div className="system-divider my-7" />

              <ul
                className="flex flex-wrap gap-3"
                aria-label="Academic details"
              >
                <li className="tech-chip">{education.period}</li>
                <li className="tech-chip">CGPA {education.cgpa}</li>
              </ul>
            </div>

            <div className="border-t border-white/[0.07] pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="micro-label">ACADEMIC RECORD</p>

              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Qualification
                  </dt>
                  <dd className="mt-2 text-sm text-slate-300">
                    Bachelor of Arts
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Specialization
                  </dt>
                  <dd className="mt-2 text-sm text-slate-300">
                    English Literature
                  </dd>
                </div>

                <div>
                  <dt className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                    Final CGPA
                  </dt>
                  <dd className="mt-2 text-sm text-cyan-400">
                    {education.cgpa}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </article>

        {/* Professional learning */}
        <div className="mt-12">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="micro-label">
              PROFESSIONAL / TECHNICAL LEARNING
            </p>

            <span className="font-mono text-[9px] tracking-[0.16em] text-slate-600">
              {String(learningPath.length).padStart(2, "0")} RECORDS
            </span>
          </div>

          <div className="system-grid">
            {learningPath.map((item) => (
              <article
                key={item.number}
                className="system-card"
                aria-labelledby={`learning-${item.number}`}
              >
                <div className="system-card-header">
                  <span className="system-card-number">
                    {item.number}
                  </span>

                  <span className="system-card-type">
                    {item.type}
                  </span>
                </div>

                <div className="p-6">
                  <p className="micro-label micro-label-cyan">
                    {item.period}
                  </p>

                  <h3
                    id={`learning-${item.number}`}
                    className="mt-3 text-xl font-semibold tracking-tight text-white"
                  >
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {item.provider}
                  </p>

                  <div className="mt-6">
                    <span
                      role="status"
                      className={`tech-chip ${
                        item.statusType === "preparing"
                          ? "text-amber-300"
                          : ""
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-8 border-t border-white/[0.07] pt-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="micro-label">LEARNING PATH</span>

            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
              Academic Foundation → Cloud → DevOps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}