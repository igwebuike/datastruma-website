import { companyInfo } from "../data/siteData";
import SectionLabel from "../components/ui/SectionLabel";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <SectionLabel>About</SectionLabel>
      <h1 className="mt-5 text-4xl font-black tracking-tight md:text-5xl">About Datastruma LLC</h1>
      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">Datastruma LLC is a premium technology company focused on cloud, AI, automation, analytics, logistics technology, and digital venture building.</p>
      <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-xl">
        <h2 className="text-2xl font-extrabold">Founder-led execution</h2>
        <p className="mt-3 text-slate-300 leading-8">Led by Eugene Ezenwa Ebem, Datastruma combines enterprise data architecture experience with practical AI product development and business automation delivery.</p>
        <p className="mt-4 text-slate-400">{companyInfo.established}</p>
      </div>
    </section>
  );
}
