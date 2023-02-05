import React, { useState, useEffect } from "react";
import { getArticles, spinAnimationV2, Picker, Cards } from "../../util/index.ts";
import "../../styles/index.scss";
import { config } from '../../Config'
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");

  //changes filter from picker
  const handleChange = (e, filter) => {
    setFilter(filter);
  };

  //handles fetching data from github or cache
  useEffect(() => {
    getArticles({ user: config.user, repo: config.repo })
    .then(data =>  setArticles(data));
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
