import React from "react";
import { IconCard } from "../components/Card";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="services" className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="SAP Services"
            title="The advisory depth and delivery muscle SAP programs need."
            body="Every service is built for executive confidence and practical execution, from early readiness through enterprise-scale operations."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.035}>
              <IconCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
