import { ArrowRight, Building2, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionLabel from "../components/ui/SectionLabel";
import { PrimaryButton, SecondaryButton } from "../components/ui/ActionButton";
import {
  homeHighlights,
  industries,
  ecosystemTags,
  capabilityTiles,
  companyInfo,
  testimonials
} from "../data/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeUpFast = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14
    }
  }
};

const sectionViewport = {
  once: true,
  amount: 0.18
};

export default function Home() {
  return (
    <>
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-16 md:px-6 lg:px-8 lg:pt-24">
        <motion.div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-[42rem] rounded-[2.8rem] bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_78%_16%,rgba(163,230,53,0.11),transparent_18%),radial-gradient(circle_at_50%_55%,rgba(56,189,248,0.10),transparent_28%)] blur-2xl"
          animate={{
            opacity: [0.8, 1, 0.85],
            scale: [1, 1.03, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.04fr_0.96fr]">
          <div className="relative">
            <motion.div
              aria-hidden="true"
              className="absolute -left-10 top-12 -z-10 h-56 w-56 rounded-full bg-cyan-400/14 blur-3xl"
              animate={{
                y: [0, -20, 0],
                x: [0, 6, 0],
                opacity: [0.65, 1, 0.7]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-44 top-64 -z-10 h-52 w-52 rounded-full bg-lime-300/10 blur-3xl"
              animate={{
                y: [0, 18, 0],
                x: [0, -8, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div variants={fadeUpFast} initial="hidden" animate="show">
              <SectionLabel>
                Professional technology solutions for modern businesses
              </SectionLabel>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.065em] text-white md:text-6xl lg:text-7xl xl:text-[6rem]"
            >
              A premium digital business built around{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-lime-300 bg-clip-text text-transparent">
                cloud, AI, automation, analytics, and growth
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.08 }}
              className="mt-7 max-w-3xl text-2xl leading-10 text-slate-300"
            >
              Datastruma LLC is the parent company behind a focused ecosystem of
              ventures spanning business technology, AI-driven operations,
              automation, analytics education, and digital innovation. We help
              organizations look sharper, operate better, and move with more
              leverage.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.14 }}
              className="mt-10 flex flex-wrap gap-5"
            >
              <PrimaryButton to="/offerings">Explore Our Offerings</PrimaryButton>
              <SecondaryButton to="/ventures">View Our Ventures</SecondaryButton>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-5 md:grid-cols-3"
            >
              {homeHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUpFast}
                    whileHover={{ y: -8, scale: 1.015 }}
                    transition={{ duration: 0.22 }}
                    className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-lime-300 text-slate-950 shadow-lg shadow-cyan-500/20">
                      <Icon size={22} />
                    </div>
                    <div className="text-[2rem] font-extrabold leading-tight tracking-tight">
                      {item.title}
                    </div>
                    <p className="mt-3 text-lg leading-8 text-slate-300">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-[2.6rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-lime-300/8 blur-2xl"
              animate={{
                opacity: [0.7, 1, 0.72],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 5.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_34px_90px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
            >
              <div className="grid gap-5">
                <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-gradient-to-br from-cyan-500/14 via-slate-900 to-lime-400/10 p-8 shadow-inner">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">
                        Positioning
                      </div>
                      <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight">
                        Professional offerings, not a one-note company
                      </h3>
                    </div>
                    <Sparkles className="mt-1 text-lime-300" />
                  </div>

                  <p className="mt-4 text-xl leading-10 text-slate-300">
                    Datastruma is presented as a premium, modern technology
                    company with a broader value proposition across digital
                    systems, AI, automation, analytics, and venture building.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {capabilityTiles.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.28 + idx * 0.1, duration: 0.55 }}
                        whileHover={{ y: -5 }}
                        className="rounded-[1.55rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur"
                      >
                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                          <Icon size={18} />
                        </div>
                        <div className="text-xl font-extrabold tracking-tight">
                          {item.title}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur">
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-lime-300">
                    Connected ecosystem
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {ecosystemTags.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.55rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-cyan-200">
                    <Building2 size={18} />
                  </div>
                  <div className="text-xl font-extrabold tracking-tight">
                    Professional presentation
                  </div>
                  <p className="mt-2 text-lg leading-8 text-slate-300">
                    A sleek, premium front-end for a broader company story across
                    cloud, AI, automation, analytics, and digital ventures.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={fadeUp}
        className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16"
      >
        <div className="mb-7 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <h2 className="text-5xl font-black tracking-tight">
            Where we help
          </h2>
          <p className="max-w-3xl text-xl leading-9 text-slate-300">
            We serve organizations and founders who want stronger systems,
            better workflows, sharper digital positioning, and more operating
            leverage.
          </p>
        </div>

        <motion.div
          variants={stagger}
          className="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        >
          {industries.map((item) => (
            <motion.div
              key={item}
              variants={fadeUpFast}
              whileHover={{ y: -4 }}
              className="flex items-start gap-3 rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)] backdrop-blur"
            >
              <CheckCircle2 className="mt-0.5 text-lime-300" size={18} />
              <div className="text-lg leading-8 text-slate-200">{item}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={fadeUp}
        className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16"
      >
        <motion.div
          whileHover={{ y: -3 }}
          className="rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-2xl md:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={companyInfo.founderImagePath}
                alt="Eugene Ebem"
                className="h-20 w-20 rounded-full border border-white/10 object-cover shadow-xl shadow-black/20"
              />
              <div>
                <div className="text-2xl font-extrabold tracking-tight">
                  Eugene Ebem
                </div>
                <div className="text-base text-slate-300">
                  Founder, Datastruma LLC • {companyInfo.established}
                </div>
                <div className="mt-1 text-base leading-8 text-slate-400">
                  Building practical platforms across AI, automation,
                  analytics, and digital ventures.
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-lg font-bold text-cyan-200 transition hover:text-white"
            >
              Learn more about the founder
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={sectionViewport}
        variants={fadeUp}
        className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16"
      >
        <div className="mb-7 grid gap-5 lg:grid-cols-[1fr_0.95fr] lg:items-end">
          <div>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 className="mt-4 text-5xl font-black tracking-tight">
              What people value about the Datastruma approach
            </h2>
          </div>

          <p className="max-w-2xl text-xl leading-9 text-slate-300">
            Positioned to feel premium, credible, and execution-focused — with a
            polished experience from first impression to delivery.
          </p>
        </div>

        <motion.div
          variants={stagger}
          className="grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.quote}
              variants={fadeUpFast}
              whileHover={{ y: -6 }}
              className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.04] to-cyan-500/[0.03] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition hover:border-cyan-400/20"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-lime-300 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                “
              </div>

              <p className="text-lg leading-9 text-slate-200">
                {item.quote}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="text-lg font-extrabold tracking-tight">{item.name}</div>
                <div className="text-base text-slate-400">{item.company}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}