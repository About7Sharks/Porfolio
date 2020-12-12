import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import "../myscss.scss";
import JournalCard from "./JournalCard.js";
import Picker from "../util/Picker";

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("All");
  async function getArticles() {
    let data = await (
      await fetch(
        "https://api.github.com/repos/About7Sharks/Markdown/git/trees/master?recursive=1"
      )
    ).json();
    let articlesContent = await Promise.all(
      data.tree.map(async (article) => {
        let art = matter(
          await (
            await fetch(
              `https://raw.githubusercontent.com/About7Sharks/Markdown/master/${article.path}`
            )
          ).text()
        );
        art = { ...art, ...art.data };
        delete art.data;
        return art;
      })
    );
    localStorage.setItem("data", JSON.stringify(articlesContent));
    setArticles(articlesContent);
    return articlesContent;
  }
  const handleChange = (e, filter) => {
    setFilter(filter);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("data")) === null) {
      console.log("fetching posts");
      getArticles();
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
