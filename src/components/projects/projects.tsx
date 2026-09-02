import React from "react";
import { Link } from "react-router-dom";
import { featured, experiments } from "../../data/featured";
import "./Projects.scss";

const tileClasses = ["", "accent", "blue", "pink"];

export default function Projects() {
  return (
    <div className="zc Projects">
      {/* ===================== PAGE HEAD ===================== */}
      <section className="p-head">
        <div className="zc-wrap reveal">
          <div className="p-head-kicker">
            <span className="zc-pixel" />
            <span className="kicker">the work · the fun · the weird</span>
          </div>
          <h1 className="p-head-h1">
            Projects
            <span className="hl"> I'd defend</span>
            <br />
            on a whiteboard.
          </h1>
          <p className="p-head-lede">
            Some of these are production and load real money's worth of data.
            Some are gloriously weird things I made to answer "what if?".
            That's the whole point — a person who can ship, <em>and</em> a
            person who can't stop tinkering.
          </p>
        </div>
      </section>

      {/* ===================== FEATURED ===================== */}
      <section className="p-featured">
        <div className="zc-wrap">
          <h2 className="p-section-title reveal">Featured — the real thing</h2>
          <div className="p-feat-list">
            {featured.map((p, i) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  "p-feat-card spot p-feat-" +
                  (p.accent || "accent") +
                  " reveal"
                }
                data-reveal-delay={String(i * 120)}
              >
                <div className="p-feat-top">
                  <span className="p-feat-index mono">0{i + 1}</span>
                  <span className="zc-chip">{p.tag}</span>
                </div>
                <h3 className="p-feat-title">{p.title}</h3>
                <p className="p-feat-blurb">{p.blurb}</p>
                <ul className="p-feat-bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="p-feat-foot">
                  <span className="mono">{p.period}</span>
                  <span className="p-feat-go">
                    visit site <span className="arrow">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== EXPERIMENTS ===================== */}
      <section className="p-fun">
        <div className="zc-wrap">
          <div className="p-fun-head reveal">
            <h2 className="p-fun-title">
              The fun <span className="hl">stuff</span>
            </h2>
            <p className="p-fun-note">
              "Proof of concept" is a compliment here. These don't all look
              clean, and that's the point — I made them to learn, ship to the
              interwebs, and see what happens.
            </p>
          </div>

          <div className="p-fun-grid">
            {experiments.map((e, i) => (
              <a
                key={e.title}
                href={e.url}
                target="_blank"
                rel="noopener noreferrer"
                className={"p-tile spot tile-" + tileClasses[i % 4] + " reveal"}
                data-reveal-delay={String((i % 4) * 90)}
              >
                <div className="p-tile-name">{e.title}</div>
                <div className="p-tile-blurb">{e.blurb}</div>
                <div className="p-tile-tags mono">
                  {e.tags.map((t) => (
                    <span key={t} className="tag">
                      #{t}
                    </span>
                  ))}
                  <span className="p-tile-go">↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="p-cta">
        <div className="zc-wrap p-cta-inner reveal">
          <h2 className="p-cta-h2">
            Built something weird?
            <br />
            <span className="hl">Let's talk.</span>
          </h2>
          <div className="p-cta-btns">
            <a
              href="mailto:zacarlin@gmail.com"
              className="zc-btn primary magnet"
            >
              zacarlin@gmail.com
            </a>
            <Link to="/about" className="zc-btn magnet">
              More about me →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
