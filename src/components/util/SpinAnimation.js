import anime from "animejs/lib/anime.es.js";
import { motion } from "framer-motion";
// receives event emmited from element and spins the el 360 degrees before removing the animation
const spinAnimation = (e) => {
  anime({
    targets: e.target,
    rotateY: 360,
    keyframes: [
      { scale: 1, color: "#" + (((1 << 24) * Math.random()) | 0).toString(16) },
      { scale: 1 }, // },
      { scale: 1 }, // opacity: 1 },
    ],

    //loop: true,
    duration: 1000,
    easing: "linear",
    complete: function (anim) {
      e.target.removeAttribute("style");
    },
  });
};

const spinAnimationV2 = (words) => {
  return [...words].map((letter, i) => {
    if (letter === " ") return <span  key={i+'space'}> </span>;
    return (
      <motion.span
        key={`${i}+${letter}`}
        onHoverStart={(e) => {
          spinAnimation(e);
        }}
      // whileHover={{ scale: 1.1 }}
      >
        {letter}
      </motion.span>
    );
  });
};
export { spinAnimation, spinAnimationV2 };
