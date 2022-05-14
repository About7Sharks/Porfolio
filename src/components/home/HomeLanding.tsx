import React from "react";
import clip from 'assets/clip.mp4'; 
import Poster from 'assets/compressUnder1MB.webp';  
import Button from "@material-ui/core/Button";
import { spinAnimationV2 } from "util/SpinAnimation";
interface Props { }

export const HomeLanding = (props: Props) => {

  return (
    <div className="homeLanding">
      <div className="div1">
        <h1 className="noFancy"> {spinAnimationV2("Zachary Carlin")}</h1>
        <h1>{spinAnimationV2("Software Engineer")}</h1>
        <p>
          A software engineer based in Tampa, FL with passions in{" "}
          <strong>web development</strong>, bodybuilding, and traveling.
          <br />
          <br />
          <Button
            key='ContactBTN'
            color="primary"
            variant="contained"
            onClick={() => {
              window.scrollTo(0, document.body.scrollHeight);
            }}
          >
            Lets Connect
          </Button>
        </p>
        <div id="scroll">
          Scroll &nbsp;
          <svg height="6" width="50">
            <line stroke="white" x1="0" y1="0" x2="50" y2="0" />
          </svg>
        </div>
      </div>
      {/* background div */}
    <video className="div2" autoPlay loop muted poster={Poster}>
            <source src={clip} type='video/mp4' />
            <source src={clip} type="video/ogg" /> 
    </video>
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
