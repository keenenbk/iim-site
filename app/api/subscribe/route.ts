import { NextResponse } from "next/server";
import {
  NEWSLETTER_CONSENT_VERSION,
  buildNewsletterConsentRecord,
} from "@/lib/newsletter-consent";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(request: Request): string | undefined {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || undefined;
  }
  return request.headers.get("x-real-ip") ?? undefined;
}

type SubscribeBody = {
  email?: unknown;
  consent?: unknown;
  consentVersion?: unknown;
  source?: unknown;
};

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const payload = body as SubscribeBody;

  if (typeof payload.email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const email = payload.email.trim();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (payload.consent !== true) {
    return NextResponse.json(
      { error: "Consent is required" },
      { status: 400 },
    );
  }

  if (
    payload.consentVersion !== undefined &&
    payload.consentVersion !== NEWSLETTER_CONSENT_VERSION
  ) {
    return NextResponse.json(
      { error: "Consent text has changed. Please refresh and opt in again." },
      { status: 400 },
    );
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  const source =
    typeof payload.source === "string" && payload.source.startsWith("http")
      ? payload.source.slice(0, 500)
      : undefined;

  const consentRecord = buildNewsletterConsentRecord({
    email,
    source,
    ip: clientIp(request),
    userAgent: request.headers.get("user-agent") ?? undefined,
  });

  console.info(JSON.stringify(consentRecord));

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!publicationId || !apiKey) {
    return NextResponse.json(
      { error: "Newsletter is not configured" },
      { status: 500 },
    );
  }

  const url = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;
  const baseSubscription = {
    email,
    reactivate_existing: true,
    send_welcome_email: true,
    utm_source: "website",
    utm_medium: "newsletter_form",
    utm_campaign: "gdpr_consent",
    referring_site: source,
  };

  async function createSubscription(
    bodyPayload: Record<string, unknown>,
  ): Promise<Response> {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyPayload),
    });
  }

  let beehiivRes: Response;
  try {
    beehiivRes = await createSubscription({
      ...baseSubscription,
      custom_fields: [
        { name: "gdpr_consent", value: "true" },
        { name: "gdpr_consent_at", value: consentRecord.timestamp },
        { name: "gdpr_consent_version", value: consentRecord.version },
      ],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach subscription service" },
      { status: 502 },
    );
  }

  if (!beehiivRes.ok) {
    try {
      beehiivRes = await createSubscription(baseSubscription);
    } catch {
      return NextResponse.json(
        { error: "Failed to reach subscription service" },
        { status: 502 },
      );
    }
  }

  const raw = await beehiivRes.text();
  let data: unknown = null;
  try {
    data = raw ? JSON.parse(raw) : null;
  } catch {
    data = { raw };
  }

  if (!beehiivRes.ok) {
    return NextResponse.json(
      {
        error: "Subscription failed",
        details: data,
      },
      { status: beehiivRes.status >= 400 ? beehiivRes.status : 502 },
    );
  }

  return NextResponse.json({
    success: true,
    consent: {
      recorded: true,
      timestamp: consentRecord.timestamp,
      version: consentRecord.version,
      method: consentRecord.method,
    },
    data,
  });
}
