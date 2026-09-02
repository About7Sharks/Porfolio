import React, { useEffect, useState } from "react";
import { Contact } from "../Contact";
import { Link, useLocation } from "react-router-dom";
import { useViewportScroll } from "framer-motion";

interface Props {}

export const Navbar = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useViewportScroll();

  const active = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname === to;

  useEffect(
    () => scrollY.onChange((v) => setScrolled(v > 8)),
    [scrollY]
  );

  // close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  // close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = [
    { label: "Home", to: "/" },
    { label: "Journal", to: "/journal" },
    { label: "Projects", to: "/projects" },
    { label: "About", to: "/about" },
  ];

  const navItems = items.map((n) => (
    <Link
      key={n.to}
      to={n.to}
      className={"navItem" + (active(n.to) ? " is-active" : "")}
      onClick={() => setOpen(false)}
    >
      <span>{n.label}</span>
    </Link>
  ));
  navItems.push(<Contact key="contact" className="navItem" />);

  const barStyle = scrolled
    ? "0 3px 0 0 #ff5c00"
    : open
    ? "0 3px 0 0 #ff5c00"
    : "none";

  return (
    <nav
      className={"navbar" + (open ? " is-open" : "")}
      style={{ boxShadow: barStyle }}
    >
      <Link to="/" className="zc-brand" onClick={() => setOpen(false)}>
        <span className="brand-pixel" />
        <span className="brand-name">
          zac<span className="brand-dot">.</span>arlin
        </span>
      </Link>
      <div className={"navLinks" + (open ? " is-open" : "")}>{navItems}</div>
      <button
        className="nav-cmdk mono"
        title="Command palette (⌘K)"
        aria-label="Open command palette"
        onClick={() =>
          window.dispatchEvent(
            new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true })
          )
        }
      >
        <kbd>⌘</kbd><kbd>K</kbd>
      </button>
      <button
        className="nav-burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="navLinks"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="burger-line" />
        <span className="burger-line" />
        <span className="burger-line" />
      </button>
    </nav>
  );
};
