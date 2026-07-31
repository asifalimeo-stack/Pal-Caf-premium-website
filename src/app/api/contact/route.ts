import { NextResponse } from "next/server";

// Logs the message only — connect a transactional email service (e.g. Resend,
// SendGrid) or forward to the café's inbox before relying on this in production.
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { name, email, message } = body ?? {};

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  console.log("[contact form]", { name, email, message });
  return NextResponse.json({ ok: true });
}
