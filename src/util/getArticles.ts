import matter from "gray-matter";
import { skip,  config } from "Config";


// helper function to get the repo url
export const repoUrl = (
  user: string = config.user,
  repo: string = config.repo,
): string => {
  return `https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`;
};

// helper function to get an article
export const getArticle = async ({
  user = config.user,
  repo = config.repo,
  article = "README",
}) => {
  // if includes .md, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  let data = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
  return data
};
// function to get all articles
export const getArticles = async () => {
  let articlesContent = [];
  try {
    // get all the files from the repo
    let data = await (await fetch(repoUrl())).json();
    // filter out the files that arent markdown
    data.tree = data.tree.filter((path: any) => path.path.includes("md"));
    articlesContent = (
      await Promise.all(
        data.tree.map(async (article: any) => {
          // get the content of the markdown file in text
          let d = await (await getArticle({article:article.path})).text();
          // parse the content of the markdown file
          let _article = matter(d);
          // if the is blank skip
          if (Object.keys(_article.data).length === 0) return;
          // If in the skip array, skip it
          if (skip.includes(_article.data.title)) return;
          return { ..._article, ..._article.data };
        })
      )
    ).filter(Boolean);
    setStorage(articlesContent);
    return articlesContent;
  } catch (e) {
    console.log(e, "Error in getArticles");
  }
};
// stores in local storage
// this is a nice way to store data in local storage
// reducing the amount of calls to the server
const setStorage = (data: any) => {
  localStorage.setItem("data", JSON.stringify(data));
};
