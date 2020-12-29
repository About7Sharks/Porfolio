import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../myscss.scss";
import Emoji from "../util/emoji";
import BookIcon from "@material-ui/icons/Book";
import { spinAnimation } from "../util/SpinAnimation";
import SliderProject from "../projects/sliderProjects";
import FeaturedPosts from "../journal/FeaturedPosts";
import SlidingAnimationWithScroll from "./SlidingAnimationWithScroll";
import { useTrail, useSprings, animated } from "react-spring";
import { duration } from "@material-ui/core";
import DragSlider from "../projects/DragSlider";
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
          <h1 className="">
            Hello,<br></br> I'm Zach
          </h1>

          <br></br>
          <p>
            A full stack software engineer based in Tampa, Fl with a passion for
            javascript and improving others lives
          </p>
        </div>

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
      {/* <DragSlider /> */}
      {/* <SlidingAnimationWithScroll
        text={[
          "Software Engineer",
          "Javascript",
          "Vue",
          "Node",
          "Typescript",
          "Linux",
        ]}
      /> */}
      <div className="homeProjects">
        <h1>Projects</h1>
        <div className="div2">
          <img src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5edd8a5f4d7c220008625fff/screenshot.png"></img>
          <p>Real-time fermenation monitor made with vue</p>
          <Link>Visit &#8594;</Link>
        </div>
        <div className="div3">
          <div>
            <img src={"http://192.168.0.43:3000" + "/assets/situp.png"}></img>
            <p>AI Based running un browser for counting situps</p>
            <Link>Visit &#8594;</Link>
          </div>
        </div>
      </div>
      <div className="homePosts">
        <h1>Journal Posts</h1>
        <div className="div2">
          <img src={"http://192.168.0.43:3000" + "/assets/situp.png"}></img>
          <Link>Read &#8594;</Link>
        </div>
        <div className="div3">
          <img src={"http://192.168.0.43:3000" + "/assets/situp.png"}></img>
          <Link>Read &#8594;</Link>
        </div>
      </div>
    </div>
  );
}
