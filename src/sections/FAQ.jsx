import React from "react";
import FaqItem from "../components/FaqItem";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { faqs } from "../data/content";

export default function FAQ() {
  return (
    <section id="faq" className="section-pad bg-white dark:bg-intacle-black">
      <div className="mx-auto grid max-w-8xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions enterprise teams ask before engaging."
            body="A concise view of how Intacle partners with leadership, delivery teams, and SAP stakeholders."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
