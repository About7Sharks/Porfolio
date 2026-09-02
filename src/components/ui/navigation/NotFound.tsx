import { useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../../Config";
import "./NotFound.scss";

const codes = [
  { code: "404", sub: "this page shipped to /dev/null" },
  { code: "418", sub: "I'm a teapot, and I have no tea for you" },
  { code: "500", sub: "the server threw a tantrum (it's fine)" },
  { code: "404", sub: "route not found, but Zac still ships" },
];

export default function NotFound() {
  const [i, setI] = useState(() => Math.floor(Math.random() * codes.length));
  const [spin, setSpin] = useState(0);
  const pick = codes[i];
  const email = config.links.find((l: any) => l.title === "Email");

  const hop = () => {
    setI((v) => (v + 1) % codes.length);
    setSpin((s) => s + 1);
  };

  return (
    <div className="nf-wrap">
      <div className="nf-grid">
        <button
          type="button"
          className="nf-code nf-code-btn"
          onClick={hop}
          title="click me"
        >
          <span key={spin} className="nf-code-num" aria-hidden="true">
            {pick.code}
          </span>
        </button>
        <h1 className="nf-head">
          <span className="nf-line">You found a</span>
          <span className="nf-line nf-accent">{pick.code}.</span>
          <span className="nf-line nf-sub">{pick.sub}.</span>
        </h1>
        <div className="nf-actions">
          <Link to="/" className="nf-btn nf-primary">
            &larr; take me home
          </Link>
          <a href={email ? email.url : "mailto:zacarlin@gmail.com"} className="nf-btn">
            ping Zac
          </a>
        </div>
        <p className="nf-foot mono">
          this page is uncensorable too &mdash; it lives on IPFS as much as the rest
        </p>
      </div>
    </div>
  );
}
