import React, { useState } from "react";
import sites from "./sites.js"; //my sites data
import { Button } from "@material-ui/core";
import Emoji from "../util/emoji";
// import './projects.scss'
import Tooltip from "@material-ui/core/Tooltip";
import ProjectSlider from "./sliderProjects";
import Picker from "../util/Picker";
import "./projects.scss";

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
      <div className="card" key={site.url}>
        <img
          style={{ height: "290px" }}
          alt={site.url}
          src={site.img}
          title=""
        />
        <div onClick={() => window.open(site.url)} className="info">
          <h3>{site.title}</h3>
          <p>{site.text}</p>
          <div className="actions">Tags: &nbsp; {tagButtons}</div>
        </div>
      </div>
    );
  });
};

export default function Projects() {
  const [projects, updateProjects] = useState({
    projects: projectsList(),
  });
  const [view, setView] = useState(false);

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
