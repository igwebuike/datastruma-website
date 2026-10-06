import { bookingUrl } from "../data/siteData";
import SectionLabel from "../components/ui/SectionLabel";

export default function Ventures() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionLabel>Ventures</SectionLabel>
      <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">A focused ecosystem of practical digital ventures</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Datastruma builds and supports ventures across logistics AI, business automation, analytics education, and cloud platforms.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {['Empty Mile AI', 'Business Automation', 'Analytics Enablement'].map((item) => <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6"><h2 className="text-2xl font-extrabold">{item}</h2><p className="mt-3 text-slate-300 leading-7">A practical solution area designed to solve real business problems with clean technology execution.</p></div>)}
      </div>
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-8 py-4 font-extrabold text-slate-950">Book a Free Call</a>
    </section>
  );
}
