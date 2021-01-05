import React from "react";
import { SocialLinks } from "./SocialLinks";
interface Props {}

export default function Footer(props: Props) {
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
