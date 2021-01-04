import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

interface Props {}

const useStyles = makeStyles({
  navbar: {
    zIndex: 100,
    listStyle: "none",
    color: "white",
    display: "flex",
    justifyContent: "center",
    right: "10px",
    top: "5px",
    position: "fixed",
  },
  navItem: {
    margin: "25px",
    transition: ".3s",
    color: "white",
    "&:hover": {
      color: "grey",
      transition: ".3s",
      borderBottom: "1px solid white",
    },
  },
});

export const Navbar = (props: Props) => {
  const classes = useStyles();
  const controls = useAnimation();
  controls.start({
    opacity: 1,
    scale: 1,
  });
  const navItems = ["Home", "Journal", "Projects", "About", "Contact"].map(
    (item) => {
      return (
        <Link to={"/" + item} className={classes.navItem}>
          {item}
        </Link>
      );
    }
  );
  return (
    <motion.ul
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{ duration: 1, delay: 2 }}
      animate={controls}
      className={classes.navbar}
    >
      {navItems}
    </motion.ul>
  );
};
