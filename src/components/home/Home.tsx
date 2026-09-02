import React from "react";
import { Link } from "react-router-dom";
import { config } from "../../Config";
import { featured } from "../../data/featured";
import zac from "../../assets/img/zac.png";
import "./Home.scss";

export default function Home() {
  const li = (title: string) => config.links.find((l) => l.title === title)?.url;

  return (
    <div className="zc Home">
      {/* HERO */}
      <header className="zc-hero">
        <div className="zc-hero-grid">
          <div className="zc-hero-copy">
            <span className="zc-eyebrow">Tampa, Florida · remote-first</span>
            <h1 className="zc-display zc-h1">
              Hey, I'm Zac.
              <br />
              I build things
              <br />
              <span className="zc-accent-word">for the interwebs.</span>
            </h1>
            <p className="zc-lead">
              Software engineer by trade, tinkerer by nature. I spend my days
              doing serious frontend work — TypeScript, React, production AI
              tooling — and my weekends building the weirder stuff. I lift, I
              travel, I take photos at sunset, and I keep this whole site on
              IPFS because I like the idea that it can't just be taken down.
            </p>
            <div className="zc-hero-cta">
              <Link to="/projects" className="zc-btn accent">
                See what I've built
              </Link>
              <Link to="/about" className="zc-btn line">
                More about me
              </Link>
            </div>
            <div className="zc-hero-trust">
              <span className="zc-chip">🏛 Hosted on IPFS · uncensorable</span>
              <span className="zc-chip">⚡️ Zac Carlin on ENS</span>
            </div>
          </div>

          <div className="zc-hero-side">
            <figure className="zc-portrait">
              <img src={zac} alt="Zac at sunset" />
              <figcaption>somewhere warm, probably</figcaption>
            </figure>
            <div className="zc-now">
              <div className="zc-now-head">
                <span className="zc-now-dot" />
                right now
              </div>
              <div className="zc-now-row">
                <strong>Frontend lead</strong>
                <span>The Fly</span>
              </div>
              <div className="zc-now-row">
                <strong>Building</strong>
                <span>AI reliability tooling</span>
              </div>
              <div className="zc-now-row">
                <strong>Also</strong>
                <span>the gym, flights, good coffee</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURED */}
      <section className="zc-section zc-feat">
        <div className="zc-feat-head">
          <span className="zc-eyebrow">The real work</span>
          <h2 className="zc-display zc-h2">Things I've built that matter.</h2>
          <p>
            The projects with actual users and actual stakes. The rest — the fun
            experiments, the "is this even possible" stuff — lives on the{" "}
            <Link to="/projects">projects page</Link>.
          </p>
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
              <div className="zc-feat-visit">
                {f.url.replace("https://", "")} ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* INTO */}
      <section className="zc-section zc-into">
        <span className="zc-eyebrow">Off the clock</span>
        <h2 className="zc-display zc-h2">What I'm actually into.</h2>
        <div className="zc-into-grid">
          <div className="zc-into-item">
            <div className="zc-into-ico">🏋️</div>
            <h4>Lifting</h4>
            <p>Not a gym guy, a lifter. Programmed, heavy, tracked. It's the only rep-counter I actually believe.</p>
          </div>
          <div className="zc-into-item">
            <div className="zc-into-ico">✈️</div>
            <h4>Travel</h4>
            <p>New places, new food, good light. The sunset photos on this site are real — I like taking them.</p>
          </div>
          <div className="zc-into-item">
            <div className="zc-into-ico">🌐</div>
            <h4>Web3, the good parts</h4>
            <p>I use IPFS and ENS because they make sense — decentralized, uncensorable, mine to control. Not a shill, just a believer.</p>
          </div>
          <div className="zc-into-item">
            <div className="zc-into-ico">🧪</div>
            <h4>Built-in weirdness</h4>
            <p>If I can ship it to the browser, I will. WASM, terminals, pose detection, flashloans. Proof of concept is a vibe.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="zc-cta">
        <div className="zc-cta-inner">
          <h3 className="zc-display">Anyway — say hi.</h3>
          <p>I'm open to interesting problems and decent coffee. The inbox is open.</p>
          <div className="zc-cta-btns">
            <a className="zc-btn line-light" href="mailto:zacarlin@gmail.com">
              Email
            </a>
            <a className="zc-btn line-light" href={li("LinkedIn")} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="zc-btn line-light" href={li("GitHub")} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
