import { config } from '../../Config'
import clip from '../../assets/clip.mp4'; 
import Poster from '../../assets/Background.webp';  
import Button from "@material-ui/core/Button";
import { spinAnimationV2 } from "../../util/index";
import { DivOverlay } from './Overlay'
import { useContactForm } from "../../contexts/ContactFormContext";

export const HomeLanding = () => {
  const { setPopupOpen } = useContactForm();

  return (
    <div className="homeLanding">
      <div className="div1">
        <h1 className="noFancy">{spinAnimationV2(config.name)}</h1>
        <h1>{spinAnimationV2(config.JobTitle)}</h1>
        <p>
          A {`${config.JobTitle}`.toLowerCase()} based in {config.location} with passions in{" "}
          <strong>Web Development, Bodybuilding, and Traveling.</strong>
          <br />
          <br />
          <Button
            key='ContactBTN'
            color="primary"
            variant="contained"
            onClick={() => setPopupOpen(true)}
          >
            Lets Connect
          </Button>
        </p>

      </div>
      {/* background div */}
    <video className="div2" preload='auto' autoPlay muted playsInline loop poster={Poster}>
            <source src={clip} type='video/mp4' />
            <source src={clip} type="video/ogg" /> 
    </video>
    <DivOverlay />
    </div>
  );
};
