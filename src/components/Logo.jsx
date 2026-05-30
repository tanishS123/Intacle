import React from "react";

export default function Logo() {
  return (
    <a href="#hero" className="group inline-flex items-center gap-3" aria-label="Intacle home">
      <span className="relative grid h-12 w-12 place-items-center bg-intacle-blue text-2xl font-black text-white shadow-blue sm:h-14 sm:w-14">
        <span className="absolute -right-1 -top-1 h-5 w-5 border-2 border-white bg-intacle-blue dark:border-white" />
        I
      </span>
      <span className="leading-none">
        <span className="block text-xl font-black tracking-normal text-zinc-950 dark:text-white sm:text-2xl">
          Intacle
        </span>
        <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-zinc-500 dark:text-zinc-400">
          SAP Consulting
        </span>
      </span>
    </a>
  );
}
