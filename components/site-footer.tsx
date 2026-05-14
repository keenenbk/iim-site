import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";

const nav = [
  { href: "/", label: "Home" },
  { href: "/methodology", label: "IIM Methodology" },
  { href: "/in-practice", label: "IIM in Practice" },
  { href: "/resources", label: "Resources" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_auto] lg:gap-20">
          <div className="space-y-8">
            <p className="max-w-xl font-serif text-2xl font-bold leading-snug text-headline sm:text-3xl sm:leading-snug">
              Integrated Impact Modeling (IIM) — The Science Behind Smarter
              Marketing
            </p>
            <nav
              className="flex flex-wrap gap-x-6 gap-y-2 text-base font-semibold leading-normal text-body"
              aria-label="Footer"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-headline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="lg:max-w-md">
            <p className="mb-3 font-serif text-lg font-bold text-headline">
              Newsletter
            </p>
            <p className="mb-6 text-base leading-[1.7] text-body">
              Occasional updates on methodology, measurement, and applied
              research. No spam.
            </p>
            <NewsletterForm />
          </div>
        </div>
        <p className="mt-20 border-t border-hairline pt-10 text-base text-body">
          Copyright © 2025 Integrated Impact Modeling (IIM).
        </p>
      </div>
    </footer>
  );
}
