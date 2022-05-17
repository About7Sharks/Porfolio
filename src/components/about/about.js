import React, { useEffect,useState } from "react";
import matter from "gray-matter";
import {config} from 'Config'
import ReactMarkdown from "react-markdown";
import { spinAnimationV2 } from "util/SpinAnimation";
const aboutStyles = {
  about: {
    paddingTop: "10px",
    color: "white",
    maxWidth: "620px",
    margin: "0 auto",
    display: "inline-flex",
  },
  links: {
    color: "white",
  },
};

export default function About() {
  const [about, setAbout] = useState("");
  useEffect(() => {
   const getAbout = async () => {
    let data = await fetch(config.url()+'About.md')
    let text = await data.text() 
    let result = matter(text)
    setAbout(result.content)
  }
  getAbout()
  },[])
  return (
    <div className="about" style={aboutStyles.about}>
      <h1>{spinAnimationV2("About")}</h1>
      <ReactMarkdown
        linkTarget="_blank"
        children={about || "Nothing"}
      />
      <span>
        <h2>Resume</h2>&nbsp;-&nbsp;
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={aboutStyles.links}
            href="./resume.html"
          >
            View
          </a>
        </p>
      </span>
    </div>
  );
}
