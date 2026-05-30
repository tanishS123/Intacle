import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { roles } from "../data/content";

export default function Careers() {
  return (
    <section id="careers" className="section-pad border-y border-zinc-200 bg-zinc-50 dark:border-white/10 dark:bg-black">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Careers"
            title="Build the kind of SAP practice senior clients trust."
            body="Join a focused consulting team where architecture, accountability, and business impact matter more than hierarchy."
          />
          <Button href="#contact" className="mt-8">
            Discuss opportunities
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-3">
            {roles.map((role) => (
              <div key={role} className="flex items-center justify-between border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.035]">
                <span className="font-black text-zinc-950 dark:text-white">{role}</span>
                <ArrowUpRight className="h-5 w-5 text-intacle-blue" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
