import { ArrowRight, Brain, CheckCircle2, ShieldCheck, Users, Gauge } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionLabel from "../components/ui/SectionLabel";
import { PrimaryButton, SecondaryButton } from "../components/ui/ActionButton";
import { homeHighlights, industries, companyInfo } from "../data/siteData";

const fade = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.55}} };

export default function Home(){
  return <>
    <section className="relative overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial="hidden" animate="show" variants={fade}>
            <SectionLabel>AI, data, cloud and automation for real-world execution</SectionLabel>
            <h1 className="mt-5 max-w-4xl text-[2.7rem] font-black leading-[1.02] tracking-[-.045em] md:text-[3.4rem] lg:text-[4rem]">
              AI data and model operations built for <span className="bg-gradient-to-r from-cyan-300 to-lime-300 bg-clip-text text-transparent">quality at scale.</span>
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
              Datastruma combines U.S.-based technical and delivery oversight with qualified, scalable African talent for human evaluation, training-data operations, model QA, cloud, automation, and analytics.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton to="/capabilities">Explore AI Capabilities</PrimaryButton>
              <SecondaryButton to="/contact">Request a No-Cost Pilot</SecondaryButton>
            </div>
            <p className="mt-4 text-sm text-slate-400">Small, clearly scoped pilot • measurable acceptance criteria • no obligation to continue</p>
          </motion.div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[.05] p-6 shadow-2xl backdrop-blur-xl">
            <div className="text-xs font-bold uppercase tracking-[.24em] text-cyan-300">AI Data & Model Operations</div>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">A managed evaluation partner — not commodity staffing.</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                [Brain,"Model evaluation","Ranking, factuality, reasoning, agent and response QA"],
                [Users,"Human data","Preference data, prompt-response work and HITL validation"],
                [ShieldCheck,"Structured QA","Calibration, reviewer layers and acceptance criteria"],
                [Gauge,"Scalable delivery","U.S. oversight with managed delivery talent in Nigeria"]
              ].map(([Icon,t,d])=><div key={t} className="rounded-2xl border border-white/10 bg-slate-950/50 p-4">
                <Icon className="text-cyan-300" size={20}/><div className="mt-3 font-bold">{t}</div><p className="mt-1 text-sm leading-6 text-slate-400">{d}</p>
              </div>)}
            </div>
            <Link to="/capabilities" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">View capability statement <ArrowRight size={15}/></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <div className="grid gap-5 md:grid-cols-3">
        {homeHighlights.map(i=><div key={i.title} className="rounded-[1.5rem] border border-white/10 bg-white/[.04] p-5">
          <i.icon className="text-lime-300" size={22}/><h3 className="mt-4 text-xl font-extrabold">{i.title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{i.description}</p>
        </div>)}
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <div className="grid gap-7 lg:grid-cols-2 lg:items-end">
        <div><SectionLabel>Where we help</SectionLabel><h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">Built for teams that need reliable execution.</h2></div>
        <p className="text-base leading-7 text-slate-300 md:text-lg">From frontier-model evaluation to cloud and automation, Datastruma helps organizations turn technical requirements into managed delivery.</p>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {industries.map(i=><div key={i} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4 text-sm text-slate-200"><CheckCircle2 size={17} className="mt-0.5 text-lime-300"/>{i}</div>)}
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8">
      <div className="flex flex-col gap-5 rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-lime-300/10 p-6 md:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div><div className="text-sm font-bold uppercase tracking-[.2em] text-lime-300">Prove quality before you commit</div><h2 className="mt-2 text-2xl font-black md:text-3xl">Start with a no-cost pilot evaluation.</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300 md:text-base">We can complete a small defined sample so your team can assess quality, consistency, turnaround time, and QA before a broader engagement.</p></div>
        <PrimaryButton to="/contact">Request Pilot</PrimaryButton>
      </div>
    </section>

    <section className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 lg:px-8">
      <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-5">
        <img src={companyInfo.founderImagePath} alt="Eugene Ebem" className="h-14 w-14 rounded-full object-cover"/>
        <div><div className="font-extrabold">Eugene Ebem</div><div className="text-sm text-slate-400">Founder, Datastruma LLC • {companyInfo.established}</div></div>
      </div>
    </section>
  </>;
}
