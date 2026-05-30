import React from "react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import { contactOptions } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="section-pad bg-zinc-100 text-zinc-950 dark:bg-black dark:text-white">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-12 xl:px-20">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Bring certainty to your next SAP decision."
            body="Tell us where the ambiguity sits: strategy, readiness, delivery risk, data, integration, adoption, or operational continuity."
          />
          <div className="mt-10 grid gap-4 text-zinc-600 dark:text-zinc-300">
            <a href="mailto:hello@intacle.com" className="flex items-center gap-3 hover:text-intacle-blue">
              <Mail className="h-5 w-5" />
              hello@intacle.com
            </a>
            <a href="tel:+12125550184" className="flex items-center gap-3 hover:text-intacle-blue">
              <Phone className="h-5 w-5" />
              +1 212 555 0184
            </a>
            <span className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              United States
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form className="border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.035] sm:p-8" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                Name
                <input className="min-h-14 border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-intacle-blue dark:border-white/10 dark:bg-black dark:text-white" type="text" name="name" autoComplete="name" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                Work email
                <input className="min-h-14 border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-intacle-blue dark:border-white/10 dark:bg-black dark:text-white" type="email" name="email" autoComplete="email" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                Company
                <input className="min-h-14 border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-intacle-blue dark:border-white/10 dark:bg-black dark:text-white" type="text" name="company" autoComplete="organization" />
              </label>
              <label className="grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
                SAP priority
                <select className="min-h-14 border border-zinc-300 bg-white px-4 text-zinc-950 outline-none transition focus:border-intacle-blue dark:border-white/10 dark:bg-black dark:text-white" name="priority">
                  <option>S/4HANA transformation</option>
                  <option>Program assurance</option>
                  <option>Data readiness</option>
                  <option>Managed operations</option>
                </select>
              </label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold text-zinc-600 dark:text-zinc-300">
              Message
              <textarea className="min-h-36 border border-zinc-300 bg-white px-4 py-4 text-zinc-950 outline-none transition focus:border-intacle-blue dark:border-white/10 dark:bg-black dark:text-white" name="message" />
            </label>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {contactOptions.map((item) => (
                <span key={item.label} className="flex items-center gap-3 border border-zinc-200 px-4 py-3 text-sm font-bold text-zinc-600 dark:border-white/10 dark:text-zinc-300">
                  <item.icon className="h-4 w-4 text-intacle-blue" />
                  {item.label}
                </span>
              ))}
            </div>
            <button type="submit" className="mt-7 inline-flex min-h-14 w-full items-center justify-center gap-3 bg-intacle-blue px-6 font-black text-white transition hover:bg-blue-500 sm:w-auto">
              Request consultation
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
