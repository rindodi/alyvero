"use client";

import { useEffect } from "react";

export default function PWARegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js", {
        scope: "/",
        updateViaCache: "none",
      }).catch(() => {
        // PWA support is optional; the website remains fully usable if registration fails.
      });
    }
  }, []);

  return null;
}
