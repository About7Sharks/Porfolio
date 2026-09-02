import { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import { getArticle } from "socks-librarian";
import { config } from "../../Config";
import { useLocation, Link } from "react-router-dom";
import "../../styles/posts.scss";

type LocationState = { state: any };

export default function BlogPostViewer(props: any) {
  const { state } = useLocation() as LocationState;
  const [postData, setPost] = useState({
    content: "",
    data: { date: "", title: "", author: "" },
  });
  const [Id] = useState(props.match.params.id);

  useEffect(() => {
    if (state === undefined && postData.content === "") {
      const getPost = async () => {
        const post = await getArticle({
          article: Id,
          user: config.user,
          repo: config.repo,
        });
        return setPost(matter(post) as any);
      };
      getPost();
    } else if (state !== undefined) {
      return setPost({ ...state });
    }
    window.scrollTo(0, 0);
  }, [state, postData, Id]);

  // reading progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, h.scrollTop / max) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [postData.content]);

  // estimate minutes to read
  const words = (postData.content || "").split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 220));

  // share this post
  const [shared, setShared] = useState(false);
  const share = async () => {
    const url = window.location.href;
    const data = { title: postData.data.title || "zacarlin.org", url, text: postData.data.title || "" };
    try {
      if (navigator.share) { await navigator.share(data); return; }
      throw new Error("no native share");
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch { /* noop */ }
    }
  };

  // table of contents — extract h2s, auto-ID them, only show if 3+ sections.
  // HashRouter-safe: clicking scrolls via JS (not href="#id" which would be a route).
  const toc = useMemo(() => {
    const md = postData.content || "";
    const re = /^##\s+(.+)$/gm;
    const items: { id: string; text: string }[] = [];
    let m: RegExpExecArray | null;
    let n = 0;
    while ((m = re.exec(md))) {
      n++;
      const text = m[1].trim();
      const id = "sec-" + n + "-" + text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
      items.push({ id, text });
    }
    return items;
  }, [postData.content]);
  // assign IDs to rendered h2s after the body mounts
  useEffect(() => {
    const body = document.getElementById("post-body");
    if (!body || toc.length === 0) return;
    const h2s = body.querySelectorAll("h2");
    h2s.forEach((h, i) => {
      if (toc[i]) h.id = toc[i].id;
    });
  }, [postData.content, toc]);
  const jumpTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <article className="post">
      <div className="post-progress" style={{ transform: "scaleX(" + progress + ")" }} />
      <div className="post-head">
        <button
          className="skip-link mono"
          onClick={() => {
            const b = document.getElementById("post-body");
            if (b) b.focus();
          }}
        >
          skip to content ↓
        </button>
        <div className="post-head-top">
          <Link to="/journal" className="post-back mono">
            ← back to the journal
          </Link>
          <button className="post-share mono" onClick={share} aria-label="Share this post">
            {shared ? "✓ copied" : "share ↗"}
          </button>
        </div>
        <div className="post-kicker mono">
          {postData.data.author || "zac"} · {postData.data.date || ""} · ~{mins} min read
        </div>
        <h1 className="post-title">{postData.data.title || "Untitled"}</h1>
        <div className="post-rule" />
        {toc.length >= 3 && (
          <nav className="post-toc" aria-label="On this page">
            <span className="post-toc-label mono">on this page</span>
            <ol className="post-toc-list">
              {toc.map((t, i) => (
                <li key={t.id}>
                  <button className="post-toc-link mono" onClick={() => jumpTo(t.id)}>
                    <span className="post-toc-num">{String(i + 1).padStart(2, "0")}</span>
                    {t.text}
                  </button>
                </li>
              ))}
            </ol>
          </nav>
        )}
      </div>
      <div className="post-body article" id="post-body" tabIndex={-1}>
        <ReactMarkdown
          className={"post-md " + props.match.params.id}
          linkTarget="_blank"
          children={postData.content || "Nothing to read here — yet."}
        />
      </div>
      <div className="post-end">
        <div className="post-end-line" />
        <p className="post-end-p mono">
          that's the post.{" "}
          <Link to="/" className="post-end-link">
            back home →
          </Link>
        </p>
      </div>
    </article>
  );
}
