import matter from "gray-matter";

async function getArticles() {
  let data = await (
    await fetch(
      "https://api.github.com/repos/About7Sharks/Markdown/git/trees/master?recursive=1"
    )
  ).json();
  let articlesContent = await Promise.all(
    data.tree.map(async (article) => {
      let art = matter(
        await (
          await fetch(
            `https://raw.githubusercontent.com/About7Sharks/Markdown/master/${article.path}`
          )
        ).text()
      );
      art = { ...art, ...art.data };
      delete art.data;
      return art;
    })
  );
  localStorage.setItem("data", JSON.stringify(articlesContent));

  return articlesContent;
}
export { getArticles };
