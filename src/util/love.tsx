import { useEffect } from "react";
import { ACCENT_THEMES, applyAccent, currentAccent, hydrateAccent } from "./accent";
hydrateAccent();

const prefersReduced = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = () => window.matchMedia("(pointer: coarse)").matches;

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
    document
      .querySelectorAll<HTMLElement>(".reveal:not(.in)")
      .forEach((el) => {
        const d = el.dataset.revealDelay;
        if (d) el.style.transitionDelay = d + "ms";
        io.observe(el);
      });
  observe();
  const mo = new MutationObserver(observe);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    io.disconnect();
    mo.disconnect();
  };
}

// -- scramble-decode the page headline on every navigation ------------------
// (joshwcomeau-grade signature: the h1 "decodes" from glyphs into words)
function setupScramble() {
  const GLYPHS = "█▓▒░<>/{}[]#$%&*+=-0123456789";
  const decode = (el: HTMLElement) => {
    const originalHTML = el.dataset.originalHtml || el.innerHTML;
    el.dataset.originalHtml = originalHTML;
    if (prefersReduced()) {
      el.innerHTML = originalHTML;
      return;
    }
    // map each text node to its character range (order = DOM flow), so the
    // reveal sweeps left-to-right even across nested spans/br
    const nodes: Array<{ el: Text; start: number; len: number }> = [];
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let offset = 0,
      n: Node | null;
    while ((n = walker.nextNode())) {
      const t = n as Text;
      const len = t.textContent!.length;
      if (len) nodes.push({ el: t, start: offset, len });
      offset += len;
    }
    const chars = originalHTML.replace(/<[^>]+>/g, "").replace(/\s+/g, "");
    const seed = () => nodes.forEach((nd) => (nd.el.textContent = "█".repeat(nd.len)));
    if (!nodes.length) return;
    seed();
    let frame = 0;
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      el.innerHTML = originalHTML;
    };
    const total = Math.max(24, Math.min(48, chars.length));
    // wall-clock safety: if rAF is throttled (background tab) the heading
    // must never be left as raw glyphs — restore real text on a hard deadline
    const deadline = window.setTimeout(finish, 2600);
    const step = () => {
      if (done) return;
      frame++;
      const target = Math.floor((frame / total) * chars.length);
      nodes.forEach((nd) => {
        const before = Math.max(0, Math.min(nd.len, target - nd.start));
        const after = nd.len - before;
        let s = "";
        for (let k = 0; k < before; k++) s += chars[nd.start + k];
        for (let k = 0; k < after; k++)
          s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        nd.el.textContent = s;
      });
      if (frame < total) requestAnimationFrame(step);
      else {
        clearTimeout(deadline);
        finish();
      }
    };
    requestAnimationFrame(step);
  };
  const run = () => {
    // the page headline only — the home hero keeps its own word-stagger
    const h1 = document.querySelector<HTMLElement>(".p-head-h1, .a-h1, .journal-h1");
    if (h1) decode(h1);
  };
  // hash router → hashchange fires on every route; also fire once on load
  window.addEventListener("hashchange", run);
  const t = window.setTimeout(run, 120);
  return () => {
    window.removeEventListener("hashchange", run);
    window.clearTimeout(t);
  };
}

// -- count-up stats: animate .stat-num to its data-target on reveal ---------
function setupCountUp() {
  const animate = (el: HTMLElement) => {
    const target = parseFloat(el.dataset.target || "0");
    const suffix = el.dataset.suffix || "";
    const dur = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };
    if (prefersReduced()) {
      el.textContent = target + suffix;
      return;
    }
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animate(e.target as HTMLElement);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  const scan = () =>
    document
      .querySelectorAll<HTMLElement>(".stat-num[data-target]:not(.counted)")
      .forEach((el) => {
        el.classList.add("counted");
        io.observe(el);
      });
  scan();
  const mo = new MutationObserver(scan);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    io.disconnect();
    mo.disconnect();
  };
}

