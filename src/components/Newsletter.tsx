"use client";

import { useState } from "react";

export function Newsletter({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className={`text-sm text-accent ${className}`}>
        Thanks — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex w-full max-w-sm gap-2 ${className}`}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-text placeholder:text-text-soft focus:border-accent focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="shrink-0 rounded-full bg-espresso px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-espresso-deep disabled:opacity-60"
      >
        {status === "loading" ? "..." : "Join"}
      </button>
      {status === "error" ? (
        <span className="sr-only" role="alert">
          Something went wrong, please try again.
        </span>
      ) : null}
    </form>
  );
}
