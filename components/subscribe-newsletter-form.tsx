"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  NEWSLETTER_CONSENT_TEXT,
  NEWSLETTER_CONSENT_VERSION,
} from "@/lib/newsletter-consent";

export type SubscribeVariant = "footer" | "resourcesNavy" | "creamOnCream" | "blogNavy";

type SubscribeNewsletterFormProps = {
  variant: SubscribeVariant;
  inputId: string;
  /** Extra classes on the <form> element */
  formClassName?: string;
  /** Idle-state button label (loading always shows "Subscribing...") */
  submitLabel?: string;
};

export function SubscribeNewsletterForm({
  variant,
  inputId,
  formClassName = "",
  submitLabel = "Subscribe",
}: SubscribeNewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [consentError, setConsentError] = useState(false);

  const isNavy = variant === "resourcesNavy" || variant === "blogNavy";
  const consentId = `${inputId}-consent`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setConsentError(false);

    const trimmed = email.trim();
    if (!trimmed) return;

    if (!consent) {
      setConsentError(true);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: trimmed,
          consent: true,
          consentVersion: NEWSLETTER_CONSENT_VERSION,
          source:
            typeof window !== "undefined" ? window.location.href : undefined,
        }),
      });

      if (!res.ok) {
        setError(true);
        return;
      }

      setSuccess(true);
      setEmail("");
      setConsent(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "min-h-12 w-full flex-1 rounded-lg px-4 py-3 text-base outline-none transition-[border-color,box-shadow]";

  const inputStyles = isNavy
    ? `${inputBase} min-h-14 border border-white/20 bg-white/10 text-white placeholder:text-slate-400 focus:border-white/50 focus:ring-2 focus:ring-white/20`
    : `${inputBase} border border-hairline bg-background text-headline placeholder:text-body/60 focus:border-navy focus:ring-2 focus:ring-navy/15`;

  const buttonBase =
    "shrink-0 rounded-lg font-semibold shadow-sm transition-[background-color,transform,box-shadow] disabled:cursor-not-allowed disabled:opacity-80";

  const buttonStyles =
    variant === "resourcesNavy"
      ? `${buttonBase} min-h-14 bg-white px-10 py-4 text-base font-bold text-navy hover:shadow-md active:scale-[0.99]`
      : variant === "blogNavy"
        ? `${buttonBase} min-h-12 bg-white px-8 py-3 text-base font-bold text-navy hover:shadow-md active:scale-[0.99]`
        : `${buttonBase} min-h-12 bg-navy px-8 py-3 text-base text-white hover:bg-[#0c192f] hover:shadow-md active:scale-[0.99]`;

  const formWidth =
    variant === "resourcesNavy" ? "max-w-2xl" : "max-w-md";

  const privacyLinkClass = isNavy
    ? "font-semibold text-slate-200 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
    : "font-semibold text-navy underline decoration-navy/25 underline-offset-4 hover:decoration-navy";

  if (success) {
    const successClass = isNavy ? "text-emerald-300" : "text-emerald-600";
    return (
      <p className={`text-base font-medium ${successClass}`} role="status">
        You&apos;re subscribed! Check your inbox.
      </p>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className={`flex w-full ${formWidth} flex-col gap-3 ${formClassName}`.trim()}
      >
        <div
          className={
            variant === "resourcesNavy"
              ? "flex flex-col gap-4 sm:flex-row sm:items-stretch"
              : "flex flex-col gap-3 sm:flex-row sm:items-stretch"
          }
        >
          <label htmlFor={inputId} className="sr-only">
            Email address
          </label>
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder={isNavy ? "you@company.com" : "Work email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className={inputStyles}
          />
          <button type="submit" disabled={loading} className={buttonStyles}>
            {loading ? "Subscribing..." : submitLabel}
          </button>
        </div>
        <div className="space-y-2 text-left">
          <label
            htmlFor={consentId}
            className={`flex cursor-pointer items-start gap-3 text-sm leading-relaxed ${
              isNavy ? "text-slate-300" : "text-body"
            }`}
          >
            <input
              id={consentId}
              name="consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (e.target.checked) setConsentError(false);
              }}
              disabled={loading}
              className={`mt-0.5 size-4 shrink-0 rounded border ${
                isNavy
                  ? "border-white/40 bg-white/10 accent-white"
                  : "border-hairline accent-navy"
              }`}
            />
            <span>{NEWSLETTER_CONSENT_TEXT}</span>
          </label>
          <p
            className={`pl-7 text-sm leading-relaxed ${
              isNavy ? "text-slate-400" : "text-body"
            }`}
          >
            <Link href="/privacy" className={privacyLinkClass}>
              Privacy notice
            </Link>
            {" · "}
            UK GDPR, EU GDPR, and US CAN-SPAM
          </p>
        </div>
      </form>
      {consentError ? (
        <p
          className={`mt-3 text-sm font-medium ${
            isNavy ? "text-red-300" : "text-red-600"
          }`}
          role="alert"
        >
          Please confirm you consent to receiving the newsletter.
        </p>
      ) : null}
      {error ? (
        <p
          className={`mt-3 text-sm font-medium ${
            isNavy ? "text-red-300" : "text-red-600"
          }`}
          role="alert"
        >
          Something went wrong. Please try again.
        </p>
      ) : null}
    </div>
  );
}