// -- cursor spotlight: soft light follows the mouse over .spot cards --------
function setupSpotlight() {
  if (coarsePointer()) return () => {};
  const setVar = (el: HTMLElement, e: MouseEvent) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--sx", e.clientX - r.left + "px");
    el.style.setProperty("--sy", e.clientY - r.top + "px");
  };
  const onMove = (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>(".spot");
    if (t) setVar(t, e);
  };
  document.addEventListener("mousemove", onMove, { passive: true });
  return () => document.removeEventListener("mousemove", onMove);
}

// -- magnetic CTA: .magnet buttons pull gently toward the cursor -----------
function setupMagnetic() {
  if (coarsePointer()) return () => {};
  const strength = 0.28;
  const onMove = (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>(".magnet");
    if (!t) return;
    const r = t.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    t.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };
  const onOut = (e: MouseEvent) => {
    const t = (e.target as HTMLElement).closest<HTMLElement>(".magnet");
    if (!t) return;
    // only clear when actually leaving the magnet (not a child hop)
    const to = (e.relatedTarget as Node | null) || null;
    if (to && t.contains(to)) return;
    t.style.transform = "";
  };
  document.addEventListener("mousemove", onMove, { passive: true });
  document.addEventListener("mouseout", onOut, { passive: true });
  return () => {
    document.removeEventListener("mousemove", onMove);
    document.removeEventListener("mouseout", onOut);
  };
}

// -- film grain: fixed overlay that gives the dark bg real texture ----------
function setupGrain() {
  const g = document.createElement("div");
  g.className = "love-grain";
  g.setAttribute("aria-hidden", "true");
  document.body.appendChild(g);
  return () => g.remove();
}

// -- custom cursor: dot + ring that chases the mouse -------------------------
function setupCursor() {
  if (coarsePointer()) return () => {};
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
    const hot = !!(
      t.closest("a, button, .tilt, .zc-btn, .chip, .work-row, .p-feat-card, .p-tile")
    );
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
  if (coarsePointer()) return () => {};
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
  const scan = () =>
    document.querySelectorAll<HTMLElement>(".tilt").forEach(attach);
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
  const seq = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a",
  ];
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
    if (
      !target.closest(
        ".hero-h1, .a-h1, .p-head-h1, .a-belief-h2, .a-cta-h2, .p-cta-h2, .journal-h1"
      )
    )
      return;
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
        s.style.transform = `translate(${dx}px, ${dy + 220}px) rotate(${
          (Math.random() - 0.5) * 360
        }deg)`;
        s.style.opacity = "0";
      });
      setTimeout(() => s.remove(), 1000);
    }
  };
  document.addEventListener("dblclick", burst);
  return () => document.removeEventListener("dblclick", burst);
}

// -- route wipe: a colored panel sweeps across on every navigation ---------
function setupRouteWipe() {
  if (prefersReduced()) return () => {};
  const wipe = document.createElement("div");
  wipe.className = "route-wipe";
  wipe.innerHTML =
    '<span class="route-wipe-bar"></span><span class="route-wipe-label">zac.arlin</span>';
  document.body.appendChild(wipe);
  let timer: number;
  const play = () => {
    wipe.classList.remove("play");
    // force reflow so the animation restarts
    void wipe.offsetWidth;
    wipe.classList.add("play");
    window.clearTimeout(timer);
    timer = window.setTimeout(() => wipe.classList.remove("play"), 900);
  };
  window.addEventListener("hashchange", play);
  return () => {
    window.removeEventListener("hashchange", play);
    window.clearTimeout(timer);
    wipe.remove();
  };
}

