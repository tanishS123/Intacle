import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import { stats } from "../data/content";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-6rem)] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/intacle-hero.png"
          alt=""
          className="h-full w-full object-cover brightness-[0.78] contrast-[1.28] saturate-[1.18] dark:brightness-[0.7]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-white/35 dark:bg-black/50" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.72)_42%,rgba(255,255,255,0.12)_100%)] dark:bg-[linear-gradient(90deg,rgba(0,0,0,0.96)_0%,rgba(0,0,0,0.76)_45%,rgba(0,0,0,0.18)_100%)]" />
        <div className="absolute inset-0 grid-overlay opacity-35" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-8xl items-center px-5 pb-24 pt-20 sm:px-8 lg:px-12 xl:px-20">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-3 border border-intacle-blue bg-black/85 px-5 py-3 text-xs font-black uppercase tracking-[0.32em] text-white shadow-blue backdrop-blur dark:bg-black/80"
          >
            <CheckCircle2 className="h-4 w-4" />
            North-America based SAP consulting
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-8 max-w-5xl text-5xl font-black leading-[0.96] tracking-normal text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            SAP Solutions for Modern Enterprises.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-7 max-w-3xl text-lg leading-8 text-zinc-700 dark:text-zinc-300 sm:text-xl"
          >
            We deliver focused SAP expertise across Integration Suite, Data Integration, S/4HANA, and BTP — built for businesses that demand precision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Button href="#contact">Talk to us →</Button>
            <Button href="#services" variant="secondary">
              Explore SAP services
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto -mt-24 max-w-8xl px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid border border-intacle-blue/40 bg-zinc-950/95 shadow-blue backdrop-blur-xl dark:border-intacle-blue/40 dark:bg-black/92 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="border-b border-white/10 p-6 sm:border-b-0 sm:border-r sm:last:border-r-0">
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="mt-2 text-zinc-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
