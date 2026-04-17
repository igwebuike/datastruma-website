export default function ContactForm() {
  return (
    <form className="mt-6 grid gap-4">
      <input
        type="text"
        placeholder="Your name"
        className="h-14 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-400"
      />
      <input
        type="email"
        placeholder="Business email"
        className="h-14 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-400"
      />
      <input
        type="text"
        placeholder="Company name"
        className="h-14 rounded-2xl border border-white/10 bg-white/5 px-4 text-white outline-none placeholder:text-slate-400"
      />
      <textarea
        placeholder="Tell us what you need."
        className="min-h-[160px] rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white outline-none placeholder:text-slate-400"
      />
      <button
        type="button"
        className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-6 text-sm font-extrabold text-slate-950 transition hover:scale-[1.02]"
      >
        Submit Inquiry
      </button>
    </form>
  );
}