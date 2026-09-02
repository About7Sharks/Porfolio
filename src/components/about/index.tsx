import React from "react";
import { config } from "../../Config";
import { Link } from "react-router-dom";
import "./About.scss";

const experience = [
  {
    company: "The Fly (Main Street Data)",
    role: "Senior Software Engineer · Frontend technical lead",
    period: "2023 — Now",
    bullets: [
      "Frontend technical authority on a B2B financial-data platform — direction, delivery, and the build, from Figma through tested production.",
      "Joined at founding as a 3-person startup; acquired by an international company, now The Fly (50+).",
      "Built and operate the MCP server at mcp.thefly.com — production MCP tooling agents can call.",
      "Built the AI chat widget end-to-end: streaming, retrieval grounding, human-gated behavior.",
      "Automatic code review + CI/CD gates on every PR; Next.js pages-to-app-router migration with SSR.",
    ],
  },
  {
    company: "Sonobi",
    role: "Senior Software Engineer",
    period: "2022 — 2023",
    bullets: [
      "Built and maintained React applications on a digital ad-buying platform (100+ people).",
      "Migrated legacy jQuery and class-component flows to maintainable hooks-based React.",
      "Integrated with PHP and Python services; optimized GraphQL / Postgres-backed API paths.",
      "Contributed to Prebid.js — the open-source ad-bidding standard.",
    ],
  },
  {
    company: "Dogwood Logic",
    role: "Software Engineer",
    period: "2021 — 2022",
    bullets: [
      "Implemented decentralized identifiers and verifiable credentials in Node.js and TypeScript.",
      "Built Vue.js interfaces for encrypted healthcare applications, test-driven.",
    ],
  },
  {
    company: "Gulf Photonics",
    role: "Software Engineer · Lead developer",
    period: "2018 — 2020",
    bullets: [
      "Lead developer for an IoT embedded fermentation-monitoring sensor using photonics — shipped to accubrew.io — plus its web dashboard.",
      "Built Node.js / Vue interfaces and APIs; managed MongoDB and Firebase across desktop and mobile.",
    ],
  },
];

const independent = [
  {
    t: "Z4C & AI Reliability Systems",
    d: "Design, build, deploy, and operate a customer-facing platform end-to-end — timezone-aware intake, concurrency-safe storage, analytics, automated tests, and production verification on every change. z4cllc.com is live. Also build private AI evaluation infrastructure: deterministic evals, redaction of persisted output, human-gated promotion with rollback awareness.",
    period: "2024 — Now",
  },
];

const stack = [
  { group: "Product", items: ["TypeScript", "JavaScript", "React", "Next.js", "Vue", "Nuxt"] },
  { group: "Systems", items: ["Node.js", "Python", "REST", "GraphQL", "SQL", "Postgres"] },
  { group: "Platform", items: ["Docker", "CI/CD", "AWS", "Google Cloud", "Git", "Jest"] },
  { group: "Applied AI", items: ["Tool use", "Retrieval", "Evals", "Human approval", "Observability"] },
];

export default function About() {
  return (
    <div className="zc About">
      <header className="zc-page-head">
        <div className="zc-page-head-inner">
          <span className="zc-badge-dark">Senior Software Engineer</span>
          <h1 className="zc-h1 small">
            Frontend-led product engineering.
            <br />
            <span className="zc-accent-dark">TypeScript-first. Remote.</span>
          </h1>
          <p className="zc-lead">
            I own the frontend from architecture to shipped product — eight years
            building and modernizing data-rich web platforms, across teams from
            3-person startups to 100+ companies. I also design, build, deploy,
            and operate production systems end-to-end on my own.
          </p>
          <div className="zc-hero-cta">
            <a className="zc-btn primary" href="/resume.html" target="_blank" rel="noreferrer">
              Full résumé →
            </a>
            <a className="zc-btn ghost" href="mailto:zacarlin@gmail.com">Email me</a>
          </div>
        </div>
      </header>

      {/* EXPERIENCE */}
      <section className="zc-section">
        <h2 className="zc-kicker">Experience</h2>
        <div className="zc-timeline">
          {experience.map((e) => (
            <article className="zc-role" key={e.company}>
              <div className="zc-role-time">{e.period}</div>
              <div className="zc-role-body">
                <h3>{e.company}</h3>
                <div className="zc-role-sub">{e.role}</div>
                <ul>
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INDEPENDENT */}
      <section className="zc-section zc-section-alt">
        <h2 className="zc-kicker">Independent</h2>
        {independent.map((i) => (
          <article className="zc-role" key={i.t}>
            <div className="zc-role-time">{i.period}</div>
            <div className="zc-role-body">
              <h3>{i.t}</h3>
              <div className="zc-role-sub">Owner · Product Engineer · Operator</div>
              <p>{i.d}</p>
            </div>
          </article>
        ))}
      </section>

      {/* STACK */}
      <section className="zc-section">
        <h2 className="zc-kicker">Technical core</h2>
        <div className="zc-stack">
          {stack.map((s) => (
            <div className="zc-stack-col" key={s.group}>
              <div className="zc-stack-head">{s.group}</div>
              <ul>
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="zc-cta">
        <div className="zc-cta-inner">
          <h3>Let's talk.</h3>
          <p>Senior and founding engineering roles — remote, US authorized.</p>
          <div className="zc-cta-btns">
            <a className="zc-btn light" href="mailto:zacarlin@gmail.com">Email</a>
            <a className="zc-btn light" href={config.links.find((l) => l.title === "LinkedIn")?.url} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="zc-btn light" href={config.links.find((l) => l.title === "GitHub")?.url} target="_blank" rel="noreferrer">GitHub</a>
            <Link className="zc-btn light" to="/projects">Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
