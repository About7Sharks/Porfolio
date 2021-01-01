import React, { useEffect, useRef, useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import {
  motion,
  useMotionValue,
  transform,
  useViewportScroll,
} from "framer-motion";

//this component expects an array of string which it will render in vertical columns
// these columns transform along the x axis when the user scrolls
type slideProps = {
  text: string[];
};
export const SlidingAnimationWithScroll = ({ text }: slideProps) => {
  const listRef = useRef(null);
  const { scrollYProgress } = useViewportScroll();
  let [scrollY, setScrollY] = useState(0);
  // console.log(scrollYProgress);
  // console.log(scrollYProgress.get());

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1.3,
        staggerChildren: 0.5,
      },
    },
  };

  const itemAnimation = {
    hidden: { y: 20, opacity: 0, scale: 0 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1.2,
    },
  };

  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        // console.log(latest * 100);
        setScrollY(latest);
      }),
    []
  );
  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="visible"
      id="list"
      ref={listRef}
      className="slideList"
    >
      {text.map((item, i) => {
        return (
          <motion.li
            variants={itemAnimation}
            animate={{
              x: (i % 2 ? -1 : 1) * scrollY * 20 + "%",
              //   opacity: scrollY * 3,
            }}
            style={{ color: "white" }}
            key={i}
          >
            <h4>{item}</h4>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
