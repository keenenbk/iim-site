"use client";

import Link from "next/link";
import { SubscribeNewsletterForm } from "@/components/subscribe-newsletter-form";

const BEEHIIV = "https://integratedimpactmarketing.beehiiv.com/";

export function ResourcesNewsletterBand() {
  return (
    <section className="bg-navy py-24 text-white sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Get IIM insights in your inbox
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-200 sm:text-xl">
            6,000+ marketers read the IIM newsletter every week.
          </p>
        </div>
        <div className="mx-auto mt-12 w-full max-w-2xl">
          <SubscribeNewsletterForm
            variant="resourcesNavy"
            inputId="resources-nl-email"
          />
        </div>
        <p className="mt-8 text-center">
          <Link
            href={BEEHIIV}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-slate-200 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
          >
            Or browse past issues at beehiiv →
          </Link>
        </p>
      </div>
    </section>
  );
}
