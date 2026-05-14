"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <p className="text-base leading-[1.65] text-body" role="status">
        Thank you. We&apos;ll be in touch when the newsletter launches.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
    >
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-h-12 flex-1 rounded-lg border border-hairline bg-background px-4 py-3 text-base text-headline outline-none transition-[border-color,box-shadow] placeholder:text-body/60 focus:border-navy focus:ring-2 focus:ring-navy/15"
      />
      <button
        type="submit"
        className="min-h-12 shrink-0 rounded-lg bg-navy px-8 py-3 text-base font-semibold text-white shadow-sm transition-[background-color,transform,box-shadow] hover:bg-[#0c192f] hover:shadow-md active:scale-[0.99]"
      >
        Subscribe
      </button>
    </form>
  );
}
