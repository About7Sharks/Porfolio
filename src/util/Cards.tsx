import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
// this is a quick fix referenced [here](https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam)
// @ts-ignore
import DirectionReveal from "direction-reveal";
import "direction-reveal/src/styles/direction-reveal.scss";
import ImageWithFallback from "./ImgWithFallback";
interface CardItem {
  url?: string;
  img?: string;
  image?: string;
  title: string;
  text?: string;
  tags?: string[];
  summary?: string;
}

interface Props {
  data: CardItem[];
  gridLayout: string;
  routeExternal: boolean;
}

export const Cards: React.FC<Props> = ({ data, gridLayout, routeExternal }) => {
  const history = useHistory();
  useEffect(() => {
    DirectionReveal();
  });
  const handleRouting = (site: CardItem) => {
    if (routeExternal && site.url) {
      window.open(site.url);
    } else {
      history.push("/journal/" + site.title.replace(/ /g, ""), site);
    }
  };
  const Cards = () => {
    if (data.length < 1) return <div></div>;
    const list = data.map((site, i) => {
      if (site.title === undefined) return <div key="undefined"></div>;
      const tagButtons = (site.tags || []).map((tag, i) => (
        <Button
          style={{ border: "1px solid white", color: "white" }}
          variant="outlined"
          key={i + "btn"}
          size="small"
        >
          {tag}
        </Button>
      ));
      return (
        <div
          onClick={() => handleRouting(site)}
          key={i}
          style={{ animationDelay: `${i / 4}s` }}
          className="direction-reveal card"
        >
          <div className="direction-reveal__card">
            <ImageWithFallback
              src={site.img || site.image}
              alt="Cat for dis"
              className="direction-reveal__img default-img"
            />

            <div className="direction-reveal__overlay direction-reveal__anim--enter">
              <h3 className="direction-reveal__title">{site.title}</h3>
              <p className="direction-reveal__text">
                {site.summary || site.text}
              </p>
              <div className="actions">Tags: &nbsp; {tagButtons}</div>
            </div>
          </div>
        </div>
      );
    });
    return <div className={gridLayout}>{list}</div>;
  };

  return <Cards />;
};
