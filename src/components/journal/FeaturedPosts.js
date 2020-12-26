import React, { useState, useEffect } from "react";
import JournalCard from "./JournalCard";
import { getArticles } from "../util/getArticles";
const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      let dog = data.filter((article) => {
        console.log(article);
        return article.tags?.includes("Featured");
      });
      setPosts(dog);
    });
    return () => {};
  }, []);
  return (
    <div>
      {posts.map((article) => {
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
  );
};

export default FeaturedPosts;
