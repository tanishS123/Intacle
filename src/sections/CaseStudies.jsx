import React from "react";
import { MetricCard } from "../components/Card";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { caseStudies } from "../data/content";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-pad bg-white dark:bg-intacle-black">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Evidence that reads like an operating report."
            body="Selected examples of how Intacle brings structure, accountability, and measurable momentum to enterprise SAP initiatives."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.title} delay={index * 0.05}>
              <MetricCard {...study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
