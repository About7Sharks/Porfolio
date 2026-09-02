#!/usr/bin/env node
// Apply local node_modules patches that aren't covered by patch-package.
// Run automatically via `postinstall`.
//
// Currently patches: socks-librarian (remove the blocking window.alert()
// on GitHub API failure — it traps the user on the Journal page; the
// caller already handles an empty array).

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const base = process.cwd();
let failed = false;

function patch(file, from, to, label) {
  const p = resolve(base, file);
  if (!existsSync(p)) {
    console.warn(`[apply-patches] ${label}: not found, skipping (${file})`);
    return;
  }
  let src = readFileSync(p, "utf8");
  if (src.includes(to) && !src.includes(from)) return; // already applied
  if (!src.includes(from)) {
    console.warn(`[apply-patches] ${label}: pattern not found, leaving as-is`);
    failed = true;
    return;
  }
  src = src.replace(from, to);
  writeFileSync(p, src);
  console.log(`[apply-patches] ${label}: applied`);
}

patch(
  "node_modules/socks-librarian/index.js",
  '    console.log(e, "Error in getArticles");\n    alert("Error in getArticles, try refreshing the page");\n    return [];',
  '    console.log(e, "Error in getArticles");\n    return [];',
  "socks-librarian:no-alert"
);

if (failed) process.exitCode = 0; // non-fatal; warn instead
