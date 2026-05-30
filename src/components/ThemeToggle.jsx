import React from "react";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((prev) => !prev)}
      className="grid h-11 w-11 place-items-center border border-zinc-200 text-zinc-700 transition duration-300 hover:border-intacle-blue hover:text-intacle-blue dark:border-white/15 dark:text-white dark:hover:border-intacle-blue dark:hover:text-intacle-blue"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
