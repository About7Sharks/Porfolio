import matter from "gray-matter";

async function getArticles() {
  let data = await (await fetch("https://api.github.com/repos/About7Sharks/Markdown/git/trees/main?recursive=1")).json();
   data.tree=data.tree.filter((path : any)=>{
    return path.path.includes('md')
   })
   console.log(data.tree)
  let articlesContent =( await Promise.all(
    data.tree.map(async (article: any) => {
      let art = matter(await ( await fetch(`https://raw.githubusercontent.com/About7Sharks/Markdown/main/${article.path}`)).text() );
      if (Object.keys(art.data).length === 0)return
      art = {...art, ...art.data};
      return art;
    })
    )).filter(Boolean);
  localStorage.setItem("data", JSON.stringify(articlesContent));

  return articlesContent;
}
export { getArticles };
