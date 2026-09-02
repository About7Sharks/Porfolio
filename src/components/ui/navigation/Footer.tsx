import { useEffect, useRef } from "react";
import { SocialLinks } from "./SocialLinks";
import { attachCopyEmail } from "../../../util/love";
import { config } from "../../../Config";
import "../../../styles/footer.scss";

export default function Footer() {
  const copyRef = useRef<HTMLButtonElement | null>(null);
  const email = (config.links.find((l: any) => l.title === "Email") as any)?.url?.replace("mailto:", "") || "zacarlin@gmail.com";

  useEffect(() => {
    if (!copyRef.current) return;
    const clean = attachCopyEmail(copyRef.current, email);
    return clean;
  }, [email]);

  return (
    <div id="footer">
      <div className="f-left">
        <h3>Let&apos;s connect</h3>
        <p className="f-sub mono">
          no gatekeepers, no tracking pixels, just a human who ships
        </p>
      </div>
      <div className="f-mid">
        <SocialLinks />
        <button
          ref={copyRef}
          className="f-copy mono"
          type="button"
          title="Copy Zac's email to your clipboard"
        >
          <span className="f-copy-label">copy email</span>
          <span className="f-copy-addr" aria-hidden="true">{email}</span>
        </button>
      </div>
      <div className="f-right">
        <button
          className="f-help mono"
          type="button"
          onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "?", bubbles: true }))}
          title="Keyboard shortcuts & easter eggs"
        >
          press <kbd>?</kbd> for the cheat sheet
        </button>
        <p className="mono">
          built with <span>❤</span> by zac
        </p>
        <p className="mono f-ipfs">
          uncensorable · ipfs · zacarlin.eth
        </p>
      </div>
    </div>
  );
}
