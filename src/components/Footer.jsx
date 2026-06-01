import React from "react";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { navItems } from "../data/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-white/10 dark:bg-black">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-12 xl:px-20">
        <div>
          <Logo />
          <p className="mt-6 max-w-lg leading-7 text-zinc-600 dark:text-zinc-400">
            Intacle helps enterprise leaders modernize SAP landscapes with disciplined advisory, delivery control, and operational clarity.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">Explore</h3>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-bold text-zinc-700 hover:text-intacle-blue dark:text-zinc-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.28em] text-zinc-500 dark:text-zinc-400">Connect</h3>
          <div className="mt-5 grid gap-4 text-zinc-600 dark:text-zinc-400">
            <a className="flex items-center gap-3 hover:text-intacle-blue" href="mailto:contact@intacle.com">
              <Mail className="h-5 w-5" />
              contact@intacle.com
            </a>
            {/* <a className="flex items-center gap-3 hover:text-intacle-blue" href="tel:+12125550184">
              <Phone className="h-5 w-5" />
              +1 212 555 0184
            </a> */}
            <span className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              Canada & India
            </span>
            <a className="flex items-center gap-3 hover:text-intacle-blue" href="https://www.linkedin.com/company/intacle-technologies/" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-200 px-5 py-6 text-sm text-zinc-500 dark:border-white/10 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto flex max-w-8xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} Intacle. All rights reserved.</p>
          <p>Enterprise SAP consulting for decisive transformation.</p>
        </div>
      </div>
    </footer>
  );
}
