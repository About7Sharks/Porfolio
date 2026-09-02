import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config";
import { featured } from "../../data/featured";
import zac from "../../assets/img/zac-ridge.jpg";
import "./Home.scss";

const socials = config.links.slice(0, 4);

export default function Home() {
  return (
    <div className="zc Home">
      {/* ============================ HERO ============================ */}
      <section className="hero">
        <div className="hero-grid zc-wrap">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="zc-pixel" />
              <span className="kicker">
                {config.name} · Tampa, FL · open to work
              </span>
            </div>

            <h1 className="hero-h1">
              I build
              <br />
              <span className="hl">the things</span>
              <br />
              that run
              <br />
              <span className="hl2">on the</span> web.
            </h1>

            <p className="hero-lede">
              Frontend engineer with real shipping behind it. I build
              production UI, wire up the APIs and agents behind it, and ship
              the whole thing to the <strong>interwebs 🕸️</strong> —
              uncensorable, mirrored to IPFS.
            </p>

            <div className="hero-ctas">
              <Link to="/projects" className="zc-btn primary">
                See the work →
              </Link>
              <a href="#journal" className="zc-btn">
                Read the posts
              </a>
            </div>

            <div className="hero-meta">
              <span className="chip">🐴 for humans, of course</span>
              <span className="chip">⚡ IPFS + ENS native</span>
              <span className="chip">🏋️ lifts · ✈️ travels</span>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-frame">
              <img src={zac} alt="Zac on a ridge, hands on hips" className="photo-img" />
              <span className="photo-tag mono">zacarlin.eth</span>
            </div>
            <div className="photo-badge">
              <span>100% hand-rolled.</span>
              <span className="mono">no ai filter.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= FEATURED WORK ======================= */}
      <section className="work">
        <div className="zc-wrap">
          <div className="work-head">
            <h2>
              Featured
              <br />
              work
            </h2>
            <p className="work-head-p">
              The stuff that ships and stays shipped. Not a résumé — the
              projects I'd actually defend on a whiteboard.
            </p>
          </div>

          <div className="work-list">
            {featured.map((p, i) => (
              <a
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={"work-row work-row-" + (p.accent || "accent")}
              >
                <div className="work-row-index mono">
                  0{i + 1}
                </div>
                <div className="work-row-body">
                  <div className="work-row-top">
                    <h3>{p.title}</h3>
                    <span className="zc-chip">{p.tag}</span>
                  </div>
                  <p className="work-row-blurb">{p.blurb}</p>
                  <div className="work-row-foot">
                    <span className="work-row-period mono">{p.period}</span>
                    <span className="work-row-arrow">↗</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="work-cta">
            <Link to="/projects" className="zc-btn ink">
              All projects + the fun stuff →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================== FOOTER ========================== */}
      <footer className="foot">
        <div className="foot-top zc-wrap">
          <div className="foot-links">
            {socials.map((l) => (
              <a
                key={l.title}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="foot-link"
              >
                {l.title}
                <span className="mono">↗</span>
              </a>
            ))}
          </div>
          <div className="foot-note">
            <span className="foot-note-1">zacarlin.org</span>
            <span className="foot-note-2 mono">
              pinned to ipfs · served from your node
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
