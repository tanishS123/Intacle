import React from "react";

export function IconCard({ icon: Icon, title, body }) {
  return (
    <article className="group border border-zinc-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-intacle-blue hover:shadow-premium dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.06]">
      <div className="mb-7 flex h-12 w-12 items-center justify-center border border-zinc-200 bg-zinc-50 text-intacle-blue dark:border-white/10 dark:bg-black">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-zinc-950 dark:text-white">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{body}</p>
    </article>
  );
}

export function MetricCard({ metric, title, body }) {
  return (
    <article className="border border-zinc-200 bg-white p-6 dark:border-white/10 dark:bg-intacle-panel">
      <p className="text-4xl font-black text-intacle-blue">{metric}</p>
      <h3 className="mt-8 text-xl font-black text-zinc-950 dark:text-white">{title}</h3>
      <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400">{body}</p>
    </article>
  );
}
