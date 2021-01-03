import React from "react";
import { Link } from "react-router-dom";
import Emoji from "../util/emoji";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
interface Props {}

export const HomeLanding = (props: Props) => {
  return (
    <div className="Home">
      {/* <AdaptiveDesign /> */}

      <div className="div1">
        <h1>Zachary Carlin</h1>
        <p>
          A software engineer based in Tampa, FL with a passion for Javascrpit
          and improving the life's of others
        </p>
        {/* <span>
          <Link to={"/journal"}>
            Journal <Emoji symbol="🗒️" />
          </Link>
          <Link to={"/projects"}>
            Projects <Emoji symbol="🚧" />
          </Link>
          <Link to={"/about"}>
            About <Emoji symbol="🤷" />
          </Link>
        </span> */}
      </div>

      <div className="div2">
        <img
          id="homePageMainImg"
          alt="sexypants"
          src={"/assets/photo5.png"}
        ></img>
      </div>
      <span className="div4"></span>
      <div className="div3">
        <KeyboardArrowDownIcon />
        {/* <div id="scroll">
          Scroll &nbsp;
          <svg height="7.5" width="115">
            <line x1="0" y1="0" x2="50" y2="0" />
          </svg>
        </div> */}
        {/* <img
          id="homePageMainImg"
          alt="sexypants"
          src={"/assets/photo2.jpeg"}
        ></img> */}
      </div>
    </div>
  );
};
