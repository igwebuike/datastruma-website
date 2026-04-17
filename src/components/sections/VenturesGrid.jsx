import { ArrowRight, ExternalLink } from "lucide-react";
import { ventures } from "../../data/siteData";

export default function VenturesGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {ventures.map((venture) => (
        <div
          key={venture.title}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10"
        >
          <div className="text-xs font-black uppercase tracking-[0.18em] text-lime-300">
            {venture.category}
          </div>

          <h3 className="mt-3 text-2xl font-extrabold tracking-tight">
            {venture.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-300">
            {venture.description}
          </p>

          {venture.href ? (
            <a
              href={venture.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 hover:text-white"
            >
              {venture.cta}
              <ExternalLink size={15} />
            </a>
          ) : (
            <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
              <span>Learn more</span>
              <ArrowRight size={15} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}