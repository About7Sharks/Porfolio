import React from "react";
import { useHistory } from "react-router-dom";
import "./posts.scss";

export default function MediaCard(props) {
  const history = useHistory();
  const handleMouseMove = (e) => {
    console.log(e);
    console.log((e.target.style.color = "red"));
  };
  return (
    <div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      className="journalCard"
      onClick={() =>
        history.push("/journal/" + props.title.replace(/ /g, ""), props)
      }
    >
      <img className="media" src={props.image} alt={props.title}></img>
      <div className="coverEffect"></div>
      <div className="meta">
        <h3>{props.title}</h3>
        <p>{props.summary}</p>
      </div>
    </div>
  );
}
