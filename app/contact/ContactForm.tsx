"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (formData.get("_honey")) {
      setStatus("sent");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.ok) {
        throw new Error(data?.error || "The message could not be sent.");
      }

      form.reset();
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "We couldn't send your message right now. Please try again in a moment.");
    }
  }

  if (status === "sent") {
    return (
      <div className="contact-form" role="status" aria-live="polite">
        <h2>Message sent</h2>
        <p>Your message has been sent to Alyvero. Thank you for contacting us. We&apos;ll get back to you as soon as possible.</p>
        <button className="primary" type="button" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_honey" value="" />

      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" required autoComplete="name" />

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required autoComplete="email" />

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows={7} required />

      {status === "error" && (
        <p role="alert" aria-live="assertive">{error}</p>
      )}

      <button className="primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
