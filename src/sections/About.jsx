import React from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { principles } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section-pad bg-white dark:bg-intacle-black">
      <div className="mx-auto grid max-w-8xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="About Intacle"
            title="Senior SAP advisors for enterprise leaders who cannot afford ambiguity."
            body="Intacle brings a disciplined consulting model to mission-critical SAP work: clear executive narratives, pragmatic delivery governance, and precise execution across  business and technology teams."
          />
          <div className="mt-10 divide-y divide-zinc-200 dark:divide-white/10">
            {principles.map((item, index) => (
              <div key={item} className="flex items-center justify-between gap-6 py-5">
                <p className="text-lg font-black text-zinc-950 dark:text-white">{item}</p>
                <span className="font-mono text-sm text-intacle-blue">0{index + 1}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative min-h-[520px] overflow-hidden border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-intacle-panel">
            <img
              src="/assets/intacle-hero.png"
              alt="Abstract enterprise SAP transformation visual"
              className="h-full min-h-[520px] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/20 to-transparent" />
            <div className="absolute bottom-0 right-0 max-w-md bg-black p-8 text-white">
              <p className="text-xs font-black uppercase tracking-[0.35em] text-intacle-blue">Delivery standard</p>
              <h3 className="mt-5 text-3xl font-black">Clarity at every stage</h3>
              <p className="mt-4 leading-7 text-zinc-300">
                From readiness to hypercare, stakeholders see the decisions, risks, and value signals that matter.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
