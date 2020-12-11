import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
// import "./posts.scss";
import { useLocation } from "react-router-dom";
export default function BlogPostViewer(props) {
  const { state } = useLocation(); // if defined is, contains post data
  const [postData, setPost] = useState("");
  const [Id] = useState(props.match.params.id);
  //fetches post from git
  const getPost = async () => {
    let post = await (
      await fetch(
        "https://raw.githubusercontent.com/About7Sharks/Markdown/master/" +
          Id +
          ".md"
      )
    ).text();
    setPost(matter(post));
  };
  useEffect(() => {
    //if direct link to post; fetch data
    if (state === undefined && postData === "") {
      getPost();
      console.log("state undefined and no previous data");
    } else if (state !== undefined) {
      console.log("state defined, skipping fetch since data already loaded");
      setPost({ content: state.content });
    }
    //scroll to top of page
    window.scrollTo(0, 0);
  }, []);
  return (
    <ReactMarkdown
      className={`${props.match.params.id} article`}
      linkTarget="_blank"
      source={postData.content || "Nothing"}
    />
  );
}
