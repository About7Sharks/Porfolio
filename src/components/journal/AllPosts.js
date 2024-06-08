import { useState, useEffect } from "react";
import { spinAnimationV2, Picker, Cards } from "../../util/index.ts";
import Button from "@material-ui/core/Button";
import { TextCards } from "./TextCards";
import { getArticles } from "socks-librarian";
import "../../styles/index.scss";
import { config } from "../../Config";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");
  const [textView, setTextView] = useState(false);
  // Changes filter from picker
  const handleChange = (e, filter) => {
    setFilter(filter);
  };

  //handles fetching data from github or cache
  useEffect(() => {
    getArticles({ user: config.user, repo: config.repo }).then((data) =>
      setArticles(data)
    );
  }, []);

  // const handleTagDoubleClick = (tag) => {
  //   setFilter(tag);
  // };

  //filter the articles and tweak some property names before passing to component
  const cleanData = (data) => {
    return data
    .filter((article) => {
      if (filter === "All") return article;
      return article.tags?.includes(filter);
    })
    .sort((a, b) => {
      // Assuming the date is in ISO-8601 format; if not, you may need to parse it differently
      return new Date(b.date) - new Date(a.date);
    })
    .map((site) => {
      return {
        ...site,
        img: site.image,
      };
    });
  };

  return (
    <div className="journal">
      <h1>{spinAnimationV2("Journal")}</h1>
      <span>
      <Button onClick={() => setTextView(!textView)} variant="contained">
          Alternative View
        </Button>
      </span>
      <Picker data={articles} handleChange={handleChange} filter={filter} />
      {textView ? (
        <Cards
          routeExternal={false}
          gridLayout="cardContainer"
          data={cleanData(articles)}
        />
      ) : (
        <TextCards
          routeExternal={false}
          gridLayout="cardContainer"
          data={cleanData(articles)}
        />
      )}

      {/* <Graph articles={articles} onTagDoubleClick={handleTagDoubleClick} /> */}
    </div>
  );
}
