import matter from "gray-matter";
import { skip, config } from "../Config";
// Buffer is not defined error fix
// https://stackoverflow.com/questions/68707553/uncaught-referenceerror-buffer-is-not-defined
// Do to webpack and having created the app with old version of create-react-app
window.Buffer = window.Buffer || require("buffer").Buffer;

export type Info = {
  user: string;
  repo: string;
  article?: string;
};

// helper function to get the repo url
export const _repoData = async ({ user, repo }: Info) =>(await fetch(`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`)).json();

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
  const data = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/main/${article}.md`);
  let content: any = await data.text();
  if (format) ({ content } = matter(content));
  return {
    content,
    data
  };
};

// Get the content of the markdown file in text
// Parse the content of the markdown file
// If blank skip or in skip; skip it
export const _cleanRepoData = async (data: any) => {
  const files = data.tree;
  const articles = files.filter((file: any) => file.path.includes(".md"));
  return (
    await Promise.all(
      articles.map(async (article: any) => {
        const { content } = await getArticle({ article: article.path });
        const _article = matter(content);
        if (Object.keys(_article.data).length === 0 || skip.includes(_article.data.title)) return;
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
    return cleanData;
  } catch (e) {
    console.log(e, "Error in getArticles");
    alert("Error in getArticles, try refreshing the page")
    return [];
  }
};
