export const config = {
  user: "About7Sharks",
  name:'Zachary Carlin',
  JobTitle:'Software Engineer',
  location:'Tampa, FL',
  mdRepoName: "Markdown",
  branch: "main",
  hobbies: ['Web Development','Bodybuilding','Traveling'],
  // CMS functions
  url: () => {
    let { user, branch, mdRepoName } = config;
    return `https://raw.githubusercontent.com/${user}/${mdRepoName}/${branch}/`;
  },
  _url: () => {
    let { user, branch, mdRepoName } = config;
    return `https://api.github.com/repos/${user}/${mdRepoName}/git/trees/${branch}?recursive=1`;
  },
};
