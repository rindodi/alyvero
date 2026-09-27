"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span /><span />
      </button>
      <div className={`mobile-menu-backdrop${open ? " open" : ""}`} onClick={close} aria-hidden="true" />
      <nav id="mobile-navigation" className={`mobile-navigation${open ? " open" : ""}`} aria-label="Mobile navigation">
        <a href="/" onClick={close}>Home</a>
        <a href="/tools" onClick={close}>Tools</a>
        <a href="/guides" onClick={close}>Guides</a>
        <a href="/about" onClick={close}>About</a>
        <a href="/contact" onClick={close}>Contact</a>
      </nav>
    </>
  );
}
