import { ChevronRight } from "lucide-react";
import { solutions, pax8SupportPoints } from "../../data/siteData";

export default function SolutionsGrid() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="grid gap-5">
        {solutions.map((card) => (
          <div
            key={card.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10"
          >
            <h3 className="text-2xl font-extrabold tracking-tight">
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
              {card.text}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {card.bullets.map((bullet) => (
                <span
                  key={bullet}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {bullet}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 backdrop-blur">
        <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
          Strategic partner note
        </div>

        <h3 className="mt-4 text-3xl font-black tracking-tight">
          Pax8 is part of the broader Datastruma story — not the whole story.
        </h3>

        <p className="mt-4 text-base leading-8 text-slate-300">
          Datastruma is also a Pax8 strategic partner, which strengthens our
          ability to support businesses with software sourcing, cloud stack
          access, and recurring-value opportunities. It fits naturally within
          our larger professional offering across cloud, AI, automation,
          analytics, and digital enablement.
        </p>

        <div className="mt-6 grid gap-3">
          {pax8SupportPoints.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <ChevronRight className="mt-0.5 text-lime-300" size={18} />
              <div className="text-sm leading-7 text-slate-200">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}