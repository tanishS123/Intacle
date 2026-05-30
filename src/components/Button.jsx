import React from "react";
import { ArrowRight } from "lucide-react";

export default function Button({ children, href = "#contact", variant = "primary", className = "" }) {
  const styles =
    variant === "primary"
      ? "border-intacle-blue bg-intacle-blue text-white hover:bg-blue-500"
      : "border-zinc-300/70 bg-white/10 text-zinc-950 hover:border-intacle-blue hover:text-intacle-blue dark:border-white/20 dark:text-white";

  return (
    <a
      href={href}
      className={`inline-flex min-h-14 items-center justify-center gap-3 border px-6 text-sm font-extrabold transition duration-300 focus:outline-none focus:ring-2 focus:ring-intacle-blue focus:ring-offset-2 focus:ring-offset-intacle-black sm:px-8 ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
