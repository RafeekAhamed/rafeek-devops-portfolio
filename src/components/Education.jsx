function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden border-t border-slate-800/60 bg-[#050817] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Education
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Academic background.
          </h2>
        </div>

        {/* Education card */}
        <div className="max-w-4xl">
          <article className="rounded-2xl border border-slate-800 bg-slate-900/30 p-7 transition-all duration-300 hover:border-cyan-400/40 hover:bg-slate-900/50 sm:p-9">

            <div className="grid gap-8 md:grid-cols-[120px_1fr]">

              {/* Year */}
              <div>
                <span className="text-sm font-semibold text-cyan-400">
                  2020
                </span>

                <div className="mt-2 hidden h-px w-10 bg-slate-700 md:block" />
              </div>

              {/* Details */}
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Bachelor of Arts in English Literature
                </h3>

                <p className="mt-3 text-base font-medium text-cyan-400">
                  Sadakathullah Appa College
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  Manonmaniam Sundaranar University
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-400">
                    Aug 2020 – May 2023
                  </span>

                  <span className="rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-xs text-slate-400">
                    CGPA: 7/10
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Education;