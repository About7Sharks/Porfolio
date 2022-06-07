import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import {getArticle} from 'util/index'
import { useLocation } from "react-router-dom";
import "styles/posts.scss";


type LocationState = {
  state:any
}

// This component renders a single post
export default function BlogPostViewer(props: any) {
  const { state } = (useLocation() as LocationState); // if defined, contains post data
  const [postData, setPost] = useState({content:''}); // post data
  const [Id] = useState(props.match.params.id); // post id
  //fetches post from git
  useEffect(() => {
    //if direct link to post; fetch data
    if (state === undefined && postData.content === "") {
      const getPost = async () => {
        let post = await (await getArticle({article:Id})).text();
        return setPost(matter(post) as any);
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
