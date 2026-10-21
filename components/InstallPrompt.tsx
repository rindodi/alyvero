"use client";

import { useEffect, useState } from "react";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export default function InstallPrompt() {
  const [installEvent, setInstallEvent] = useState<InstallPromptEvent | null>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSHelp, setShowIOSHelp] = useState(false);
  const [dismissed, setDismissed] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    setDismissed(window.localStorage.getItem("alyvero-install-dismissed") === "1");
    setInstalled(
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true
    );

    const ua = navigator.userAgent;
    setIsIOS(/iPad|iPhone|iPod/.test(ua) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));

    const onBeforeInstall = (event: Event) => {
      event.preventDefault();
      setInstallEvent(event as InstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setInstallEvent(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const dismiss = () => {
    setDismissed(true);
    window.localStorage.setItem("alyvero-install-dismissed", "1");
  };

  const install = async () => {
    if (!installEvent) {
      setShowIOSHelp(true);
      return;
    }
    await installEvent.prompt();
    const choice = await installEvent.userChoice;
    if (choice.outcome === "accepted") setInstalled(true);
    setInstallEvent(null);
  };

  if (dismissed || installed || (!installEvent && !isIOS)) return null;

  return (
    <aside
      aria-label="Install Alyvero"
      style={{
        position: "fixed",
        zIndex: 1000,
        left: "max(16px, env(safe-area-inset-left))",
        right: "max(16px, env(safe-area-inset-right))",
        bottom: "max(16px, env(safe-area-inset-bottom))",
        maxWidth: 520,
        marginInline: "auto",
        padding: "16px",
        border: "1px solid #e3e7f2",
        borderRadius: 16,
        background: "#ffffff",
        color: "#172033",
        boxShadow: "0 12px 40px rgba(22, 34, 66, .18)",
        fontFamily: "inherit",
      }}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss install prompt"
        style={{
          position: "absolute",
          top: 8,
          right: 10,
          border: 0,
          background: "transparent",
          color: "#5c6475",
          fontSize: 22,
          lineHeight: 1,
          cursor: "pointer",
          padding: 4,
        }}
      >
        ×
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 12, paddingRight: 22 }}>
        <img src="/icon-192.png" width="48" height="48" alt="" style={{ borderRadius: 12 }} />
        <div>
          <strong style={{ display: "block", fontSize: 16 }}>Use Alyvero like an app</strong>
          <span style={{ display: "block", marginTop: 4, fontSize: 13, lineHeight: 1.45, color: "#596174" }}>
            Add it to your home screen for quicker access to your file tools.
          </span>
        </div>
      </div>
      {showIOSHelp ? (
        <p style={{ margin: "12px 0 0", fontSize: 13, lineHeight: 1.55 }}>
          In Safari, tap <strong>Share</strong>, then choose <strong>Add to Home Screen</strong> and tap <strong>Add</strong>.
        </p>
      ) : null}
      <button
        type="button"
        onClick={install}
        style={{
          display: "block",
          width: "100%",
          marginTop: 14,
          padding: "11px 16px",
          border: 0,
          borderRadius: 10,
          background: "#3155e7",
          color: "#fff",
          font: "inherit",
          fontWeight: 650,
          cursor: "pointer",
        }}
      >
        {isIOS && !installEvent ? "Show install instructions" : "Install Alyvero"}
      </button>
    </aside>
  );
}