// -- hero terminal: live typing shell — observer-based so it survives
//    Home being lazy-loaded (the element only exists after the route mounts)
function setupHeroTerminal() {
  const lines = [
    "deploy --net ipfs --tag zacarlin.eth --replicas 3",
    "git push gitea donna/site-redesign — done ✓",
    "qmd search 'ipfs uncensorable' — 3 hits",
  ];
  let timer = 0;
  let started = false;

  const start = (el: HTMLElement) => {
    if (started) return;
    started = true;
    el.textContent = el.dataset.type || lines[0];
    if (prefersReduced()) return;
    let li = 0,
      ci = 0,
      deleting = false;
    const tick = () => {
      const line = lines[li];
      if (!deleting) {
        ci++;
        if (ci >= line.length) {
          el.textContent = line;
          deleting = true;
          timer = window.setTimeout(tick, 1500);
          return;
        }
        el.textContent = line.slice(0, ci);
        timer = window.setTimeout(tick, 26 + Math.random() * 40);
      } else {
        ci -= 2;
        if (ci <= 0) {
          ci = 0;
          deleting = false;
          li = (li + 1) % lines.length;
          el.textContent = "";
          timer = window.setTimeout(tick, 320);
          return;
        }
        el.textContent = line.slice(0, ci);
        timer = window.setTimeout(tick, 14);
      }
    };
    el.textContent = "";
    timer = window.setTimeout(tick, 700);
  };

  // find it now if it's there
  const existing = document.querySelector<HTMLElement>(".hero-terminal-cmd");
  if (existing) {
    start(existing);
    return () => window.clearTimeout(timer);
  }

  // otherwise wait for Home to mount
  const mo = new MutationObserver(() => {
    const found = document.querySelector<HTMLElement>(".hero-terminal-cmd");
    if (found) {
      mo.disconnect();
      start(found);
    }
  });
  mo.observe(document.body, { childList: true, subtree: true });
  return () => {
    mo.disconnect();
    window.clearTimeout(timer);
  };
}

// -- scroll hint: "explore ↓" pill — scrolls to #more, hides after scroll --
function setupScrollHint() {
  const hint = document.querySelector<HTMLElement>(".hero-scrollhint");
  if (!hint) return () => {};
  const target = document.getElementById("more");
  const onClick = () => {
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 8;
    if (prefersReduced()) window.scrollTo(0, top);
    else window.scrollTo({ top, behavior: "smooth" });
  };
  hint.addEventListener("click", onClick);
  let raf = 0;
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      hint.classList.toggle("is-hidden", window.scrollY > 60);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => {
    hint.removeEventListener("click", onClick);
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(raf);
  };
}

// -- scroll-to-top: a square button fades in after you've gone deep --------
function setupScrollTop() {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "love-scrolltop";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "&#8593;";
  document.body.appendChild(btn);
  const onScroll = () => {
    const show = window.scrollY > 600;
    btn.classList.toggle("show", show);
  };
  const onClick = () => {
    if (prefersReduced()) window.scrollTo(0, 0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };
  btn.addEventListener("click", onClick);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => {
    btn.removeEventListener("click", onClick);
    window.removeEventListener("scroll", onScroll);
    btn.remove();
  };
}

// -- scroll progress: a thin accent bar across the very top -----------------
function setupScrollProgress() {
  const bar = document.createElement("div");
  bar.className = "love-scroll-progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);
  let raf = 0;
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  onScroll();
  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    cancelAnimationFrame(raf);
    bar.remove();
  };
}

// -- hero parallax: the grid floor drifts as you scroll ---------------------
function setupHeroParallax() {
  if (prefersReduced() || coarsePointer()) return () => {};
  let raf = 0;
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const hero = document.querySelector<HTMLElement>(".hero");
      if (!hero) return;
      const r = hero.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      // 0 at top-of-viewport, grows as hero scrolls out — floor slides toward viewer
      const progress = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height)));
      hero.style.setProperty("--hero-y", `${progress * 90}px`);
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  return () => {
    window.removeEventListener("scroll", onScroll);
    cancelAnimationFrame(raf);
  };
}

