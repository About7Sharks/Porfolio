import {config,hobbies} from 'Config'
import clip from 'assets/clip.mp4'; 
import Poster from 'assets/compressUnder1MB.webp';  
import Button from "@material-ui/core/Button";
import { spinAnimationV2 } from "util/index";
import {DivOverlay} from './Overlay'

export const HomeLanding = () => {

  return (
    <div className="homeLanding">
      <div className="div1">
        <h1 className="noFancy"> {spinAnimationV2(config.name)}</h1>
        <h1>{spinAnimationV2(config.JobTitle)}</h1>
        <p>
          A {`${config.JobTitle}`.toLowerCase()} based in {config.location} with passions in{" "}
          <strong>{hobbies[0]}</strong>, {hobbies[1]}, and {hobbies[2]}.
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
    <DivOverlay />
    </div>
  );
};
