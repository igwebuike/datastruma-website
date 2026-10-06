import SectionLabel from "../components/ui/SectionLabel";
import { companyInfo } from "../data/siteData";

const steps=[
["1. Scope","You provide a small representative evaluation set, success criteria, and any task-specific constraints."],
["2. Calibrate","Datastruma converts the requirements into a rubric, examples, reviewer guidance, and escalation rules."],
["3. Evaluate","Qualified evaluators complete the sample with structured review and QA."],
["4. Report","You receive scored results, disagreement findings, QA notes, turnaround metrics, and scale recommendations."]
];
export default function Pilot(){return <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8 lg:py-24">
<SectionLabel>No-cost pilot</SectionLabel><h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight md:text-5xl">Give us a small evaluation set. We’ll prove the delivery model.</h1>
<p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">A tightly scoped pilot—typically up to 50–100 items depending on complexity—lets your team assess quality, consistency, turnaround, and QA before making a broader procurement commitment.</p>
<div className="mt-10 grid gap-4 md:grid-cols-2">{steps.map(([t,d])=><div key={t} className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-xl font-extrabold">{t}</h2><p className="mt-3 leading-7 text-slate-300">{d}</p></div>)}</div>
<div className="mt-10 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-7"><h2 className="text-2xl font-black">What you receive</h2><p className="mt-3 text-slate-300">Agreed rubric • reviewed evaluation output • QA summary • acceptance-rate metrics • disagreement/error analysis • turnaround summary • recommendation for production scale.</p></div>
<div className="mt-8 flex flex-wrap gap-4"><a href={`mailto:${companyInfo.email}?subject=Datastruma%20No-Cost%20Pilot%20Evaluation`} className="rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-7 py-4 font-extrabold text-slate-950">Request a Pilot</a><a href="/Datastruma_AI_Data_Model_Operations_Capability_Statement.pdf" target="_blank" className="rounded-full border border-white/10 bg-white/5 px-7 py-4 font-bold">View Capability Statement</a></div>
</section>}
