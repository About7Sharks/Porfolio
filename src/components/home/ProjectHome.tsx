import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import sites from "../projects/sites";
import Button from "@material-ui/core/Button";

import { Cards } from "../util/Cards";
import { spinAnimationV2 } from "../util/SpinAnimation";
interface Props {}
let good = [
  "Accubrew",
  "Meerkat",
  "Sit Up Coach",
  "Carlin Fitness",
  "Conways Game of Life using WebAssembly and Javascript",
  "Pose Bot",
];
const cleanSites = sites.filter((site) => good.includes(site.title));

export const ProjectHome = (props: Props) => {
  const controls = useAnimation();
  const projectRef = useRef(null);
  const onScreen = useOnScreen(projectRef, "350px");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [onScreen]);
  return (
    <motion.div
      ref={projectRef}
      initial={{ scale: 0, opacity: 0 }}
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
  );
};
