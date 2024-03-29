import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { spinAnimationV2, getArticle } from "../../util/index.ts";
import { config } from "../../Config.ts";
import "../../styles/about.scss";

const { user, repo } = config;
export default function About() {
  const [about, setAbout] = useState("");
  useEffect(() => {
    const getAbout = async () => {
      const { content } = await getArticle({
        user,
        repo,
        article: "About",
        format: true,
      });
      setAbout(content);
    };
    getAbout();
  }, []);
  return (
    <div className="about">
      <h1>{spinAnimationV2("About")}</h1>
      <ReactMarkdown linkTarget="_blank" children={about || "Nothing"} />
      <span>
        <h2>Resume</h2>&nbsp;-&nbsp;
        <p>
          <a target="_blank" rel="noopener noreferrer" href="./resume.html">
            View
          </a>
        </p>
      </span>
    </div>
  );
}
