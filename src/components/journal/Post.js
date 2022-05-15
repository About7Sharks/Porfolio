import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import "./posts.scss";
import { useLocation } from "react-router-dom";
export default function BlogPostViewer(props) {
  const { state } = useLocation(); // if defined is, contains post data
  const [postData, setPost] = useState("");
  const [Id] = useState(props.match.params.id);
  //fetches post from git

  useEffect(() => {
    //if direct link to post; fetch data
    if (state === undefined && postData === "") {
      const getPost = async () => {
        let post = await (await fetch(`${process.env.REACT_APP_MD_REPO+Id}.md`)).text();
        return setPost(matter(post));
      }
      getPost()
      console.log("state undefined and no previous data");
    } else if (state !== undefined) {
      console.log("state defined, skipping fetch since data already loaded");
      return setPost({ content: state.content });
    }
    //scroll to top of page
    window.scrollTo(0, 0);
  }, [state, postData, Id]);
  return (
    <ReactMarkdown
      className={`${props.match.params.id} article`}
      linkTarget="_blank"
      children={postData.content || "Nothing"}
    />
  );
}
