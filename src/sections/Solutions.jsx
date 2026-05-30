import React from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { solutions } from "../data/content";

export default function Solutions() {
  return (
    <section id="solutions" className="section-pad bg-white dark:bg-intacle-black">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Solutions"
            title="Operating systems for transformation certainty."
            body="Intacle packages repeatable consulting patterns into focused solution plays that accelerate decisions without losing control."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-px bg-zinc-200 dark:bg-white/10 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Reveal key={solution.title} delay={index * 0.04}>
              <article className="min-h-72 bg-white p-7 dark:bg-intacle-black sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.32em] text-intacle-blue">{solution.eyebrow}</p>
                <h3 className="mt-8 text-2xl font-black text-zinc-950 dark:text-white">{solution.title}</h3>
                <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">{solution.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
