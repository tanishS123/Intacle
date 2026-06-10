import React from "react";

export default function Logo() {
  return (
    <a
      href="#hero"
      className="group inline-flex items-center"
      aria-label="Intacle home"
    >
      <img
        src="/assets/intacle_logo.png"
        alt="Intacle Logo"
        className="h-[140px] md:h-[100px] lg:h-[110px] w-auto object-contain dark:hidden"
      />
      <img
        src="/assets/Intacle_dark_logo.png"
        alt="Intacle Logo"
        className="hidden h-[140px] md:h-[100px] lg:h-[110px] w-auto object-contain dark:block"
      />
    </a>
  );
}
