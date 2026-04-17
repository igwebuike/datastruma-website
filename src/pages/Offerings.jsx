import SectionLabel from "../components/ui/SectionLabel";
import OfferingsGrid from "../components/sections/OfferingsGrid";

export default function Offerings() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pt-20">
      <SectionLabel>Offerings</SectionLabel>

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        What we offer
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Datastruma brings together premium services and solutions across
        technology, AI, automation, analytics, and digital venture enablement.
      </p>

      <div className="mt-10">
        <OfferingsGrid />
      </div>
    </section>
  );
}