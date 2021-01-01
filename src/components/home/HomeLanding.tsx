import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../util/emoji";

interface Props {}

export const HomeLanding = (props: Props) => {
  return (
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
  );
};
