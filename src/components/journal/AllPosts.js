import React, { useState, useEffect } from "react";
import { getArticles, spinAnimationV2, Picker, Cards } from "util/index";
import "styles/index.scss";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");

  //changes filter from picker
  const handleChange = (e, filter) => {
    setFilter(filter);
  };

  //handles fetching data from github or cache
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("data")) === null) {
      console.log("fetching posts");
      getArticles().then((data) => {
        setArticles(data);
      });
    } else {
      console.log("cache");
      setArticles(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  //filter the articles and tweak some property names before passing to component
  const cleanData = (data) => {
    return data
      .filter((article) => {
        if (filter === "All") return article;
        return article.tags?.includes(filter);
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
      <Picker data={articles} handleChange={handleChange} />
      <Cards
        routeExternal={false}
        gridLayout="cardContainer"
        data={cleanData(articles)}
      />
    </div>
  );
}
