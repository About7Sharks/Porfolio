import React from "react";
import "./beforeLoad.scss";

export const BeforeLoad = () => {
  const msg = "Loading";
  return (
    <div id="load">
      {msg.split("").reverse().map((letter, i) => <div key={i}>{letter}</div>)}
    </div>
  );
};
