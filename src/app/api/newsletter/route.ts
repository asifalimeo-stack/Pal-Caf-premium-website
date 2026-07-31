import { NextResponse } from "next/server";

// Stores nothing yet — wire this up to your email provider (e.g. Mailchimp,
// Resend audiences) or a database table before relying on it in production.
export async function POST(request: Request) {
  const { email } = await request.json().catch(() => ({ email: undefined }));

  if (typeof email !== "string" || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  console.log("[newsletter signup]", email);
  return NextResponse.json({ ok: true });
}
