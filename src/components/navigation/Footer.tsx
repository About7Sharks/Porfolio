import React from "react";
import { SocialLinks } from "./SocialLinks";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
interface Props {}

export default function Footer(props: Props) {
  return (
    <div id="footer">
      <h3>Lets Connect</h3>
      <SocialLinks />
      <p>
        Built with <span style={{ color: "#f54768" }}>❤</span> by Zach
      </p>
      {/* <ArrowUpwardIcon
        style={{
          position: "absolute",
          top: -20,
          right: 10,
          zIndex: -1,
          background: "rgb(139, 215, 107)",
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      /> */}
    </div>
  );
}
