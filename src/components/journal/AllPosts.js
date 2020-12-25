import React, { useState, useEffect } from "react";
import "../myscss.scss";
import JournalCard from "./JournalCard.js";
import Picker from "../util/Picker";
import { getArticles } from "../util/getArticles.js";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");
  const handleChange = (e, filter) => {
    setFilter(filter);
  };
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

  return (
    <div>
      <div className="blog">
        <h1>Journal</h1>
        <Picker data={articles} handleChange={handleChange} />
        <div className="content">
          {articles
            .filter((article) => {
              if (filter === "All") return article;
              return article.tags?.includes(filter);
            })
            .map((article) => {
              return (
                <JournalCard
                  key={article.title}
                  title={article.title}
                  image={article.image}
                  summary={article.summary}
                  date={article.date}
                  content={article.content}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
