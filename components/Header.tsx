"use client";

import { useState } from "react";

const links = [
  ["Product", "#product"],
  ["Features", "#features"],
  ["How It Works", "#how-it-works"],
  ["Beta", "#beta"],
  ["Contact", "#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#top" aria-label="SMJ Data and AI Solutions home">
          <span className="brand-mark">SMJ</span>
          <span>SMJ Data <span className="brand-amp">&amp;</span> AI Solutions</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
          <span className="sr-only">Toggle navigation</span>
          <span/><span/><span/>
        </button>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="button button-small" href="#beta-form" onClick={() => setOpen(false)}>Join Beta</a>
        </nav>
      </div>
    </header>
  );
}
