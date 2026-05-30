import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../data/content";
import Button from "./Button";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/92 backdrop-blur-xl dark:border-white/10 dark:bg-black/88">
      <nav className="mx-auto flex h-24 max-w-8xl items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-20">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-extrabold text-zinc-500 transition hover:text-intacle-blue dark:text-zinc-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />
          <Button className="min-h-11 px-6" href="#contact">
            Consult with us
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border border-zinc-200 text-zinc-700 dark:border-white/15 dark:text-white"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black lg:hidden"
          >
            <div className="grid gap-1 px-5 py-5">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border border-transparent px-4 py-4 text-base font-black text-zinc-700 transition hover:border-intacle-blue hover:text-intacle-blue dark:text-zinc-200"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#contact" className="mt-3 w-full">
                Consult with us
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
