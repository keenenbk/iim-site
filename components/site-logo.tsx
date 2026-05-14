"use client";

import { useState } from "react";

export function SiteLogo() {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <span className="flex items-center gap-2.5">
        <span
          className="h-9 w-2 shrink-0 rounded-[1px] bg-navy"
          aria-hidden
        />
        <span className="font-serif text-xl font-extrabold tracking-tight text-headline sm:text-2xl">
          Integrated Impact Modeling
        </span>
      </span>
    );
  }

  return (
    // Native img: reliable SVG rendering + onError fallback if asset missing
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Integrated Impact Modeling"
      width={180}
      height={40}
      className="block h-10 w-[180px] object-contain object-left"
      decoding="async"
      onError={() => setUseFallback(true)}
    />
  );
}
