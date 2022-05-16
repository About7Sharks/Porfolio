import React, { useState, useEffect } from "react";
import JournalCard from "./Card";
import { getArticles } from "util/getArticles";
const FeaturedPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      let _posts = data.filter((article) =>  article.tags?.includes("Featured"));
      setPosts(_posts);
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
