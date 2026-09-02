import React from "react";
import { Link } from "react-router-dom";
import zac from "../../assets/img/zac-ridge.jpg";
import "./About.scss";

const hobbies = [
  { icon: "🏋️", label: "Lifts", detail: "deadlifts, bench, and a barbell that's seen things" },
  { icon: "📸", label: "Photos", detail: "golden hour, film cameras, sunsets" },
  { icon: "✈️", label: "Travels", detail: "Tampa-based but not Tampa-pinned" },
  { icon: "🍺", label: "Homebrew", detail: "wrote the sensor, now writes the recipe" },
  { icon: "🎮", label: "Retro", detail: "WASM Game of Life, pose bots, rokuremote" },
  { icon: "🛠️", label: "Tinkers", detail: "if it has a port or a websocket, I've looked at it" },
];

const stack = ["React", "TypeScript", "Node.js", "Rust", "WASM", "Solidity", "Cloudflare", "React Native", "MCP"];

export default function About() {
  return (
    <div className="zc About">
      {/* ================= INTRO ================= */}
      <section className="a-intro">
        <div className="a-grid zc-wrap">
          <div className="a-copy reveal">
            <div className="a-kicker">
              <span className="zc-pixel" />
              <span className="kicker">about · the person behind the commits</span>
            </div>
            <h1 className="a-h1">
              Zac Carlin
              <br />
              <span className="hl">for the</span> interwebs.
            </h1>

            <p className="a-lede">
              I'm a software engineer in Tampa, FL. I've spent the last decade
              shipping real products — production fintech UI, IoT fermentation
              sensors, AI chat widgets, a self-hosted MCP server that agents
              can call. But "engineer" undersells it.
            </p>

            <p className="a-lede-2">
              I think the web should be{" "}
              <strong>uncensorable</strong>. So this site is mirrored to{" "}
              <strong>IPFS</strong> and addressed through{" "}
              <strong>ENS</strong> — the same bytes, pulled from{" "}
              <strong>zacarlin.eth</strong> on any node, whether or not some
              registrar has an opinion about it. One more copy of the
              interwebs that's harder to take down.
            </p>

            <div className="a-ctas">
              <a href="mailto:zacarlin@gmail.com" className="zc-btn primary">
                Say hi →
              </a>
              <Link to="/journal" className="zc-btn">
                Read the posts
              </Link>
            </div>

            <div className="a-meta">
              <span className="chip">Tampa, FL</span>
              <span className="chip">open to work</span>
              <span className="chip">IPFS + ENS native</span>
            </div>
          </div>

          <div className="a-photo reveal" data-reveal-delay="150">
            <div className="a-photo-frame">
              <img src={zac} alt="Zac on a ridge, hands on hips" className="a-photo-img" />
              <span className="a-photo-tag mono">zacarlin.eth</span>
            </div>
            <div className="a-photo-badge">
              <span>real photo</span>
              <span className="mono">no ai filter</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HOBBIES ================= */}
      <section className="a-hobbies reveal">
        <div className="zc-wrap">
          <h2 className="a-h2">
            Not at work, I'm <span className="hl">still building</span>
          </h2>
          <p className="a-hobbies-lede">
            The stuff that makes the code good. None of these have a
            <em> job title</em> attached.
          </p>

          <div className="a-hob-grid">
            {hobbies.map((h) => (
              <div key={h.label} className="a-hob">
                <div className="a-hob-icon">{h.icon}</div>
                <div className="a-hob-name">{h.label}</div>
                <div className="a-hob-detail">{h.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section className="a-stack reveal">
        <div className="zc-wrap">
          <h2 className="a-h2">
            Tools I actually <span className="hl">reach for</span>
          </h2>
          <p className="a-stack-lede">
            Not a wall of logos. The stuff that shows up in real diffs.
          </p>
          <div className="a-stack-tags">
            {stack.map((s) => (
              <span key={s} className="a-stack-chip">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= THE BELIEF ================= */}
      <section className="a-belief reveal">
        <div className="a-belief-inner zc-wrap">
          <div className="a-belief-kicker kicker">why ipfs, actually</div>
          <h2 className="a-belief-h2">
            The web I want to live in
            <br />
            doesn't ask permission.
          </h2>
          <p className="a-belief-p">
            The main site ships through the usual CDN, sure — it's fast and
            it works. But there's a second copy of the exact same build,
            mirrored to <strong>IPFS</strong> and addressable through{" "}
            <strong>ENS</strong>. Pull it from <em>any</em> node and you get
            the same bytes. No single registrar, no single host, no single
            point of failure.
          </p>
          <p className="a-belief-p">
            That's not a feature. It's the point. The <em>interwebs 🕸️</em>{" "}
            used to mean that, and I'd like it back.
          </p>
          <div className="a-belief-ctas">
            <a
              href="https://ipfs.io/ipns/zacarlin.eth"
              target="_blank"
              rel="noopener noreferrer"
              className="zc-btn"
            >
              see the IPFS copy →
            </a>
            <Link to="/projects" className="zc-btn">
              see what I've shipped →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="a-cta reveal">
        <div className="a-cta-inner zc-wrap">
          <h2 className="a-cta-h2">
            Want to talk?
            <br />
            <span className="hl">Drop a line.</span>
          </h2>
          <div className="a-cta-btns">
            <a href="mailto:zacarlin@gmail.com" className="zc-btn primary">
              zacarlin@gmail.com
            </a>
            <a
              href="https://github.com/about7sharks"
              target="_blank"
              rel="noopener noreferrer"
              className="zc-btn"
            >
              github ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
