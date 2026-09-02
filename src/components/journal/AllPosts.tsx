import { useState, useEffect, useMemo } from "react";
import { Cards } from "../../util/index";
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

  // custom tag filter (replaces the MUI Autocomplete which rendered a
  // default "filter by tag" label that clashed with the new theme)
  const tags = useMemo(() => {
    if (!articles.length) return ["All"];
    const set = new Set<string>(["All"]);
    articles.forEach((a) => (a.tags || []).forEach((t) => set.add(t)));
    return Array.from(set);
  }, [articles]);

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

  const filtered = cleanData(articles);

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
          <h1 className="journal-h1">
            Things I wrote
            <br />
            <span className="hl">about building.</span>
          </h1>
          <p className="j-head-lede">
            Not a blog with a schedule — a running log of what I learned
            shipping to the interwebs. LLMs, photonic sensors, Wasm, crypto,
            and a few things I shouldn't have admitted.
          </p>
        </div>
      </section>

      {/* ===================== CONTROLS ===================== */}
      <div className="j-controls zc-wrap reveal">
        <div className="j-filter" role="group" aria-label="Filter posts by tag">
          <span className="j-filter-label mono">filter:</span>
          {tags.map((t) => (
            <button
              key={t}
              className={"j-tag" + (filter === t ? " is-on" : "")}
              onClick={() => setFilter(t)}
            >
              {t}
            </button>
          ))}
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
          data={filtered}
        />
      ) : (
        <TextCards
          routeExternal={false}
          gridLayout="cardContainer"
          data={filtered}
        />
      )}
    </div>
  );
}
