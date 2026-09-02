import { useState, useEffect } from "react";
import { Picker, Cards } from "../../util/index";
import { TextCards } from "./TextCards";
import { getArticles } from "socks-librarian";
import "../../styles/index.scss";
import "./Journal.scss";
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
    getArticles({ user: config.user, repo: config.repo }).then(
      (data: Article[]) => setArticles(data)
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
    <div className="zc journal">
      {/* ===================== PAGE HEAD ===================== */}
      <section className="j-head">
        <div className="zc-wrap reveal">
          <div className="j-head-kicker">
            <span className="zc-pixel" />
            <span className="kicker">
              notes · experiments · the receipts
            </span>
          </div>
          <h1 className="j-head-h1">
            Things I wrote
            <br />
            <span className="hl">about building.</span>
          </h1>
          <p className="j-head-lede">
            Not a blog with a schedule — a running log of what I learned shipping
            to the interwebs. LLMs, photonic sensors, Wasm, crypto, and a few
            things I shouldn't have admitted.
          </p>
        </div>
      </section>

      {/* ===================== CONTROLS ===================== */}
      <div className="j-controls zc-wrap reveal">
        <div className="j-filter">
          <span className="j-filter-label mono">filter:</span>
          <Picker data={articles} handleChange={handleChange} filter={filter} />
        </div>
        <button
          className={"jc-view-toggle" + (textView ? " is-on" : "")}
          onClick={() => setTextView(!textView)}
        >
          {textView ? "◧ cards" : "≣ list"}
        </button>
      </div>

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
