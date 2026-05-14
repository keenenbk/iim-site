"use client";

import Link from "next/link";
import { type FormEvent } from "react";

const BEEHIIV = "https://integratedimpactmarketing.beehiiv.com/";

export function ResourcesNewsletterBand() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(BEEHIIV, "_blank", "noopener,noreferrer");
  }

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
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-12 flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-stretch"
        >
          <label htmlFor="resources-nl-email" className="sr-only">
            Email address
          </label>
          <input
            id="resources-nl-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className="min-h-14 flex-1 rounded-lg border border-white/20 bg-white/10 px-5 py-4 text-base text-white outline-none backdrop-blur-sm transition-[border-color,box-shadow] placeholder:text-slate-400 focus:border-white/50 focus:ring-2 focus:ring-white/20"
          />
          <button
            type="submit"
            className="min-h-14 shrink-0 rounded-lg bg-white px-10 py-4 text-base font-bold text-navy shadow-sm transition-[transform,box-shadow] hover:shadow-md active:scale-[0.99]"
          >
            Subscribe
          </button>
        </form>
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
