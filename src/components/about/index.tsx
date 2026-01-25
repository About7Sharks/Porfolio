import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { spinAnimationV2, getArticle } from "../../util/index";
import { config } from "../../Config";
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
      <ReactMarkdown linkTarget="_blank">{about || "Nothing"}</ReactMarkdown>
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
