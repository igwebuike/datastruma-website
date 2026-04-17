import { Link } from "react-router-dom";

export function PrimaryButton({ children, to = "/contact" }) {
  return (
    <Link
      to={to}
      className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-8 text-base font-extrabold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.02] md:h-16 md:px-10 md:text-lg"
    >
      {children}
    </Link>
  );
}

export function SecondaryButton({ children, to = "/offerings" }) {
  return (
    <Link
      to={to}
      className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-base font-bold text-white transition hover:bg-white/10 md:h-16 md:px-10 md:text-lg"
    >
      {children}
    </Link>
  );
}