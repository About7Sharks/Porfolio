import React from "react";
import { config } from "../../Config";
import { Link } from "react-router-dom";
import zac from "../../assets/img/zac.png";
import "./About.scss";

const experience = [
  {
    company: "The Fly",
    role: "Frontend technical lead · formerly Main Street Data",
    period: "2023 — Now",
    note: "Joined when it was three of us. It got acquired and is now a 50+ company. I've owned the frontend the whole way — architecture, build, and the AI tooling on top (mcp.thefly.com).",
  },
  {
    company: "Sonobi",
    role: "Senior Software Engineer",
    period: "2022 — 2023",
    note: "React apps on an ad-buying platform, untangling legacy jQuery into hooks, and a handful of contributions to Prebid.js itself.",
  },
  {
    company: "Dogwood Logic",
    role: "Software Engineer",
    period: "2021 — 2022",
    note: "Decentralized identifiers and verifiable credentials in TypeScript, plus Vue for some pretty locked-down healthcare apps.",
  },
  {
    company: "Gulf Photonics",
    role: "Lead developer",
    period: "2018 — 2020",
    note: "Built the software around a photonics fermentation sensor — the kind of IoT thing that lives on a real brewery. Shipped to accubrew.io.",
  },
];

const stack = [
  { group: "Product", items: ["TypeScript", "React", "Next.js", "Vue", "Nuxt"] },
  { group: "Systems", items: ["Node.js", "Python", "GraphQL", "Postgres"] },
  { group: "Platform", items: ["Docker", "CI/CD", "AWS", "GCP"] },
  { group: "Applied AI", items: ["MCP / tool use", "Retrieval", "Evals", "Observability"] },
];

export default function About() {
  const li = (title: string) => config.links.find((l) => l.title === title)?.url;

  return (
    <div className="zc About">
      {/* INTRO */}
      <header className="zc-intro">
        <div className="zc-intro-grid">
          <div className="zc-intro-copy">
            <span className="zc-eyebrow">About, sort of</span>
            <h1 className="zc-display zc-h1">
              I'm Zac.
              <br />
              Engineer, tinkerer,
              <br />
              <span className="zc-accent-word">Tampa sun-chaser.</span>
            </h1>
            <p className="zc-lead">
              For work, I build serious frontend and full-stack systems — the
              kind with real users and real money attached. That's the resume
              part, and it's good, but it's not the whole picture.
            </p>
            <p className="zc-lead">
              I also like the web the way it used to feel — personal, a little
              weird, owned by the person behind it. So this site runs on IPFS,
              it's not a template, and it has my actual face on it. That's
              deliberate.
            </p>
            <div className="zc-hero-cta">
              <a className="zc-btn accent" href="/resume.html" target="_blank" rel="noreferrer">
                The résumé
              </a>
              <a className="zc-btn line" href="mailto:zacarlin@gmail.com">
                Say hi
              </a>
            </div>
          </div>
          <figure className="zc-portrait">
            <img src={zac} alt="Zac at sunset" />
            <figcaption>the real thing, no AI filter</figcaption>
          </figure>
        </div>
      </header>

      {/* THE WEIRD WEB / IPFS */}
      <section className="zc-section zc-web">
        <div className="zc-web-grid">
          <div className="zc-web-copy">
            <span className="zc-eyebrow">A thing I actually believe</span>
            <h2 className="zc-display zc-h2">The web should feel like someone's.</h2>
            <p>
              This whole site is pinned to IPFS and resolvable through my ENS
              name. Not because I'm chasing tokens — because I like that it can't
              be quietly taken down, edited behind my back, or re-sorted by an
              algorithm I didn't choose. A personal site on the personal web.
              It feels right, and it's how I'd want mine to work if I were
              building one.
            </p>
          </div>
          <ul className="zc-web-list">
            <li><span>📌</span> Pinned to IPFS — distributed, uncensorable</li>
            <li><span>⚡️</span> Resolvable at <em>zacarlin</em> on ENS</li>
            <li><span>🎨</span> Hand-built, not a page builder</li>
            <li><span>📸</span> Real photos, no stock, no AI</li>
          </ul>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="zc-section zc-where">
        <span className="zc-eyebrow">Where I've been</span>
        <h2 className="zc-display zc-h2">The path, in plain English.</h2>
        <div className="zc-timeline">
          {experience.map((e) => (
            <article className="zc-role" key={e.company}>
              <div className="zc-role-rail">
                <div className="zc-role-period">{e.period}</div>
              </div>
              <div className="zc-role-body">
                <h3>{e.company}</h3>
                <div className="zc-role-sub">{e.role}</div>
                <p>{e.note}</p>
              </div>
            </article>
          ))}
          <article className="zc-role zc-role-own">
            <div className="zc-role-rail">
              <div className="zc-role-period">2024 — Now</div>
            </div>
            <div className="zc-role-body">
              <h3>My own stuff</h3>
              <div className="zc-role-sub">Z4C &amp; AI reliability systems</div>
              <p>
                Independent work: a live customer-facing platform I design, ship,
                and operate end-to-end, plus private AI-evaluation tooling with
                deterministic regression checks. If I can keep it running
                without a company behind me, that's the job.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* STACK */}
      <section className="zc-section zc-stack-sec">
        <span className="zc-eyebrow">The toolbox</span>
        <h2 className="zc-display zc-h2">What I reach for.</h2>
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
        <p className="zc-stack-note">
          And when it doesn't fit a box, I'll learn the box. That's the whole
          job, honestly.
        </p>
      </section>

      {/* CTA */}
      <section className="zc-cta">
        <div className="zc-cta-inner">
          <h3 className="zc-display">I'd love to hear what you're working on.</h3>
          <p>Remote, US-authorized, and actually responsive. Coffee is negotiable.</p>
          <div className="zc-cta-btns">
            <a className="zc-btn line-light" href="mailto:zacarlin@gmail.com">Email</a>
            <a className="zc-btn line-light" href={li("LinkedIn")} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="zc-btn line-light" href={li("GitHub")} target="_blank" rel="noreferrer">GitHub</a>
            <Link className="zc-btn line-light" to="/projects">Projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
