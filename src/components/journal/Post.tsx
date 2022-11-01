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
  const [postData, setPost] = useState({
    content:'',
    data:{ 
      date:'',
      title:'',
      author:'',
    }
  }); // post data
  const [Id] = useState(props.match.params.id); // post id
  //fetches post from git
  useEffect(() => {
    //if direct link to post; fetch data
    if (state === undefined && postData.content === "") {
      const getPost = async () => {
        let post = await getArticle({article:Id});
        return setPost(matter(post) as any);
      }
      getPost()
      console.log("state undefined and no previous data");
    } else if (state !== undefined) {
      console.log("state defined, skipping fetch since data already loaded");
      return setPost({...state });
    }
    //scroll to top of page
    window.scrollTo(0, 0);
  }, [state, postData, Id]);
  return (
   <div className="postContent article"> 
    <h4>Author: {postData.data.author}</h4>
    <h4>Date: {postData.data.date}</h4>
    <ReactMarkdown
     className={`${props.match.params.id}`}
     linkTarget="_blank"
     children={postData.content || "Nothing"}
    />
   </div>
  );
}
