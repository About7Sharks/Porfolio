import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, LazyMotion, domAnimation } from "framer-motion";
import sites from "../projects/sites";
import Button from "@material-ui/core/Button";
import { featuredProjects } from "../../Config";
import { spinAnimationV2, Cards, useOnScreen } from "../../util/index";
interface Props {}

const cleanSites = sites.filter((site) =>
  featuredProjects.includes(site.title)
);

export const ProjectHome = (props: Props) => {
  const controls = useAnimation();
  const projectRef = useRef();
  const onScreen = useOnScreen(projectRef, "350px");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
      });
    }
  }, [onScreen, controls]);
  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        ref={projectRef}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={controls}
        id="projectsHome"
        className="homeProjects"
      >
        <h1>{spinAnimationV2("Projects")}</h1>
        <Cards routeExternal={true} gridLayout="twoBytwo" data={cleanSites} />
        <div className="linkButton">
          <Button variant="outlined" component={Link} to="/Projects">
            View All
          </Button>
        </div>
      </motion.div>
    </LazyMotion>
  );
};
