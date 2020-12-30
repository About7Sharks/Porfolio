import React, { useState, useEffect } from "react";
import sites from "./sites.js"; //my sites data
import { Button } from "@material-ui/core";
import Emoji from "../util/emoji";
import Tooltip from "@material-ui/core/Tooltip";
import ProjectSlider from "./sliderProjects";
import Picker from "../util/Picker";
import "./projects.scss";
import DirectionReveal from "direction-reveal";
import "direction-reveal/src/styles/direction-reveal.scss";

const projectsList = (e, filter) => {
  let dog = sites;
  if (filter !== undefined && filter !== "All") {
    dog = sites.filter((site) => {
      return site.tags.includes(filter);
    });
  }
  return dog.map((site) => {
    let tagButtons = site.tags.map((tag) => (
      <Button color="default" variant="outlined" key={tag} size="small">
        {tag}
      </Button>
    ));
    return (
      <div key={site.url} className="direction-reveal card">
        <a
          href={site.url}
          className="direction-reveal__card"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={site.img}
            alt={site.url}
            className="direction-reveal__img"
          />

          <div className="direction-reveal__overlay direction-reveal__anim--enter">
            <h3 className="direction-reveal__title">{site.title}</h3>
            <p className="direction-reveal__text">{site.text}</p>
            <div className="actions">Tags: &nbsp; {tagButtons}</div>
          </div>
        </a>
      </div>
    );
  });
};

export default function Projects() {
  const [projects, updateProjects] = useState({
    projects: projectsList(),
  });
  const [view, setView] = useState(false);

  useEffect(() => {
    const directionRevealDemo = DirectionReveal();

    // Init with all options at default setting
    const directionRevealDefault = DirectionReveal({
      selector: ".direction-reveal",
      itemSelector: ".direction-reveal__card",
      animationName: "swing",
      animationPostfixEnter: "enter",
      animationPostfixLeave: "leave",
      enableTouch: true,
      touchThreshold: 250,
    });
  });
  // updates site list from picker comp
  const handleChange = (e, i) => {
    updateProjects({ projects: projectsList(e, i) });
  };
  const changeView = () => {
    setView(!view);
  };
  return (
    <div id="projects" className="projects">
      <h1>Projects</h1>
      <p>
        Here you can find sites that i'm currently hosting on the interwebs
        <Emoji symbol="🕸️" />
      </p>

      <span>
        <Tooltip title="Takes you to a random site in the list!">
          <Button
            onClick={() => {
              window.open(
                sites[Math.floor(Math.random() * sites.length + 1)].url
              );
            }}
            variant="contained"
          >
            Random Site
          </Button>
        </Tooltip>
        &nbsp;&nbsp;&nbsp;
        <Button
          onClick={() => {
            changeView();
          }}
          variant="contained"
        >
          Alternative View
        </Button>
      </span>
      {view ? (
        <div>
          <Picker handleChange={handleChange} data={sites} />
          <div className="cardContainer">{projects.projects}</div>
        </div>
      ) : (
        <ProjectSlider />
      )}
    </div>
  );
}
