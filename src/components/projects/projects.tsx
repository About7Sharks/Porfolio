import React from "react";
import { Link } from "react-router-dom";
import { featured, experiments } from "../../data/featured";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="zc Projects">
      <header className="zc-page-head">
        <div className="zc-page-head-inner">
          <span className="zc-eyebrow">The interwebs 🕸️</span>
          <h1 className="zc-display zc-h1">
            Things I've built,
            <br />
            <span className="zc-accent-word">big and gloriously weird.</span>
          </h1>
          <p className="zc-lead">
            The top is the serious work — production stuff with real users.
            Below it is where I go to learn: proof-of-concepts, toys, "let's see
            if this is even possible" experiments. They don't all look clean.
            That's the point.
          </p>
        </div>
      </header>

      {/* FEATURED */}
      <section className="zc-section zc-feat">
        <div className="zc-block-head">
          <span className="zc-eyebrow">The real work</span>
          <h2 className="zc-display zc-h2">Built to be used.</h2>
        </div>
        <div className="zc-feat-list">
          {featured.map((f) => (
            <a className="zc-feat-card" href={f.url} target="_blank" rel="noreferrer" key={f.title}>
              <div className="zc-feat-top">
                <div>
                  <span className="zc-feat-tag">{f.tag}</span>
                  <h3 className="zc-feat-title">{f.title}</h3>
                </div>
                <span className="zc-feat-period">{f.period}</span>
              </div>
              <p className="zc-feat-blurb">{f.blurb}</p>
              <ul className="zc-feat-points">
                {f.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="zc-feat-visit">{f.url.replace("https://", "")} ↗</div>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section className="zc-section zc-exp">
        <div className="zc-block-head">
          <span className="zc-eyebrow">The fun stuff</span>
          <h2 className="zc-display zc-h2">Experiments.</h2>
          <p className="zc-exp-lead">
            Smaller scope, bigger curiosity. I build these to learn something I
            didn't know I didn't know — and most of them still run.
          </p>
        </div>
        <div className="zc-exp-grid">
          {experiments.map((e) => (
            <a className="zc-exp-card" href={e.url} target="_blank" rel="noreferrer" key={e.title}>
              <div className="zc-exp-head">
                <h3>{e.title}</h3>
                <span className="zc-exp-arrow">↗</span>
              </div>
              <p>{e.blurb}</p>
              <div className="zc-tags">
                {e.tags.map((t) => (
                  <span className="zc-tag" key={t}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="zc-cta">
        <div className="zc-cta-inner">
          <h3 className="zc-display">Need the formal version?</h3>
          <p>The résumé exists too — for the moments that call for it.</p>
          <div className="zc-cta-btns">
            <a className="zc-btn line-light" href="/resume.html" target="_blank" rel="noreferrer">
              Full résumé
            </a>
            <Link className="zc-btn line-light" to="/">Back to home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
