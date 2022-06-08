import matter from "gray-matter";
import { skip,  config } from "Config";

export type Info = { user: string, repo: string, article?: string }

// helper function to get the repo url
export const _repoData = async({
  user,
  repo,
}: Info) => {
  let data =await fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`)
  data = await data.json();
  return data;
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
export const _cleanRepoData =async(data: any) => {
  let articlesContent = [];
  let files = data.tree;
  let articles = files.filter((file: any) => file.path.includes(".md"));
  let articlePromises = articles.map(async (article: any) => {
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
  articlesContent = (await Promise.all( articlePromises)).filter(Boolean);
  return articlesContent;
};

// function to get all articles
export const getArticles = async ({user=config.user,repo=config.repo}) => {
  try {
    // get all the files from the repo
    let data:any = await _repoData({user, repo});
    let cleanData= await _cleanRepoData(data);
    // store in local storage
    setStorage(cleanData);
    return cleanData;
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