// -- "e" easter egg: party mode unlock (e = party) ---------------------------
function setupPartyKey() {
  const burst = (x: number, y: number, count: number) => {
    if (prefersReduced()) return;
    const colors = ["#ff5c00", "#ffe813", "#2b4bff", "#ff4fa3", "#00e5a0"];
    for (let i = 0; i < count; i++) {
      const p = document.createElement("i");
      p.className = "confetti";
      const ang = Math.random() * Math.PI * 2;
      const dist = 60 + Math.random() * 180;
      const size = 6 + Math.random() * 8;
      p.style.left = x + "px";
      p.style.top = y + "px";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.background = colors[(Math.random() * colors.length) | 0];
      p.style.setProperty("--cx", Math.cos(ang) * dist + "px");
      p.style.setProperty("--cy", Math.sin(ang) * dist - 120 + "px");
      p.style.setProperty("--rot", (Math.random() * 720 - 360) + "deg");
      p.style.animationDelay = Math.random() * 80 + "ms";
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 1400);
    }
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "e" && e.key !== "E") return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const t = e.target as HTMLElement;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable))
      return;
    document.body.classList.add("party");
    burst(window.innerWidth / 2, window.innerHeight / 2, 40);
    const toast = document.createElement("div");
    toast.className = "party-toast";
    toast.textContent = "party mode unlocked 🎉";
    document.body.appendChild(toast);
    setTimeout(() => document.body.classList.remove("party"), 4000);
    setTimeout(() => toast.remove(), 4200);
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}


// -- hero photo depth: stickers drift on a z-parallax with the cursor -----
export function setupPhotoDepth(root: ParentNode = document) {
  if (prefersReduced() || coarsePointer()) return () => {};
  const hero = root.querySelector(".hero-photo");
  if (!hero) return () => {};
  const badge = hero.querySelector(".photo-badge");
  const tag = hero.querySelector(".photo-tag");
  // frame is a .tilt element — tilt owns its transform, so we only float the stickers
  const layers: Array<{ el: HTMLElement; fx: number; fy: number }> = [
    { el: badge as HTMLElement, fx: 14, fy: 10 },
    { el: tag as HTMLElement, fx: -10, fy: -8 },
  ].filter((l) => l.el);
  let raf = 0;
  const onMove = (e: MouseEvent) => {
    const r = hero.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width - 0.5;
    const ny = (e.clientY - r.top) / r.height - 0.5;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      layers.forEach((l) => {
        l.el.style.transition = "none"; // 1:1 cursor follow, no lag
        l.el.style.transform = `translate(${nx * l.fx}px, ${ny * l.fy}px)`;
      });
    });
  };
  const onLeave = () => {
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    layers.forEach((l) => {
      l.el.style.transition = "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)";
      l.el.style.transform = "";
    });
  };
  hero.addEventListener("mousemove", onMove, { passive: true });
  hero.addEventListener("mouseleave", onLeave);
  return () => {
    hero.removeEventListener("mousemove", onMove);
    hero.removeEventListener("mouseleave", onLeave);
    if (raf) cancelAnimationFrame(raf);
  };
}
export function setupLiveClock(root: ParentNode = document) {
  const els = Array.prototype.slice.call(
    root.querySelectorAll<HTMLElement>(".live-clock")
  );
  if (!els.length) return () => {};
  const render = () => {
    els.forEach((el) => {
      const tz = el.dataset.tz || "local";
      try {
        el.textContent = new Date().toLocaleTimeString(
          undefined,
          {
            hour: "2-digit",
            minute: "2-digit",
            timeZone: tz === "local" ? undefined : tz,
          }
        );
      } catch (_e) {
        el.textContent = "";
      }
    });
  };
  render();
  const id = window.setInterval(render, 1000);
  return () => window.clearInterval(id);
}


