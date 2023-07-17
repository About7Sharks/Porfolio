import React, { useState } from "react";
import { sites } from "../../Config"; //my sites data
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import ProjectSlider from "./sliderProjects";
import { spinAnimationV2,WarningMessage,Picker,Cards,Emoji } from "../../util/index";
export default function Projects() {
  //set the initial state = to sites.js file
  const [projects, updateProjects] = useState(sites);
  //toggles alternative layout
  const [view, setView] = useState(true);

  // handles updates from picker component
  const handleChange = (e, filter) => {
    let newList =
      filter === "All" || filter === null
        ? sites
        : sites.filter((site) => {
            return site.tags.includes(filter);
          });
    updateProjects(newList);
  };

  const changeView = () => {
    setView(!view);
  };
  const randomSite = () => {
    window.open(sites[Math.floor(Math.random() * sites.length + 1)].url);
  };
  return (
    <div id="projects" className="projects">
      <h1>{spinAnimationV2("Projects")}</h1>
      <p>
        Here you can find sites that i'm currently hosting on the interwebs
        <Emoji symbol="🕸️" />.
      </p>
      <WarningMessage
        msg=" The majority of these projects are proof of concepts and don't always
        look the cleanest; but are still useful."
      />
      <span>
        <Tooltip title="Takes you to a random site in the list!">
          <Button onClick={randomSite} variant="contained">
            Random Site
          </Button>
        </Tooltip>
        <Button onClick={changeView} variant="contained">
          Alternative View
        </Button>
      </span>
      <Picker handleChange={handleChange} data={sites} />
      {view ? (
        <Cards
          routeExternal={true}
          gridLayout="cardContainer"
          data={projects}
        />
      ) : (
        <ProjectSlider sites={projects} />
      )}
    </div>
  );
}
