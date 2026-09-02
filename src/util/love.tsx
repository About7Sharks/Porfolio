import React, { useEffect } from "react";

function setupRevealObserver() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  const observe = () =>
    document
      .querySelectorAll(".reveal:not(.in)")
      .forEach((el) => io.observe(el));
  observe();
  // route changes mount fresh .reveal nodes — watch for them
  const mo = new MutationObserver(observe);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    io.disconnect();
    mo.disconnect();
  };
}

// Wire up global "love" behaviors: scroll reveals, konami party mode,
// headline emoji bursts. One hook, called once from App.
export function useLove() {
  useEffect(() => {
    const cleanupReveals = setupRevealObserver();

    // -- party mode (konami code) --
    const seq = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "b",
      "a",
    ];
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === seq[i]) {
        i++;
        if (i === seq.length) {
          i = 0;
          document.body.classList.add("party");
          setTimeout(() => document.body.classList.remove("party"), 3000);
        }
      } else if (e.key === seq[0]) {
        i = 1;
      } else {
        i = 0;
      }
    };

    // -- double-click a headline: little emoji burst --
    const EMOJI = ["🕸️", "🚀", "🛠️", "🍺", "🎮", "✨"];
    const burst = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".hero-h1, .a-h1, .p-head-h1")) return;
      for (let n = 0; n < 10; n++) {
        const s = document.createElement("span");
        s.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)];
        const dx = (Math.random() - 0.5) * 220;
        const dy = -(60 + Math.random() * 140);
        Object.assign(s.style, {
          position: "fixed",
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
          zIndex: "9998",
          pointerEvents: "none",
          fontSize: "18px",
          transform: "translate(0,0)",
          transition:
            "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
        });
        document.body.appendChild(s);
        requestAnimationFrame(() => {
          s.style.transform = `translate(${dx}px, ${dy + 180}px) rotate(${
            (Math.random() - 0.5) * 360
          }deg)`;
          s.style.opacity = "0";
        });
        setTimeout(() => s.remove(), 1000);
      }
    };
    document.addEventListener("dblclick", burst);

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("dblclick", burst);
      cleanupReveals();
    };
  }, []);
}
