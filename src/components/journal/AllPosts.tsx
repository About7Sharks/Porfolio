import { useState, useEffect } from "react";
import { spinAnimationV2, Picker, Cards } from "../../util/index";
import Button from "@material-ui/core/Button";
import { TextCards } from "./TextCards";
import { getArticles } from "socks-librarian";
import "../../styles/index.scss";
import { config } from "../../Config";
import { Article } from "../../types";

export default function Blog() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [textView, setTextView] = useState(false);

  const handleChange = (_e: React.ChangeEvent<{}>, newFilter: string | null) => {
    setFilter(newFilter || "All");
  };

  useEffect(() => {
    getArticles({ user: config.user, repo: config.repo }).then((data: Article[]) =>
      setArticles(data)
    );
  }, []);

  const cleanData = (data: Article[]) => {
    return data
      .filter((article) => {
        if (filter === "All") return true;
        return article.tags?.includes(filter);
      })
      .sort((a, b) => {
        return new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime();
      })
      .map((site) => ({
        ...site,
        img: site.image,
      }));
  };

  return (
    <div className="journal">
      <h1>{spinAnimationV2("Journal")}</h1>
      <span>
        <Button onClick={() => setTextView(!textView)} variant="contained">
          Alternative View
        </Button>
      </span>
      <Picker data={articles} handleChange={handleChange} filter={filter} />
      {textView ? (
        <Cards
          routeExternal={false}
          gridLayout="cardContainer"
          data={cleanData(articles)}
        />
      ) : (
        <TextCards
          routeExternal={false}
          gridLayout="cardContainer"
          data={cleanData(articles)}
        />
      )}
    </div>
  );
}
