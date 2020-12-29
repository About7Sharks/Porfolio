import anime from "animejs/lib/anime.es.js";
// receives event emmited from element and spins the el 360 degrees before removing the animation
const spinAnimation = (e) => {
  anime({
    targets: e.target,
    rotateY: 360,
    keyframes: [
      { scale: 1 },
      { scale: 1.3, opacity: Math.random(0, 1) },
      { scale: 1, opacity: 1 },
    ],

    //loop: true,
    duration: 1000,
    easing: "linear",
    complete: function (anim) {
      e.target.removeAttribute("style");
    },
  });
};
const slideAnimation = (e) => {
  console.log(e);
};
export { spinAnimation, slideAnimation };
