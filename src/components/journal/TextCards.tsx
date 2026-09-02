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
  // compact date + read-time from content length (220 wpm), if content is present
  const meta = (post: Article) => {
    const parts: string[] = [];
    if (post.date) {
      try {
        const d = new Date(post.date);
        if (!isNaN(d.getTime())) {
          parts.push(d.toLocaleDateString("en-US", { month: "short", year: "numeric" }));
        }
      } catch { /* ignore bad dates */ }
    }
    if (post.content) {
      const w = post.content.split(/\s+/).length;
      const mins = Math.max(1, Math.round(w / 220));
      if (w > 60) parts.push("~" + mins + " min read");
    }
    return parts.join(" · ");
  };
  return (
    <>
      {data.map((post, i) => {
        const tint = i % 4;
        const isFeatured = i === 0;
        const m = meta(post);
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
              if (e.key === "Enter" || " " === e.key) {
                e.preventDefault();
                open(post);
              }
            }}
          >
            <span className="jc-go mono" aria-hidden="true">↗</span>
            {isFeatured && (
              <span className="jc-featured mono">★ featured</span>
            )}
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div className="jc-meta-row">
              <div className="jc-tags">
                {(post.tags || []).map((tag, ti) => (
                  <span key={ti} className="jc-tag mono">
                    #{tag}
                  </span>
                ))}
              </div>
              {m && <span className="jc-meta mono">{m}</span>}
            </div>
          </div>
        );
      })}
    </>
  );
};
