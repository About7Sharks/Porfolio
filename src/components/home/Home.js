import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../myscss.scss";
import Emoji from "../util/emoji";
import { spinAnimation } from "../util/SpinAnimation";
import SliderProject from "../projects/sliderProjects";
import FeaturedPosts from "../journal/FeaturedPosts";
import SlidingAnimationWithScroll from "./SlidingAnimationWithScroll";
// import AdaptiveDesign from "../util/AdaptiveDesign";

// const typingEffect = () => {
//   let i = 0;
//   let loop = 0;
//   let text = ["com", "dev", "eth", "snazy"];
//   setInterval(() => {
//     if (text[loop].length <= i) {
//       document.getElementById("typeEffect").innerHTML = document
//         .getElementById("typeEffect")
//         .innerHTML.slice(
//           0,
//           document.getElementById("typeEffect").innerHTML.indexOf(".") + 1
//         );
//       i = 0;
//       loop === text.length - 1 ? (loop = 0) : loop++;
//     } else {
//       document.getElementById("typeEffect").innerHTML += text[loop].charAt(i);
//       i++;
//     }
//   }, 500);
//   console.log(loop);
// };
const scrollAnimation = () => {
  let offset = 100 - window.scrollY / 3;
  offset < 0 ? (offset = 0) : console.log("");
  document
    .getElementById("homePageMainImg")
    .setAttribute(
      "style",
      `mask-position: ${offset}%  100%; -webkit-mask-position: ${offset}% 100%`
    );
};
export default function Home() {
  useEffect(() => {
    document.addEventListener("scroll", scrollAnimation);
    return () => {
      document.removeEventListener("scroll", scrollAnimation);
    };
  }, []);
  return (
    <div>
      <div className="Home">
        {/* <AdaptiveDesign /> */}
        <div className="div1">
          <h1>
            Hello,<br></br> I'm Zach
          </h1>
          <br></br>
          <p>
            A full stack software engineer based in Tampa, Fl with a passion for
            javascript and improving others lives
          </p>
        </div>
        {/* <h1>
          {[..."Software Engineer"].map((letter, i) => {
            return (
              <span
                key={i}
                onMouseOver={(e) => {
                  spinAnimation(e);
                }}
              >
                {letter}
              </span>
            );
          })}
          <div className="showHide">_</div>
        </h1> */}
        <div className="div2">
          <img
            id="homePageMainImg"
            alt="sexypants"
            src={"/assets/photo2.jpeg"}
          ></img>
        </div>
        <span className="div4">
          <Link to={"/journal"}>
            Journal <Emoji symbol="🗒️" />
          </Link>
          <Link to={"/projects"}>
            Projects <Emoji symbol="🚧" />
          </Link>
          <Link to={"/about"}>
            About <Emoji symbol="🤷" />
          </Link>
        </span>
        <div className="div3">
          <div id="scroll">
            Scroll &nbsp;
            <svg height="7.5" width="115">
              <line x1="0" y1="0" x2="50" y2="0" />
            </svg>
          </div>
        </div>
      </div>
      <SlidingAnimationWithScroll text={["Software Engineer"]} />
      <div className="homeProjects">
        <h1>Projects</h1>
        <SliderProject />
        <div>
          <h1>Featured Posts</h1>
          <FeaturedPosts />
        </div>
      </div>
    </div>
  );
}
