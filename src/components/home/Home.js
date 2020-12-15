import React from "react";
import { Link } from "react-router-dom";
import "../myscss.scss";
import Emoji from "../util/emoji";
import { spinAnimation } from "../util/SpinAnimation";
import AdaptiveDesign from "../util/AdaptiveDesign";
export default function Home() {
  return (
    <div className="Home">
      <AdaptiveDesign />
      <span>
        <p>
          Hi <Emoji symbol="👋" />, I'm Zach a fun loving
        </p>
        <h1>
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
        </h1>
      </span>
      <span>
        <Link to={"/journal"}>
          Journal <Emoji symbol="🗒️" />
        </Link>{" "}
        |
        <Link to={"/projects"}>
          Projects <Emoji symbol="🚧" />
        </Link>{" "}
        |
        <Link to={"/about"}>
          About <Emoji symbol="🤷" />
        </Link>
      </span>
    </div>
  );
}
