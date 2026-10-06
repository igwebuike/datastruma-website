import { ArrowRight, CheckCircle2, Download, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  "LLM response evaluation and ranking","Human preference data / RLHF support",
  "Prompt-response creation and validation","Factuality, hallucination and reasoning evaluation",
  "Coding, SQL and STEM evaluation","AI-agent trajectory and task evaluation",
  "Search and relevance evaluation","Dataset cleaning, deduplication and QA",
  "Synthetic-data validation","Human-in-the-loop review and escalation"
];

export default function Capabilities(){
  return <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-20">
    <div className="max-w-4xl">
      <div className="text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Capability Statement</div>
      <h1 className="mt-4 text-4xl font-black tracking-[-.04em] md:text-5xl">AI Data & Model Operations</h1>
      <p className="mt-5 text-lg leading-8 text-slate-300">U.S.-managed AI operations with scalable African talent, structured QA, and measurable delivery for AI labs, model teams, and technology organizations.</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <a href="/Datastruma_AI_Data_Model_Operations_Capability_Statement.pdf" download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-lime-300 px-5 py-3 text-sm font-bold text-slate-950"><Download size={17}/> Download Capability Statement</a>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[.05] px-5 py-3 text-sm font-bold text-white">Request a No-Cost Pilot <ArrowRight size={17}/></Link>
      </div>
    </div>

    <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
      <section className="rounded-[2rem] border border-white/10 bg-white/[.04] p-6 md:p-8">
        <h2 className="text-2xl font-black">Core capabilities</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">{capabilities.map(x=><div key={x} className="flex gap-3 text-sm leading-6 text-slate-300"><CheckCircle2 size={17} className="mt-1 shrink-0 text-lime-300"/>{x}</div>)}</div>
      </section>
      <section className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/[.06] p-6 md:p-8">
        <ShieldCheck className="text-cyan-300"/><h2 className="mt-4 text-2xl font-black">Managed delivery model</h2>
        <p className="mt-4 text-sm leading-7 text-slate-300"><b className="text-white">U.S.-based oversight.</b> Datastruma manages client engagement, technical scoping, governance, and delivery accountability.</p>
        <p className="mt-3 text-sm leading-7 text-slate-300"><b className="text-white">Qualified delivery talent.</b> Scalable teams in Nigeria support evaluation and data operations with recruiting, qualification, calibration, reviewer QA, and performance measurement managed by Datastruma.</p>
        <p className="mt-3 text-sm leading-7 text-slate-300"><b className="text-white">Quality controls.</b> Gold-standard examples, reviewer layers, sampling, disagreement analysis, measurable acceptance criteria, and continuous calibration.</p>
      </section>
    </div>

    <div className="mt-6 grid gap-6 md:grid-cols-2">
      <section className="rounded-[2rem] border border-white/10 bg-white/[.04] p-6">
        <h2 className="text-xl font-black">Multilingual & cultural evaluation</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">Initial focus can include English, Nigerian English, Nigerian Pidgin, Igbo, Yoruba, and Hausa, with expansion into additional African-language and cultural evaluation programs as required.</p>
      </section>
      <section className="rounded-[2rem] border border-white/10 bg-white/[.04] p-6">
        <h2 className="text-xl font-black">Engagement options</h2>
        <p className="mt-3 text-sm leading-7 text-slate-300">No-cost pilot evaluation • fixed-scope project • dedicated evaluation pod • ongoing managed operations • specialized domain-expert evaluation.</p>
      </section>
    </div>

    <section className="mt-6 rounded-[2rem] border border-lime-300/20 bg-lime-300/[.06] p-6 md:p-8">
      <div className="text-xs font-bold uppercase tracking-[.22em] text-lime-300">Prove quality before you commit</div>
      <h2 className="mt-3 text-2xl font-black">No-cost pilot evaluation</h2>
      <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">A small, clearly scoped sample — typically up to 50–100 evaluation items depending on task complexity — with an agreed rubric and acceptance criteria. Your team can evaluate quality, consistency, turnaround time, and QA before deciding whether to expand.</p>
      <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-bold text-lime-200">Request a pilot <ArrowRight size={17}/></Link>
    </section>
  </div>;
}
