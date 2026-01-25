import { useState, useEffect } from "react";
import JournalCard from "./Card";
import { getArticles } from "../../util/index";
import { Article } from "../../types";

const FeaturedPosts = () => {
  const [posts, setPosts] = useState<Article[]>([]);

  useEffect(() => {
    getArticles().then((data: Article[]) => {
      const _posts = data.filter((article) => article.tags?.includes("Featured"));
      setPosts(_posts);
    });
  }, []);

  return (
    <div>
      {posts.map((article) => (
        <JournalCard
          key={article.title}
          title={article.title}
          image={article.image}
          summary={article.summary}
        />
      ))}
    </div>
  );
};

export default FeaturedPosts;
