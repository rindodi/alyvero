"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 14l6-6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
