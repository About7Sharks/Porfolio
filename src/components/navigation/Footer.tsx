import React from "react";
import { SocialLinks } from "./SocialLinks";

export default function Footer() {
  return (
    <div id="footer">
      <h3>Lets Connect</h3>
      <SocialLinks />
      <p>
        Built with <span style={{ color: "#f54768" }}>❤</span> by Zach
      </p>
    </div>
  );
}
