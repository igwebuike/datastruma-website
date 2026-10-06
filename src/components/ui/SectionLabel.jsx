export default function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-xl">
      <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(163,230,53,0.9)]" />
      {children}
    </div>
  );
}
