import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BRAND = "Zac Carlin";

// per-route <title> — was static (same tab title on every page).
// Post detail (journal/:id) sets its own title from the loaded article.
export default function RouteTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (/^\/journal\/[^/]+/.test(pathname)) return; // Post handles it
    if (pathname === "/projects") document.title = `Projects — ${BRAND}`;
    else if (pathname === "/about") document.title = `About — ${BRAND}`;
    else if (pathname === "/journal") document.title = `Journal — ${BRAND}`;
    else document.title = `Zac Carlin — I build the things that run on the web`;
  }, [pathname]);

  return null;
}
