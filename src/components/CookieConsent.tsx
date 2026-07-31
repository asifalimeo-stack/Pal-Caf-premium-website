"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";

const STORAGE_KEY = "pal-cafe-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function decide(value: "accepted" | "declined") {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="glass fixed inset-x-4 bottom-4 z-50 flex flex-col gap-4 rounded-2xl border border-border p-5 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.35)] sm:inset-x-auto sm:right-5 sm:max-w-sm"
    >
      <p className="text-sm leading-relaxed text-text">
        We use a small number of cookies to keep Pal Café&apos;s website running smoothly and to
        understand how guests use it. No personal data is sold.
      </p>
      <div className="flex gap-3">
        <Button
          href="#"
          onClick={(e) => {
            e.preventDefault();
            decide("accepted");
          }}
          variant="primary"
          className="!px-4 !py-2 text-xs"
        >
          Accept
        </Button>
        <Button
          href="#"
          onClick={(e) => {
            e.preventDefault();
            decide("declined");
          }}
          variant="outline"
          className="!px-4 !py-2 text-xs"
        >
          Decline
        </Button>
      </div>
    </div>
  );
}
