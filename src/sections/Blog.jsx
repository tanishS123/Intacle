import React from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { blogPosts } from "../data/content";

export default function Blog() {
  return (
    <section id="blog" className="section-pad bg-white dark:bg-intacle-black">
      <div className="mx-auto max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Practical thinking for SAP leaders."
            body="Short, direct perspectives on transformation governance, SAP architecture, data readiness, and operational continuity."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.05}>
              <article className="group flex min-h-72 flex-col justify-between border border-zinc-200 bg-white p-6 transition hover:border-intacle-blue dark:border-white/10 dark:bg-intacle-panel">
                <div>
                  <div className="flex items-center justify-between gap-4 text-xs font-black uppercase tracking-[0.25em] text-intacle-blue">
                    <span>{post.tag}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="mt-10 text-2xl font-black leading-tight text-zinc-950 dark:text-white">{post.title}</h3>
                </div>
                <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-black text-zinc-700 transition group-hover:text-intacle-blue dark:text-zinc-300">
                  Read perspective
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
