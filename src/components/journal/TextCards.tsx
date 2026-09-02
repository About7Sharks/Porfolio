import React from "react";
import { useHistory } from "react-router-dom";
import "../../styles/posts.scss";
import { Article } from "../../types";

interface TextCardsProps {
  data: Article[];
  routeExternal?: boolean;
  gridLayout?: string;
}

export const TextCards: React.FC<TextCardsProps> = ({ data }) => {
  const history = useHistory();
  const open = (post: Article) => {
    history.push(`/journal/${post.title.replace(/ /g, "")}`, post);
  };
  return (
    <>
      {data.map((post, i) => {
        const tint = i % 4;
        const isFeatured = i === 0;
        return (
          <div
            key={i}
            role="link"
            tabIndex={0}
            aria-label={post.title}
            className={
              "textCard tint-" +
              tint +
              (isFeatured ? " is-featured" : "")
            }
            onClick={() => open(post)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open(post);
              }
            }}
          >
            <div>
              <h3>
                {isFeatured && (
                  <span className="jc-featured mono">★ featured </span>
                )}
                {post.title}
              </h3>
              <p>{post.summary}</p>
              <div>
                <h4>
                  {(post.tags || []).map((tag, ti) => (
                    <span key={ti} className="jc-tag mono">
                      #{tag}
                    </span>
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
