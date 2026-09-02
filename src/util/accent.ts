// Accent theme switcher — one token (`--accent` / `--accent-2`) re-skins the
// whole site live. Persisted to localStorage, applied pre-paint to avoid flash.
export interface AccentTheme {
  id: string;
  label: string;
  accent: string;
  accent2: string;
  /* the hard offset shadow needs to read against the new accent — keep it hot */
  shadow?: string;
}

export const ACCENT_THEMES: AccentTheme[] = [
  { id: "ember",  label: "ember",  accent: "#ff5c00", accent2: "#ffd60a" },
  { id: "volt",   label: "volt",   accent: "#ffd60a", accent2: "#ff5c00" },
  { id: "signal", label: "signal", accent: "#4d74ff", accent2: "#22d3ee" },
  { id: "fuchsia",label: "fuchsia",accent: "#ff4fa3", accent2: "#ffd60a" },
];

const KEY = "z4c-accent";

export function applyAccent(id: string) {
  const t = ACCENT_THEMES.find((x) => x.id === id) || ACCENT_THEMES[0];
  const r = document.documentElement.style;
  r.setProperty("--accent", t.accent);
  r.setProperty("--accent-2", t.accent2);
  // keep the hard offset shadow on-brand with the new accent
  r.setProperty("--shadow", `6px 6px 0 0 ${t.accent}`);
  r.setProperty("--shadow-sm", `3px 3px 0 0 ${t.accent}`);
  r.setProperty("--shadow-lg", `10px 10px 0 0 ${t.accent}`);
  try { document.documentElement.dataset.accent = t.id; } catch (_e) { /* noop */ }
  return t;
}

export function currentAccent(): AccentTheme {
  let id = "";
  try { id = localStorage.getItem(KEY) || ""; } catch (_e) { /* noop */ }
  return ACCENT_THEMES.find((x) => x.id === id) || ACCENT_THEMES[0];
}

export function nextAccent(fromId?: string): AccentTheme {
  const i = ACCENT_THEMES.findIndex((x) => x.id === (fromId || currentAccent().id));
  const t = ACCENT_THEMES[(i + 1) % ACCENT_THEMES.length];
  applyAccent(t.id);
  try { localStorage.setItem(KEY, t.id); } catch (_e) { /* noop */ }
  return t;
}

// apply the saved theme as early as possible (called once at module import)
export function hydrateAccent() {
  if (typeof document === "undefined") return;
  applyAccent(currentAccent().id);
}
// run it immediately for callers who import for side effects
hydrateAccent();
