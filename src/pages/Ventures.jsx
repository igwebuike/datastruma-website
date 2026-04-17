import SectionLabel from "../components/ui/SectionLabel";
import VenturesGrid from "../components/sections/VenturesGrid";

export default function Ventures() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pt-20">
      <SectionLabel>Ventures and ecosystem</SectionLabel>

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        A connected ecosystem of brands and initiatives
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Datastruma is the parent brand. These ventures extend our reach into
        AI, automation, analytics education, workforce technology, and
        innovation.
      </p>

      <div className="mt-10">
        <VenturesGrid />
      </div>
    </section>
  );
}