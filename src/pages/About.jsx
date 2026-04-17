import SectionLabel from "../components/ui/SectionLabel";
import { companyInfo } from "../data/siteData";

export default function About() {
  const points = [
    "Professional presentation and premium positioning",
    "Broader offerings beyond one partnership or one toolset",
    "AI, automation, analytics, and digital ventures under one umbrella",
    "A strong base for future expansion and client trust"
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pt-20">
      <SectionLabel>About Datastruma</SectionLabel>

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/10">
          <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900">
            <img
              src={companyInfo.founderImagePath}
              alt="Eugene Ebem founder"
              className="h-full min-h-[520px] w-full object-cover"
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10 backdrop-blur">
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Founder and company story
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Eugene Ebem is the founder behind Datastruma LLC and its broader
            ecosystem of ventures. The company is built to present a modern,
            premium, and practical technology offering that goes beyond a single
            product line or one narrow service category.
          </p>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Datastruma combines cloud thinking, AI possibilities, automation
            systems, analytics enablement, and digital venture development into
            a more complete professional platform for business growth.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {points.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
            <strong className="text-white">Established:</strong>{" "}
            {companyInfo.established}
          </div>
        </div>
      </div>
    </section>
  );
}