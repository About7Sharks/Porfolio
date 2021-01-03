import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

interface Props {}

export const ProjectHome = (props: Props) => {
  const controls = useAnimation();
  const projectRef = useRef(null);
  const onScreen = useOnScreen(projectRef, "-100px");

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
      className="homeProjects"
    >
      <h1>Projects</h1>
      <div className="div2">
        <img
          alt="projectPic"
          src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5edd8a5f4d7c220008625fff/screenshot.png"
        ></img>
        <p>Real-time fermenation monitor made with vue</p>
        <Link to={""}>Visit &#8594;</Link>
      </div>
      <div className="div3">
        <div>
          <img alt="projectPic" src={"/assets/situp.png"}></img>
          <p>AI Based running un browser for counting situps</p>
          <Link to={""}>Visit &#8594;</Link>
        </div>
      </div>
    </motion.div>
  );
};
