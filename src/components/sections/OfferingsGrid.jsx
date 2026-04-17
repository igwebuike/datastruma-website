import { offerings } from "../../data/siteData";

export default function OfferingsGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {offerings.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/10 backdrop-blur"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-lime-300 text-slate-950">
              <Icon size={20} />
            </div>
            <h3 className="text-xl font-extrabold tracking-tight">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}