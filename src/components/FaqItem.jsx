import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-zinc-200 py-5 dark:border-white/10">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-5 text-left"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
      >
        <span className="text-lg font-black text-zinc-950 dark:text-white">{question}</span>
        <Plus
          className={`h-5 w-5 shrink-0 text-intacle-blue transition duration-300 ${open ? "rotate-45" : ""}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pt-4 leading-7 text-zinc-600 dark:text-zinc-400">{answer}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
