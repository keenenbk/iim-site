import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/methodology", label: "IIM Methodology" },
  { href: "/in-practice", label: "IIM in Practice" },
  { href: "/resources", label: "Resources" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex shrink-0 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/25 focus-visible:ring-offset-2"
        >
          <SiteLogo />
        </Link>
        <nav
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9375rem] font-semibold leading-normal text-body sm:justify-end sm:text-base"
          aria-label="Primary"
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
    </header>
  );
}
