import { Mail, MapPin, Phone } from "lucide-react";
import SectionLabel from "../components/ui/SectionLabel";
import ContactForm from "../components/sections/ContactForm";
import { companyInfo, contactHighlights } from "../data/siteData";

export default function Contact() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-14 pt-14 md:px-6 lg:px-8 lg:pt-20">
      <SectionLabel>Contact</SectionLabel>

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        Let’s build something sharp and scalable
      </h1>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
        Reach out for cloud guidance, AI and automation strategy, CRM
        workflows, analytics enablement, or broader digital business support.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-extrabold tracking-tight">
            Why companies contact us
          </h3>

          <div className="mt-5 grid gap-3">
            {contactHighlights.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <Mail className="mt-0.5 text-cyan-200" size={18} />
                <div className="text-sm leading-7 text-slate-200">{item}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 to-lime-400/10 p-5">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-lime-300" />
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-lime-300">
                  Email
                </div>
              </div>
              <a
                href={`mailto:${companyInfo.email}`}
                className="mt-3 block text-xl font-extrabold text-white md:text-2xl"
              >
                {companyInfo.email}
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-cyan-200" />
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Phone
                </div>
              </div>
              <a
                href={`tel:${companyInfo.phone}`}
                className="mt-3 block text-lg font-bold text-white"
              >
                {companyInfo.phone}
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-cyan-200" />
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">
                  Address
                </div>
              </div>
              <div className="mt-3 text-lg font-bold text-white">
                {companyInfo.address}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-2xl shadow-black/10">
          <h3 className="text-2xl font-extrabold tracking-tight">
            Inquiry form
          </h3>
          <p className="mt-3 text-base leading-8 text-slate-300">
            Connect this to Formspree, Resend, HubSpot, Zoho, Supabase, or your
            CRM of choice.
          </p>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}