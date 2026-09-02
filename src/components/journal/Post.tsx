import { useState, useEffect } from "react";
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

  return (
    <article className="post">
      <div className="post-progress" style={{ transform: "scaleX(" + progress + ")" }} />
      <div className="post-head">
        <Link to="/journal" className="post-back mono">
          ← back to the journal
        </Link>
        <div className="post-kicker mono">
          {postData.data.author || "zac"} · {postData.data.date || ""} · ~{mins} min read
        </div>
        <h1 className="post-title">{postData.data.title || "Untitled"}</h1>
        <div className="post-rule" />
      </div>
      <div className="post-body article">
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
