export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
      <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-b from-cyan-400 to-lime-300 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
      {children}
    </div>
  );
}