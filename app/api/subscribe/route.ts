import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("email" in body) ||
    typeof (body as { email: unknown }).email !== "string"
  ) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const email = (body as { email: string }).email.trim();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
  }

  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;
  const apiKey = process.env.BEEHIIV_API_KEY;

  if (!publicationId || !apiKey) {
    return NextResponse.json(
      { error: "Newsletter is not configured" },
      { status: 500 },
    );
  }

  const url = `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`;

  let beehiivRes: Response;
  try {
    beehiivRes = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        send_welcome_email: true,
      }),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to reach subscription service" },
      { status: 502 },
    );
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

  return NextResponse.json({ success: true, data });
}
