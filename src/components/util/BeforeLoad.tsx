import React from "react";

interface Props {}

export const BeforeLoad = (props: Props) => {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "white" }}>
      <p>Loading ...</p>
    </div>
  );
};
