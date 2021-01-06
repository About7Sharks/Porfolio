import React from "react";
import Emoji from "../util/emoji";
import { spinAnimationV2 } from "../util/SpinAnimation";
const aboutStyles = {
  about: {
    paddingTop: "10px",
    color: "white",
    maxWidth: "620px",
    margin: "0 auto",
    display: "inline-flex",
  },
  links: {
    color: "white",
  },
};

export default function About() {
  return (
    <div className="about" style={aboutStyles.about}>
      <h1>{spinAnimationV2("About")}</h1>
      <h2>This site</h2>
      <p>
        I made this as a way to improve my React.js skills, and mess around with
        some new decentralized services. If you're viewing this from
        https://zacarlin.eth.link or https://zacarlin.crypto you are seeing this
        via the IPFS (InterPlanetary File System) and utilizing the Ethereum
        Name Services or Unstoppable domains; making this site{" "}
        <strong>Uncensorable.</strong>
      </p>
      <h2>Hobbies</h2>
      <ul>
        <li>
          <p>
            Bodybuilding <Emoji symbol="🏋️‍♂️" />
          </p>
        </li>
        <li>
          <p>
            Coding <Emoji symbol="💻" />
          </p>
        </li>
        <li>
          <p>
            Going to Florida beaches <Emoji symbol="🌊" />
          </p>
        </li>
        <li>
          <p>
            Traveling <Emoji symbol="🏞" />
          </p>
        </li>
        <li>
          <p>
            Learning Blockchain Technology <Emoji symbol="🏗️" />
          </p>
        </li>
        <li>
          <p>
            Listening to Podcasts and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={aboutStyles.links}
              href="https://open.spotify.com/playlist/37i9dQZF1EphhdCcTha7XI?si=cur9rcxGThiBeHUOPbFRhA"
            >
              music
            </a>
            <Emoji symbol="🎧" />
          </p>
        </li>
        <li>
          <p>
            Reading <Emoji symbol="📚" />
          </p>
        </li>
        <li>
          <p>
            Penetration Testing <Emoji symbol="🧨" />
          </p>
        </li>
        <li>
          <p>
            GF <Emoji symbol="👩🏻‍⚕️" />
          </p>
        </li>
      </ul>

      <span>
        <h2>Resume</h2>&nbsp;-&nbsp;
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            style={aboutStyles.links}
            href="./resume.html"
          >
            View
          </a>
        </p>
      </span>
    </div>
  );
}
