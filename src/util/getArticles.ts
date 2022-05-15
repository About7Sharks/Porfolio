import matter from "gray-matter";

async function getArticles() {
  let data = await (await fetch(`${process.env.REACT_APP_REPO}`)).json();
   data.tree=data.tree.filter((path : any)=>{
    return path.path.includes('md')
   })
  let articlesContent =( await Promise.all(
    data.tree.map(async (article: any) => {
      let art = matter(await ( await fetch(`${process.env.REACT_APP_MD_REPO}${article.path}`)).text() );
      if (Object.keys(art.data).length === 0)return
      art = {...art, ...art.data};
      return art;
    })
    )).filter(Boolean);
  localStorage.setItem("data", JSON.stringify(articlesContent));

  return articlesContent;
}
export { getArticles };
