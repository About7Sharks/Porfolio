import React, { useEffect } from "react";
import { getArticles } from "../util/getArticles";
const FeaturedPosts = () => {
  useEffect(() => {
    getArticles().then((data) => {
      let dog = data.filter((article) => {
        console.log(article);
        return article.tags?.includes("Featured");
      });
      console.log(dog);
    });
    return () => {};
  }, []);
  return <div></div>;
};

export default FeaturedPosts;
