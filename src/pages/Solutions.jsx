import SectionLabel from "../components/ui/SectionLabel";
import SolutionsGrid from "../components/sections/SolutionsGrid";

export default function Solutions() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pt-20">
      <SectionLabel>Solutions</SectionLabel>

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        Professional solutions designed for modern execution
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Our work is built around practical transformation: cleaner systems,
        smarter automation, stronger decision support, and better client-facing
        operations.
      </p>

      <div className="mt-10">
        <SolutionsGrid />
      </div>
    </section>
  );
}