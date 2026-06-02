import React from "react";

export default function Logo() {
  return (
    <a
      href="#hero"
      className="group inline-flex items-center"
      aria-label="Intacle home"
    >
      <img
        src="/assets/logo-new.png"
        alt="Intacle Logo"
        className="h-[90px] md:h-[100px] lg:h-[110px] w-auto object-contain"
      />
    </a>
  );
}