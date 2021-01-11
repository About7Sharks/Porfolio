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
  routeExternal: boolean;
}
interface Site {
  url: string;
  img: string;
  title: string;
  text: string;
  tags: Array<string>;
}

export const Cards: React.FC<Props> = ({ data, gridLayout, routeExternal }) => {
  const history = useHistory();
  useEffect(() => {
    const directionRevealDemo = DirectionReveal();
  });
  console.log(data.length);
  const handleRouting = (site: Site) => {
    if (routeExternal) {
      window.open(site.url);
    } else {
      history.push("/journal/" + site.title.replace(/ /g, ""), site);
    }
  };
  let Cards = () => {
    let list = data.map((site, i) => {
      console.log(site);
      let tagButtons = site.tags.map((tag) => (
        <Button
          style={{ border: "1px solid white", color: "white" }}
          variant="outlined"
          key={tag}
          size="small"
        >
          {tag}
        </Button>
      ));
      return (
        <div
          onClick={() => handleRouting(site)}
          key={site.url}
          style={{ animationDelay: `${i / 4}s` }}
          className="direction-reveal card"
        >
          <div className="direction-reveal__card">
            <img
              src={site.img}
              alt={site.url}
              className="direction-reveal__img"
            />

            <div className="direction-reveal__overlay direction-reveal__anim--enter">
              <h3 className="direction-reveal__title">{site.title}</h3>
              <p
                // style={{ padding: "5px 25px 40px 0px" }}
                className="direction-reveal__text"
              >
                {site.text}
              </p>
              <div className="actions">Tags: &nbsp; {tagButtons}</div>
            </div>
          </div>
        </div>
      );
    });
    return <div className={gridLayout}> {list}</div>;
  };

  return <Cards />;
};
