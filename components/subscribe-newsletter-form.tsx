"use client";

import { useState, type FormEvent } from "react";

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
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const trimmed = email.trim();
    if (!trimmed) return;

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });

      if (!res.ok) {
        setError(true);
        return;
      }

      setSuccess(true);
      setEmail("");
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const inputBase =
    "min-h-12 w-full flex-1 rounded-lg px-4 py-3 text-base outline-none transition-[border-color,box-shadow]";

  const inputStyles =
    variant === "resourcesNavy" || variant === "blogNavy"
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

  const formLayout =
    variant === "resourcesNavy"
      ? "flex max-w-2xl flex-col gap-4 sm:flex-row sm:items-stretch"
      : "flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-stretch";

  if (success) {
    const successClass =
      variant === "resourcesNavy" || variant === "blogNavy"
        ? "text-emerald-300"
        : "text-emerald-600";
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
        className={`${formLayout} ${formClassName}`.trim()}
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
          placeholder={
            variant === "resourcesNavy" || variant === "blogNavy"
              ? "you@company.com"
              : "Work email"
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className={inputStyles}
        />
        <button
          type="submit"
          disabled={loading}
          className={buttonStyles}
        >
          {loading ? "Subscribing..." : submitLabel}
        </button>
      </form>
      {error ? (
        <p
          className={`mt-3 text-sm font-medium ${
            variant === "resourcesNavy" || variant === "blogNavy"
              ? "text-red-300"
              : "text-red-600"
          }`}
          role="alert"
        >
          Something went wrong. Please try again.
        </p>
      ) : null}
    </div>
  );
}
