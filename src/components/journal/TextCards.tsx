import { useHistory } from "react-router-dom";
import "../../styles/posts.scss";
import { Button } from "@material-ui/core";
import { Article } from "../../types";

interface TextCardsProps {
  data: Article[];
  routeExternal?: boolean;
  gridLayout?: string;
}

export const TextCards: React.FC<TextCardsProps> = ({ data }) => {
  const history = useHistory();
  const handleClick = (post: Article) => {
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
            className={
              "textCard tint-" +
              tint +
              (isFeatured ? " is-featured" : "")
            }
            onClick={() => handleClick(post)}
          >
            <div className="">
              <h3>
                {isFeatured && <span className="jc-featured mono">★ featured </span>}
                {post.title}
              </h3>
              <p>{post.summary}</p>
              <div>
                <h4>
                Tags:{" "}
                {(post.tags || []).map((tag, i) => (
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
