import React, { useEffect, useState } from "react";
import { Contact } from "../Contact";
import { Link } from "react-router-dom";
import { useViewportScroll } from "framer-motion";

interface Props {}

export const Navbar = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useViewportScroll();

  useEffect(
    () => scrollY.onChange((v) => setScrolled(v > 8)),
    [scrollY]
  );

  const navItems = ["Home", "Journal", "Projects", "About", "Contact"].map(
    (item) => {
      if (item === "Contact") {
        return <Contact key={item} className="navItem" />;
      }
      return (
        <Link key={item} to={"/" + item} className="navItem">
          <span>{item}</span>
        </Link>
      );
    }
  );

  return (
    <nav
      className="navbar"
      style={{
        boxShadow: scrolled ? "0 3px 0 0 #ff5c00" : "none",
      }}
    >
      <Link to="/" className="zc-brand">
        <span className="brand-pixel" />
        <span className="brand-name">
          zac<span className="brand-dot">.</span>arlin
        </span>
      </Link>
      <div className="navLinks">{navItems}</div>
    </nav>
  );
};
