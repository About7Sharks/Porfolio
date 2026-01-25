import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";

export const spinAnimation = (e: { target: HTMLElement }) => {
  anime({
    targets: e.target,
    rotateY: 360,
    keyframes: [
      { scale: 1, color: "#" + (((1 << 24) * Math.random()) | 0).toString(16) },
      { scale: 1 },
      { scale: 1 },
    ],
    duration: 1000,
    easing: "linear",
    complete: function () {
      e.target.removeAttribute("style");
    },
  });
};

export const spinAnimationV2 = (words: string) => {
  return [...words].map((letter, i) => {
    if (letter === " ") return <span key={i + "space"}> </span>;
    return (
      <motion.span
        key={`${i}+${letter}`}
        onHoverStart={(e) => {
          spinAnimation(e as unknown as { target: HTMLElement });
        }}
      >
        {letter}
      </motion.span>
    );
  });
};
