import React, { useState, useEffect } from "react";
import "../myscss.scss";
import Picker from "../util/Picker";
import { ProjectCards } from "../projects/ProjectCards.tsx";
import { getArticles } from "../util/getArticles.js";
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
          url: site.url,
          img: site.image,
          title: site.title,
          text: site.summary,
          tags: site.tags,
        };
      });
  };

  return (
    <div className="journal">
      <h1>Journal</h1>
      <Picker data={articles} handleChange={handleChange} />
      <ProjectCards data={cleanData(articles)} />
    </div>
  );
}
