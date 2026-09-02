import React from "react";
import { Link } from "react-router-dom";
import { featured, experiments } from "../../data/featured";
import "./Projects.scss";

export default function Projects() {
  return (
    <div className="zc Projects">
      <header className="zc-page-head">
        <div className="zc-page-head-inner">
          <h1 className="zc-h1 small">
            Work that <span className="zc-accent">ships and stays shipped.</span>
          </h1>
          <p className="zc-lead">
            Three things I'm proud of — production systems with real users and
            real outcomes. Below that, a pile of experiments that taught me
            things and still run.
          </p>
        </div>
      </header>

      {/* FEATURED */}
      <section className="zc-section">
        <h2 className="zc-kicker">Featured</h2>
        <div className="zc-feat-list">
          {featured.map((f) => (
            <a className="zc-feat" href={f.url} target="_blank" rel="noreferrer" key={f.title}>
              <div className="zc-feat-top">
                <div>
                  <div className="zc-feat-tag">{f.tag}</div>
                  <h3 className="zc-feat-title">{f.title}</h3>
                </div>
                <div className="zc-feat-period">{f.period}</div>
              </div>
              <p className="zc-feat-blurb">{f.blurb}</p>
              <ul className="zc-feat-points">
                {f.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="zc-feat-cta">
                <span className="zc-feat-visit">Visit {f.url.replace("https://", "")} →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* EXPERIMENTS */}
      <section className="zc-section zc-section-alt">
        <h2 className="zc-kicker">Experiments</h2>
        <p className="zc-experiments-lead">
          Proof-of-concepts, side projects, things I built to learn. Smaller
          scope, still useful, all running.
        </p>
        <div className="zc-exp-grid">
          {experiments.map((e) => (
            <a className="zc-exp" href={e.url} target="_blank" rel="noreferrer" key={e.title}>
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
      <section className="zc-cta-mini">
        <div className="zc-cta-mini-inner">
          <p>Looking for the résumé version?</p>
          <div className="zc-cta-btns">
            <a className="zc-btn primary" href="/resume.html" target="_blank" rel="noreferrer">
              Full résumé →
            </a>
            <Link className="zc-btn ghost" to="/">Back to home</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
