import React from "react";
import { Link } from "react-router-dom";
interface Props {}

export const ProjectHome = (props: Props) => {
  return (
    <div className="homeProjects">
      <h1>Projects</h1>
      <div className="div2">
        <img src="https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5edd8a5f4d7c220008625fff/screenshot.png"></img>
        <p>Real-time fermenation monitor made with vue</p>
        <Link to={""}>Visit &#8594;</Link>
      </div>
      <div className="div3">
        <div>
          <img src={"http://192.168.0.43:3000" + "/assets/situp.png"}></img>
          <p>AI Based running un browser for counting situps</p>
          <Link to={""}>Visit &#8594;</Link>
        </div>
      </div>
    </div>
  );
};
