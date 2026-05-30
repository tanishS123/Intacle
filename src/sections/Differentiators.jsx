import React from "react";
import { IconCard } from "../components/Card";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { differentiators } from "../data/content";

export default function Differentiators() {
  return (
    <section className="section-pad bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Why Intacle"
            title="Consulting that makes the hard parts visible."
            body="The work is structured around leadership clarity, architecture integrity, delivery control, and enterprise adoption."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <IconCard {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
