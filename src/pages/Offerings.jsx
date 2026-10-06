import { services, bookingUrl } from "../data/siteData";
import SectionLabel from "../components/ui/SectionLabel";

export default function Offerings() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionLabel>Services</SectionLabel>
      <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Technology services for modern business growth</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Datastruma delivers cloud, AI, automation, analytics, and operational systems for businesses that need practical digital leverage.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((item) => { const Icon = item.icon; return <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"><div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-lime-300 text-slate-950"><Icon size={22}/></div><h2 className="text-xl font-extrabold">{item.title}</h2><p className="mt-3 text-slate-300 leading-7">Designed to improve efficiency, visibility, automation, and decision-making.</p></div>})}
      </div>
      <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-8 py-4 font-extrabold text-slate-950">Book a Free AI Discovery Call</a>
    </section>
  );
}
