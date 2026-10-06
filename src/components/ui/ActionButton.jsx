import { Link } from "react-router-dom";

export function PrimaryButton({ children, to = "/contact", external = false }) {
  const className = "inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-6 text-sm font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.02] md:h-14 md:px-8 md:text-base";

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ children, to = "/offerings" }) {
  return (
    <Link
      to={to}
      className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 text-sm font-bold text-white transition hover:bg-white/10 md:h-14 md:px-8 md:text-base"
    >
      {children}
    </Link>
  );
}
