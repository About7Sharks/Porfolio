import matter from "gray-matter";
import { config, skip } from "Config";

async function getArticles() {
  let data = await (await fetch(config._url())).json();
  data.tree = data.tree.filter((path: any) => {
    return path.path.includes("md");
  });
  let articlesContent = (
    await Promise.all(
      data.tree.map(async (article: any) => {
        let _article = matter(
          await (await fetch(`${config.url()}${article.path}`)).text()
        );
        if (Object.keys(_article.data).length === 0) return;
        // If in the skip array, skip it
        if (skip.includes(_article.data.title)) return;
        return { ..._article, ..._article.data };
      })
    )
  ).filter(Boolean);
  localStorage.setItem("data", JSON.stringify(articlesContent));

  return articlesContent;
}
export { getArticles };