// -- copy email to clipboard + toast (attached per-element, not global) ----
// call: attachCopyEmail(buttonEl, "zacarlin@gmail.com")
// -- accent dock: 4 swatches, bottom-left, re-skins the whole site live ----
function setupAccentDock() {
  const dock = document.createElement("div");
  dock.className = "accent-dock";
  dock.setAttribute("role", "radiogroup");
  dock.setAttribute("aria-label", "Accent colour");
  const label = document.createElement("span");
  label.className = "accent-dock-label mono";
  label.textContent = "accent";
  dock.appendChild(label);
  ACCENT_THEMES.forEach((t) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "accent-swatch";
    b.style.background = t.accent;
    b.title = t.label + " accent";
    b.setAttribute("role", "radio");
    b.setAttribute("aria-label", "Switch accent to " + t.label);
    b.dataset.accentId = t.id;
    b.setAttribute("aria-checked", "false");
    b.addEventListener("click", () => {
      const chosen = nextAccentFrom(t.id);
      syncDock(chosen.id);
      const toast = document.createElement("div");
      toast.className = "party-toast";
      toast.textContent = "accent → " + chosen.label + " ✦";
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 1500);
    });
    dock.appendChild(b);
  });
  const syncDock = (id: string) => {
    dock.querySelectorAll<HTMLElement>(".accent-swatch").forEach((b) => {
      const on = b.dataset.accentId === id;
      b.setAttribute("aria-checked", on ? "true" : "false");
      b.classList.toggle("is-active", on);
    });
  };
  const init = currentAccent().id;
  applyAccent(init);
  syncDock(init);
  document.body.appendChild(dock);
  return () => dock.remove();
}

export function nextAccentFrom(id: string) {
  const t = ACCENT_THEMES.find((x) => x.id === id) || ACCENT_THEMES[0];
  applyAccent(t.id);
  try { localStorage.setItem("z4c-accent", t.id); } catch (_e) { /* noop */ }
  return t;
}

// -- copy button on every <pre> code block (posts + any article) -----------
function setupCopyCode() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        wire(e.target as HTMLElement);
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "120px" });
  const wire = (pre: HTMLElement) => {
    if (pre.querySelector(".copy-code")) return;
    const code = (pre.querySelector("code") || pre).textContent || "";
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-code";
    btn.setAttribute("aria-label", "Copy code");
    btn.innerHTML =
      '<span class="copy-code-icon">⧉</span><span class="copy-code-label mono">copy</span>';
    const doCopy = () => {
      const done = (ok: boolean) => {
        btn.classList.add(ok ? "is-copied" : "is-err");
        const lbl = btn.querySelector(".copy-code-label");
        if (lbl) lbl.textContent = ok ? "copied" : "err";
        setTimeout(() => {
          btn.classList.remove("is-copied", "is-err");
          if (lbl) lbl.textContent = "copy";
        }, 1400);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => done(true), () => done(false));
      } else {
        const ta = document.createElement("textarea");
        ta.value = code;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); done(true); }
        catch (_e) { done(false); }
        ta.remove();
      }
    };
    btn.addEventListener("click", doCopy);
    pre.appendChild(btn);
  };
  const scan = () =>
    document.querySelectorAll<HTMLElement>("pre").forEach((pre) => io.observe(pre));
  scan();
  const mo = new MutationObserver(scan);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => { io.disconnect(); mo.disconnect(); };
}

export function attachCopyEmail(el: HTMLElement, email: string) {
  const doCopy = () => {
    const done = (ok: boolean) => {
      const t = document.createElement("div");
      t.className = "party-toast";
      t.textContent = ok ? "email copied — go say hi 📬" : "copy failed (old browser? try the mailto link)";
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 2400);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(
        () => done(true),
        () => done(false)
      );
    } else {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(true); }
      catch (e) { done(false); }
      ta.remove();
    }
  };
  el.addEventListener("click", doCopy);
  return () => el.removeEventListener("click", doCopy);
}

// One hook, called once from App. All motion is scoped so it
// never fights the legacy global styles.
export function useLove() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const cleanups = [
      setupReveals(),
      setupScramble(),
      setupCountUp(),
      setupSpotlight(),
      setupMagnetic(),
      setupRouteWipe(),
      setupGrain(),
      setupCursor(),
      setupTilt(),
      setupKonami(),
      setupBurst(),
      setupHeroTerminal(),
      setupPartyKey(),
      setupHeroParallax(),
      setupScrollProgress(),
      setupScrollTop(),
      setupScrollHint(),
      setupAccentDock(),
      setupCopyCode(),
    ];
    return () => {
      document.documentElement.classList.remove("js");
      cleanups.forEach((f) => f && f());
    };
  }, []);
}