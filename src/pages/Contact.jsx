import { bookingUrl, companyInfo } from "../data/siteData";
import SectionLabel from "../components/ui/SectionLabel";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionLabel>Contact</SectionLabel>
      <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">Ready to talk?</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Book a Datastruma AI Discovery Call or send us an email. We will discuss your current business needs and identify practical opportunities for automation, analytics, and AI.</p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-8 py-4 font-extrabold text-slate-950">Book a Free AI Discovery Call</a>
        <a href={`mailto:${companyInfo.email}`} className="inline-flex rounded-full border border-white/10 bg-white/5 px-8 py-4 font-bold text-white hover:bg-white/10">Email Datastruma</a>
      </div>
    </section>
  );
}
