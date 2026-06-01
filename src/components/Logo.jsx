import React from "react";

export default function Logo() {
  return (
    <a href="#hero" className="group inline-flex items-center" aria-label="Intacle home">
      <img 
        src="/assets/logo-new.png" 
        alt="Intacle Logo" 
        className="h-[60px] sm:h-[72px] w-auto object-contain" 
      />
    </a>
  );
}
