import React, { useRef, useEffect } from "react";
import { useOnScreen } from "../util/useOnScreen";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useHistory } from "react-router-dom";
import { ProjectCards } from "../projects/ProjectCards";
import { spinAnimationV2 } from "../util/SpinAnimation";

let curatedArticles = [
  {
    title: "Ethereum Name Service",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
    text:
      "Making Ethereum easier to use is the main key for mass adoption of cryptocurrencies and blockchain technology.",
    tags: ["Blockchain"],
  },
  {
    title: "Ethereum Name Service",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
    text:
      "Making Ethereum easier to use is the main key for mass adoption of cryptocurrencies and blockchain technology.",
    tags: ["Blockchain"],
  },
  {
    title: "Ethereum Name Service",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
    text:
      "Making Ethereum easier to use is the main key for mass adoption of cryptocurrencies and blockchain technology.",
    tags: ["Blockchain"],
  },
  {
    title: "Ethereum Name Service",
    url: "local",
    img:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
    text:
      "Making Ethereum easier to use is the main key for mass adoption of cryptocurrencies and blockchain technology.",
    tags: ["Blockchain"],
  },
];

export const JournalHome = () => {
  const controls = useAnimation();
  const journalRef = useRef(null);
  const onScreen = useOnScreen(journalRef, "350px");

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
      initial={{ scale: 0, opacity: 0 }}
      transition={{ duration: 1 }}
      animate={controls}
      ref={journalRef}
      className="homePosts"
      id="journalHome"
    >
      <ProjectCards data={curatedArticles} gridLayout="twoBytwo" />
      <h1>{spinAnimationV2("Journal Posts")}</h1>
      {/* <Link to="/journal">View All</Link> */}
    </motion.div>
  );
};
