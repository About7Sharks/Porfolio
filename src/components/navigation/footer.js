import React from "react";

export default function Footer() {
  return (
    <div id="footer">
      <h3>
        Want to talk? <br></br> lets connect!
      </h3>
      <form>
        <input type="text" placeholder="elon@x.com" />
        <text-area></text-area>
        <button>Send</button>
      </form>
      <p>
        Built with <span style={{ color: "red" }}>❤</span> by Zach
      </p>
    </div>
  );
}
