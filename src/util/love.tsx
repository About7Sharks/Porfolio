import React, { useEffect } from "react";

// -- scroll reveals: fade/slide in when scrolled into view ------------------
function setupReveals() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          const d = el.dataset.revealDelay;
          if (d) el.style.transitionDelay = d + "ms";
          el.classList.add("in");
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
  );
  const observe = () =>
    document.querySelectorAll<HTMLElement>(".reveal:not(.in)").forEach((el) => {
      // stagger the entrance based on data-reveal-delay
      const d = el.dataset.revealDelay;
      if (d) el.style.transitionDelay = d + "ms";
      io.observe(el);
    });
  observe();
  // route changes mount fresh .reveal nodes — watch for them
  const mo = new MutationObserver(observe);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    io.disconnect();
    mo.disconnect();
  };
}

// -- custom cursor: dot + ring that chases the mouse -------------------------
function setupCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  const dot = document.createElement("div");
  dot.className = "love-cursor-dot";
  const ring = document.createElement("div");
  ring.className = "love-cursor-ring";
  document.body.appendChild(dot);
  document.body.appendChild(ring);
  let mx = -100, my = -100, rx = -100, ry = -100;
  const onMove = (e: MouseEvent) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px)`;
    const t = e.target as HTMLElement;
    const hot = !!(t.closest("a, button, .tilt, .zc-btn, .chip, .work-row, .p-feat-card, .p-tile"));
    ring.classList.toggle("hot", hot);
  };
  let raf = 0;
  const loop = () => {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    raf = requestAnimationFrame(loop);
  };
  window.addEventListener("mousemove", onMove);
  raf = requestAnimationFrame(loop);
  return () => {
    window.removeEventListener("mousemove", onMove);
    cancelAnimationFrame(raf);
    dot.remove();
    ring.remove();
  };
}

// -- 3D tilt on .tilt elements (dynamic — picks up route mounts) ------------
function setupTilt() {
  if (window.matchMedia("(pointer: coarse)").matches) return () => {};
  const attached = new WeakSet<HTMLElement>();
  const cleanups = new Map<HTMLElement, Array<() => void>>();
  const attach = (el: HTMLElement) => {
    if (attached.has(el)) return;
    attached.add(el);
    const max = 7;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * max}deg) rotateX(${-py * max}deg) translate(-2px, -2px)`;
      el.style.boxShadow = `${8 + px * 6}px ${8 + py * 6}px 0 0 var(--accent)`;
    };
    const onLeave = () => {
      el.style.transform = "";
      el.style.boxShadow = "";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    cleanups.set(el, [
      () => el.removeEventListener("mousemove", onMove),
      () => el.removeEventListener("mouseleave", onLeave),
    ]);
  };
  const scan = () => document.querySelectorAll<HTMLElement>(".tilt").forEach(attach);
  scan();
  const mo = new MutationObserver(scan);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    mo.disconnect();
    cleanups.forEach((fns) => fns.forEach((f) => f()));
    cleanups.clear();
  };
}

// -- konami party mode --------------------------------------------------------
function setupKonami() {
  const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let i = 0;
  const onKey = (e: KeyboardEvent) => {
    if (e.key === seq[i]) {
      i++;
      if (i === seq.length) {
        i = 0;
        document.body.classList.add("party");
        const toast = document.createElement("div");
        toast.className = "party-toast";
        toast.textContent = "party mode unlocked 🎉";
        document.body.appendChild(toast);
        setTimeout(() => document.body.classList.remove("party"), 3000);
        setTimeout(() => toast.remove(), 3200);
      }
    } else if (e.key === seq[0]) {
      i = 1;
    } else {
      i = 0;
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}

// -- double-click a headline: emoji burst ------------------------------------
function setupBurst() {
  const EMOJI = ["🕸️", "🚀", "🛠️", "🍺", "🎮", "✨"];
  const burst = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".hero-h1, .a-h1, .p-head-h1, .a-belief-h2, .a-cta-h2, .p-cta-h2")) return;
    for (let n = 0; n < 14; n++) {
      const s = document.createElement("span");
      s.textContent = EMOJI[Math.floor(Math.random() * EMOJI.length)];
      const dx = (Math.random() - 0.5) * 280;
      const dy = -(80 + Math.random() * 180);
      Object.assign(s.style, {
        position: "fixed",
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        zIndex: "9998",
        pointerEvents: "none",
        fontSize: "16px",
        transform: "translate(0,0)",
        transition: "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s ease",
      });
      document.body.appendChild(s);
      requestAnimationFrame(() => {
        s.style.transform = `translate(${dx}px, ${dy + 220}px) rotate(${(Math.random() - 0.5) * 360}deg)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 1000);
    }
  };
  document.addEventListener("dblclick", burst);
  return () => document.removeEventListener("dblclick", burst);
}

// One hook, called once from App. All motion is scoped so it
// never fights the legacy global styles.
export function useLove() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const cleanups = [setupReveals(), setupCursor(), setupTilt(), setupKonami(), setupBurst()];
    return () => {
      document.documentElement.classList.remove("js");
      cleanups.forEach((f) => f && f());
    };
  }, []);
}
