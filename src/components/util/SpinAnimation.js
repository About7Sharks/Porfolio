import anime from "animejs/lib/anime.es.js";

const spinAnimation = (e) => {
  anime({
    targets: e.target,
    rotateY: 360,
    //loop: true,
    duration: 1000,
    easing: "linear",
    complete: function (anim) {
      e.target.removeAttribute("style");
    },
  });
};
export { spinAnimation };
