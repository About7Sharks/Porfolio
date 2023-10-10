import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation, LazyMotion, domAnimation } from "framer-motion";
import { spinAnimationV2, Cards, useOnScreen } from "../../util/index";
import Button from "@material-ui/core/Button";
import { getArticles } from "socks-librarian";
import { config } from "../../Config";

export const JournalHome = () => {
  const controls = useAnimation();
  const journalRef = useRef(null);
  const onScreen = useOnScreen(journalRef, '50px');
  const [articles, setArticles]: any[] = useState([]);
  useEffect(() => {
    getArticles({ user: config.user, repo: config.repo }).then(
      (_articles = []) => {
        _articles = _articles.filter((article) =>
          article.tags?.includes("Featured")
        );
        setArticles(_articles);
      }
    );
  }, []);

  useEffect(() => {
    if (onScreen) {
      controls.start({ opacity: 1 });
    }
  }, [onScreen, controls]);

  return (
    <LazyMotion features={domAnimation}>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={controls}
        ref={journalRef}
        className="homePosts"
        id="journalHome"
      >
        <Cards routeExternal={false} data={articles} gridLayout="twoBytwo" />
        <h1>{spinAnimationV2("Journal Posts")}</h1>
        <div className="linkButton">
          <Button component={Link} to="/Journal">
            View All
          </Button>
        </div>
      </motion.div>
    </LazyMotion>
  );
};
