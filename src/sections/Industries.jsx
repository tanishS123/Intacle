import React from "react";
import { IconCard } from "../components/Card";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { industries } from "../data/content";

export default function Industries() {
  return (
    <section id="industries" className="section-pad bg-zinc-100 text-zinc-950 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="SAP fluency for complex operating environments."
            body="Intacle combines industry context with SAP delivery discipline across regulated, asset-intensive, and transaction-heavy enterprises."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.035}>
              <IconCard {...industry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
