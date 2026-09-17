export const NEWSLETTER_CONSENT_VERSION = "2026-09-17";

export const NEWSLETTER_CONSENT_TEXT =
  "I consent to Integrated Impact Modeling (IIM) sending me newsletter emails about marketing measurement and research. I can withdraw this consent at any time by unsubscribing.";

export type NewsletterConsentRecord = {
  type: "newsletter_consent";
  email: string;
  consented: true;
  method: "web_checkbox";
  text: string;
  version: string;
  timestamp: string;
  source?: string;
  ip?: string;
  userAgent?: string;
};

export function buildNewsletterConsentRecord(input: {
  email: string;
  source?: string;
  ip?: string;
  userAgent?: string;
}): NewsletterConsentRecord {
  return {
    type: "newsletter_consent",
    email: input.email,
    consented: true,
    method: "web_checkbox",
    text: NEWSLETTER_CONSENT_TEXT,
    version: NEWSLETTER_CONSENT_VERSION,
    timestamp: new Date().toISOString(),
    source: input.source,
    ip: input.ip,
    userAgent: input.userAgent,
  };
}
