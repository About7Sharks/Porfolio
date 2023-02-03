import matter from "gray-matter";
import { skip, config } from "Config";

export type Info = {
  user: string;
  repo: string;
  article?: string;
};

// helper function to get the repo url
export const _repoData = async ({ user, repo }: Info) =>
  (
    await fetch(
      `https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`
    )
  ).json();

// helper function to get an article
// format:boolean - will return the article in markdown format if true
// article:string - the name of the file/article to fetch
// repo:string - the repo to fetch from
// user:string - the user's repo you're fetching
export const getArticle = async ({
  format = false,
  user = config.user,
  repo = config.repo,
  article = "README",
}) => {
  // if includes .md, remove it
  if (article.includes(".md")) article = article.replace(".md", "");
  let data = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
  let content: any = await data.text();
  if (format) ({ content } = matter(content));
  return {
    content,
    data
  };
};

// Get the content of the markdown file in text
// Parse the content of the markdown file
// If blank skip; if in the skip array, skip it
export const _cleanRepoData = async (data: any) => {
  let files = data.tree;
  let articles = files.filter((file: any) => file.path.includes(".md"));
  return (
    await Promise.all(
      articles.map(async (article: any) => {
        let { content } = await getArticle({ article: article.path });
        let _article = matter(content);
        if (Object.keys(_article.data).length === 0) return;
        if (skip.includes(_article.data.title)) return;
        return { ..._article, ..._article.data };
      })
    )
  ).filter(Boolean);
};

// function to get all articles
export const getArticles = async ({
  user = config.user,
  repo = config.repo,
}) => {
  try {
    // get all the files from the repo
    let cleanData = await _cleanRepoData(await _repoData({ user, repo }));
    console.log(cleanData, "cleanData");
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
const setStorage = (data: any) =>
  localStorage.setItem("data", JSON.stringify(data));
