import React, { useEffect, useState } from "react";
import {Contact} from "../Contact";
import { Link } from "react-router-dom";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
interface Props {}

export const Navbar = (props: Props) => {
  // const classes = useStyles();
  const controls = useAnimation();
  let [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useViewportScroll();

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        setScrollY(latest);
      }),
    [scrollYProgress]
  );

  controls.start({
    opacity: 1,
    scale: 1,
  });
  const navItems = ["Home", "Journal", "Projects", "About", "Contact"].map(
    (item) => {
      if (item === "Contact") {
        return (
          <Contact key={item} className="navItem" />
        );
      }
      return (
        <Link key={item} to={"/" + item} className="navItem">
          <span> {item}</span>
        </Link>
      );
    }
  );
  return (
    <>
      <motion.nav
        initial={{ scale: 0, opacity: 0 }}
        style={{ backgroundColor: `rgba(0,0,0,${scrollY * 10})` }}
        transition={{ duration: 1, delay: 2 }}
        animate={controls}
        className="navbar"
      >
        {navItems}
      </motion.nav>
    </>
  );
};
