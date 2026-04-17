import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-7xl flex-col items-center justify-center px-4 text-center md:px-6 lg:px-8">
      <h1 className="text-5xl font-black tracking-tight md:text-7xl">404</h1>
      <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
        The page you’re looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-lime-300 px-6 text-sm font-extrabold text-slate-950"
      >
        Back Home
      </Link>
    </section>
  );
}