const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#040607]">
      <div className="container py-10 md:py-12">
        {/* Back to Top */}
        <div className="flex justify-end">
          <a
            href="#overview"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 transition hover:text-cyan-300"
          >
            Back to top ↑
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.07] pt-5 text-[9px] uppercase tracking-[0.16em] text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Rafeek Ahamed M</span>

          <span>Azure / DevOps / Kubernetes / IaC</span>

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Portfolio Online
          </span>
        </div>
      </div>
    </footer>
  );
}