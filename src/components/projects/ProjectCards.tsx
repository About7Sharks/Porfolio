import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

// this is a quick fix referenced [here](https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam)
// @ts-ignore
import DirectionReveal from "direction-reveal";
import "direction-reveal/src/styles/direction-reveal.scss";

interface Props {
  data: Site[];
  gridLayout: string;
}
interface Site {
  url: string;
  img: string;
  title: string;
  text: string;
  tags: Array<string>;
}

export const ProjectCards = (props: Props) => {
  console.log(props);
  let { data, gridLayout } = props;
  console.log(gridLayout);
  const history = useHistory();
  useEffect(() => {
    const directionRevealDemo = DirectionReveal();
  });
  console.log(data.length);

  let Cards = () => {
    let list = data.map((site, i) => {
      let tagButtons = site.tags.map((tag) => (
        <Button color="default" variant="outlined" key={tag} size="small">
          {tag}
        </Button>
      ));
      return (
        <div
          onClick={() =>
            //if on journal page use router to link post
            history.location.pathname.includes("ojects")
              ? ""
              : history.push("/journal/" + site.title.replace(/ /g, ""), site)
          }
          key={site.url}
          style={{ animationDelay: `${i / 4}s` }}
          className="direction-reveal card"
        >
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
    return <div className={gridLayout}> {list}</div>;
  };

  return <Cards />;
};
