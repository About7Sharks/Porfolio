import matter from "gray-matter";
import {config} from 'Config'
// an array of title articles to skip
let skip= ["README","About"];

async function getArticles() {
  let data = await (await fetch(config.url())).json();
   data.tree=data.tree.filter((path : any)=>{
    return path.path.includes('md')
   })
  let articlesContent =( await Promise.all(
    data.tree.map(async (article: any) => {
      let art = matter(await ( await fetch(`${config._url()}${article.path}`)).text() );
      if (Object.keys(art.data).length === 0)return
      // If in the skip array, skip it
      if (skip.includes(art.data.title)) return
      art = {...art, ...art.data};
      return art;
    })
    )).filter(Boolean);
  localStorage.setItem("data", JSON.stringify(articlesContent));

  return articlesContent;
}
export { getArticles };
