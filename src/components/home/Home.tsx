import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config";
import { featured } from "../../data/featured";
import "./Home.scss";

const stats = [
  { n: "8 yrs", l: "shipping TypeScript at scale" },
  { n: "Founding eng", l: "startup → acquisition" },
  { n: "Production", l: "MCP + AI reliability infra" },
];

export default function Home() {
  return (
    <div className="zc Home">
      {/* HERO */}
      <header className="zc-hero">
        <div className="zc-hero-grid">
          <div className="zc-hero-copy">
            <span className="zc-badge">Available for senior / founding engineering roles · Remote, US</span>
            <h1 className="zc-h1">
              I own the frontend,
              <br />
              from architecture
              <br />
              <span className="zc-accent">to shipped product.</span>
            </h1>
            <p className="zc-lead">
              Zachary Carlin — Senior Software Engineer. Eight years building
              and modernizing data-rich web platforms in TypeScript, React, and
              Next.js, across teams from 3-person startups to 100+ companies.
              I'm currently the frontend technical lead for a B2B financial-data
              product — and I build &amp; operate production systems end-to-end
              on my own.
            </p>
            <div className="zc-hero-cta">
              <Link to="/projects" className="zc-btn primary">
                See featured work
              </Link>
              <a href="/resume.html" className="zc-btn ghost" target="_blank" rel="noreferrer">
                View résumé →
              </a>
            </div>
          </div>
          <div className="zc-hero-side">
            <div className="zc-side-card">
              <div className="zc-side-head">Now</div>
              <div className="zc-side-line">
                <span>The Fly</span>
                <em>Frontend tech lead · 50+ team</em>
              </div>
              <div className="zc-side-line">
                <span>mcp.thefly.com</span>
                <em>Production MCP tooling</em>
              </div>
              <div className="zc-side-line">
                <span>z4cllc.com</span>
                <em>Independent platform, live</em>
              </div>
              <div className="zc-side-tags">
                <span>TypeScript</span><span>React</span><span>Next.js</span>
                <span>Node</span><span>AI / MCP</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* PROOF STRIP */}
      <div className="zc-strip">
        <div className="zc-strip-inner">
          {stats.map((s) => (
            <div className="zc-stat" key={s.l}>
              <div className="zc-stat-n">{s.n}</div>
              <div className="zc-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <section className="zc-section">
        <h2 className="zc-kicker">Selected work</h2>
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

      {/* CAPABILITIES */}
      <section className="zc-section zc-section-alt">
        <h2 className="zc-kicker">What I do well</h2>
        <div className="zc-cap-grid">
          {[
            {
              t: "Frontend architecture",
              d: "TypeScript, React, Next.js, Vue. Legacy-to-modern migrations, SSR, type-debt reduction, performance.",
            },
            {
              t: "Applied AI & agents",
              d: "Production MCP servers, AI chat with retrieval grounding + human gating, deterministic evals, observability.",
            },
            {
              t: "Full-stack & platform",
              d: "Node.js, REST/GraphQL, Postgres. Docker, CI/CD, AWS/GCP. Tested, gated, verifiable deploys.",
            },
          ].map((c) => (
            <div className="zc-cap" key={c.t}>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="zc-cta">
        <div className="zc-cta-inner">
          <h3>Let's build something that ships.</h3>
          <p>Open to senior and founding engineering conversations.</p>
          <div className="zc-cta-btns">
            <a className="zc-btn light" href={`mailto:${"zacarlin@gmail.com"}`}>
              Email me
            </a>
            <a
              className="zc-btn light"
              href={config.links.find((l) => l.title === "LinkedIn")?.url}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="zc-btn light"
              href={config.links.find((l) => l.title === "GitHub")?.url}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
