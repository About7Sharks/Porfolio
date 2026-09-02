import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config";
import { featured, experiments } from "../../data/featured";
import zac from "../../assets/img/zac-ridge.jpg";
import "./Home.scss";

const socials = config.links.slice(0, 4);

export default function Home() {
  return (
    <div className="zc Home">
      {/* ============================ HERO ============================ */}
      <section className="hero">
        <div className="hero-grid zc-wrap">
          <div className="hero-copy reveal" data-reveal-delay="0">
            <div className="hero-kicker">
              <span className="zc-pixel" />
              <span className="kicker">
                {config.name} · Tampa, FL · open to work
              </span>
            </div>

            <h1 className="hero-h1">
              <span className="w" style={{ animationDelay: "0.05s" }}>I</span>{" "}
              <span className="w" style={{ animationDelay: "0.12s" }}>build</span>
              <br />
              <span className="hl w" style={{ animationDelay: "0.2s" }}>the things</span>
              <br />
              <span className="w" style={{ animationDelay: "0.3s" }}>that</span>{" "}
              <span className="w" style={{ animationDelay: "0.36s" }}>run</span>
              <br />
              <span className="hl2 w" style={{ animationDelay: "0.44s" }}>on the</span>{" "}
              <span className="w" style={{ animationDelay: "0.5s" }}>web.</span>
            </h1>

            <p className="hero-lede">
              Frontend engineer with real shipping behind it. I build
              production UI, wire up the APIs and agents behind it, and ship
              the whole thing to the <strong>interwebs 🕸️</strong> —
              uncensorable, mirrored to IPFS.
            </p>

            <div className="hero-ctas">
              <Link to="/projects" className="zc-btn primary magnet">
                See the work →
              </Link>
              <Link to="/journal" className="zc-btn magnet">
                Read the posts
              </Link>
            </div>

            <div className="hero-terminal" aria-hidden="true">
              <span className="hero-terminal-prompt">zac@black:~$</span>
              <span className="hero-terminal-cmd" data-type="deploy --net ipfs --tag zacarlin.eth --replicas 3" />
              <span className="hero-terminal-cursor" />
            </div>

            <div className="hero-meta">
              <span className="chip">🐴 for humans, of course</span>
              <span className="chip">⚡ IPFS + ENS native</span>
              <span className="chip">🏋️ lifts · ✈️ travels</span>
            </div>
          </div>

          <div className="hero-photo reveal" data-reveal-delay="150">
            <div className="photo-frame tilt">
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

      {/* ======================= SKILL MARQUEE ======================= */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-inner">
          {["react", "typescript", "rust", "wasm", "node.js", "mcp servers", "ipfs", "cloudflare", "solana", "playwright", "css that slaps"].map((s, i) => (
            <span key={i} className={i % 4 === 2 ? "m-hot" : ""}>
              {s} ·
            </span>
          ))}
          {["react", "typescript", "rust", "wasm", "node.js", "mcp servers", "ipfs", "cloudflare", "solana", "playwright", "css that slaps"].map((s, i) => (
            <span key={"b" + i} className={i % 4 === 2 ? "m-hot" : ""}>
              {s} ·
            </span>
          ))}
        </div>
      </div>

      {/* ======================= FEATURED WORK ======================= */}
      <section className="work">
        <div className="zc-wrap">
          <div className="work-head reveal">
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
                className={
                  "work-row spot work-row-" +
                  (p.accent || "accent") +
                  " reveal"
                }
                data-reveal-delay={String(i * 110)}
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

          <div className="work-cta reveal">
            <Link to="/projects" className="zc-btn ink magnet">
              All projects + the fun stuff →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== NUMBERS (count-up) ===================== */}
      <section className="stats">
        <div className="zc-wrap">
          <div className="stat-grid reveal">
            <div className="stat">
              <div className="stat-num" data-target="10" data-suffix="+">
                0
              </div>
              <div className="stat-label">years shipping to prod</div>
            </div>
            <div className="stat">
              <div
                className="stat-num"
                data-target={String(featured.length + experiments.length)}
              >
                0
              </div>
              <div className="stat-label">projects shipped &amp; live</div>
            </div>
            <div className="stat">
              <div className="stat-num" data-target="3" data-suffix="x">
                0
              </div>
              <div className="stat-label">web copies of this site — uncensorable</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== THE STATEMENT (giant type) ================== */}
      <section className="band">
        <div className="zc-wrap band-inner reveal">
          <div className="band-line">
            Ship it. <span className="outline">Mirror it.</span>
          </div>
          <div className="band-line">
            <span className="outline">Make it</span> un-take-down-able.
          </div>
          <div className="band-note">
            the whole point of the interwebs, restored 🕸️
          </div>
        </div>
      </section>

      {/* =========================== FOOTER ========================== */}
      <footer className="foot">
        <div className="foot-top zc-wrap reveal">
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
              mirrored to ipfs · pull it from any node
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
