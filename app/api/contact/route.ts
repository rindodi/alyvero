import { NextResponse } from "next/server";

const TO_EMAIL = "rindodi@gmail.com";
const FROM_EMAIL = "Alyvero <hello@alyvero.co.ke>";

function clean(value: FormDataEntryValue | null, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    const name = clean(form.get("name"), 120);
    const email = clean(form.get("email"), 320);
    const message = clean(form.get("message"), 5000);
    const honey = clean(form.get("_honey"), 200);

    if (honey) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Please complete all fields." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Email service is not configured yet." }, { status: 503 });
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Alyvero contact form — ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      console.error("Resend error:", result);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again in a moment." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: result?.id ?? null });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again in a moment." },
      { status: 500 }
    );
  }
}
