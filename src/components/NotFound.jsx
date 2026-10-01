import { ArrowLeft, Home, Terminal } from "lucide-react";

function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-[#050817] px-6 py-24">
      <div className="relative w-full max-w-3xl text-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-slate-900/70 text-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.08)]"
        >
          <Terminal size={28} />
        </div>

        <p className="relative mt-8 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
          Error 404
        </p>

        <h1 className="relative mt-5 text-6xl font-black tracking-tight text-white sm:text-8xl">
          404
        </h1>

        <h2 className="relative mt-5 text-2xl font-bold text-white sm:text-3xl">
          Page not found.
        </h2>

        <p className="relative mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or may have
          been moved. Let&apos;s get you back to the portfolio.
        </p>

        <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-[0_10px_35px_rgba(34,211,238,0.18)] focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
          >
            <Home
              aria-hidden="true"
              size={17}
            />

            Back to Home
          </a>

          <a
            href="/#projects"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-6 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 sm:w-auto"
          >
            View Projects

            <ArrowLeft
              aria-hidden="true"
              size={17}
              className="rotate-180"
            />
          </a>
        </div>

        <div className="relative mx-auto mt-12 max-w-xl rounded-2xl border border-slate-800 bg-slate-950/70 p-5 text-left shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-red-400/70"
            />

            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-yellow-400/70"
            />

            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-full bg-emerald-400/70"
            />

            <span className="ml-2 text-xs text-slate-600">
              portfolio-terminal
            </span>
          </div>

          <div className="mt-5 font-mono text-xs leading-7 sm:text-sm">
            <p className="text-slate-500">
              <span className="text-cyan-400">$</span>{" "}
              cd requested-page
            </p>

            <p className="text-slate-500">
              <span className="text-cyan-400">$</span>{" "}
              status
            </p>

            <p className="text-red-400">
              404 — resource not found
            </p>

            <p className="mt-2 text-slate-500">
              <span className="text-cyan-400">$</span>{" "}
              cd /home
            </p>

            <p className="text-emerald-400">
              ✓ Redirect path available
            </p>
          </div>
        </div>

        <p className="relative mt-10 text-xs text-slate-600">
          Rafeek Ahamed M · DevOps Engineer · Azure Cloud Engineer
        </p>
      </div>
    </main>
  );
}

export default NotFound;