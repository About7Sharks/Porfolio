import React, { useEffect, useRef } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Cards } from "../util/Cards";
import { spinAnimationV2 } from "../util/SpinAnimation";
import Button from "@material-ui/core/Button";
import {curatedArticles} from "./data";

export const JournalHome = () => {
  const controls = useAnimation();
  const journalRef = useRef(null);
  const onScreen = useOnScreen(journalRef, "0px");

  useEffect(() => {
    if (onScreen) {
      controls.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [onScreen, controls]);
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={controls}
      ref={journalRef}
      className="homePosts"
      id="journalHome"
    >
      <Cards
        routeExternal={false}
        data={curatedArticles}
        gridLayout="twoBytwo"
      />
      <h1>{spinAnimationV2("Journal Posts")}</h1>

      <div className="linkButton">
        <Button component={Link} to="/Journal">
          View All
        </Button>
      </div>
    </motion.div>
  );
};
