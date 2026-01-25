import { useState } from "react";
import sites from "./sites";
import { Button } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import ProjectSlider from "./sliderProjects";
import {
  spinAnimationV2,
  WarningMessage,
  Picker,
  Cards,
  Emoji,
} from "../../util/index";
import { Site } from "../../types";

export default function Projects() {
  const [projects, updateProjects] = useState<Site[]>(sites);
  const [view, setView] = useState(true);

  const handleChange = (_e: React.ChangeEvent<{}>, filter: string | null) => {
    const newList =
      filter === "All" || filter === null
        ? sites
        : sites.filter((site) => site.tags.includes(filter));
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
