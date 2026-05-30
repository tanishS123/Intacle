import React from "react";

export default function SectionHeading({ eyebrow, title, body, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-black uppercase tracking-[0.35em] text-intacle-blue">{eyebrow}</p>
      <h2 className="mt-5 text-3xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">{body}</p>
      ) : null}
    </div>
  );
}
