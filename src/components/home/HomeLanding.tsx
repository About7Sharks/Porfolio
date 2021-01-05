import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";
import { motion, useAnimation } from "framer-motion";
import { spinAnimationV2 } from "../util/SpinAnimation";
interface Props {}

export const HomeLanding = (props: Props) => {
  const controls = useAnimation();
  controls.start({
    opacity: 1,
    scale: 1,
  });
  return (
    <div className="Home">
      <div className="div1">
        <h1 className="noFancy"> {spinAnimationV2("Zachary Carlin")}</h1>
        <h1>{spinAnimationV2("Software Engineer")}</h1>
        <p>
          A software engineer based in Tampa, FL with passions in{" "}
          <strong>web development</strong>, bodybuilding, and traveling.
          <br />
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              document.getElementById("projectsHome")?.scrollIntoView();
            }}
          >
            Lets Connect
          </Button>
          {/* &nbsp;
          <Button
            variant="contained"
            onClick={() => {
              document.getElementById("journalHome")?.scrollIntoView();
            }}
          >
            Read Journal
          </Button> */}
        </p>
        <div id="scroll">
          Scroll &nbsp;
          <svg height="6" width="50">
            <line stroke="white" x1="0" y1="" x2="50" y2="0" />
          </svg>
        </div>
      </div>
      {/* background Image div */}
      <div className="div2"></div>
      <div className="div2Overlay">
        <svg width="400" height="110">
          <rect
            width="300"
            height="100"
            style={{
              fill: "none",
              strokeWidth: 10,
              stroke: "#f54768",
            }}
          />
        </svg>
        <svg width="400" height="110">
          <rect
            width="300"
            height="100"
            style={{
              fill: "none",
              strokeWidth: 7,
              stroke: "#8bd76b",
            }}
          />
        </svg>
      </div>
    </div>
  );
};
