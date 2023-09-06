import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/posts.scss";
import { Button } from "@material-ui/core";

export const TextCards = ({ data, title }) => {
  const history = useHistory();
  const handleClick = (post) => {
    history.push(`/journal/${post.title.replace(/ /g, "")}`, post);
  };
  return (
    <>
      {data.map((post, i) => {
        return (
          <div key={i} className="textCard" onClick={() => handleClick(post)}>
            <div className="">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
              <div>
                <h4>
                Tags:{" "}
                {post.tags.map((tag, i) => (
                  <Button
                    style={{ border: "1px solid white", color: "white" }}
                    variant="outlined"
                    key={i + "btn"}
                    size="small"
                  >
                    {tag}
                  </Button>
                ))}
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
