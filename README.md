This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

```
npm i # install deps
npm run start # for dev
npm run build # for production
```

## Customize

> 🏗️ Under development

You can change the website for your own personal use by tweaking the `.env`
file.

### Journal

This site is designed to fetch post from a github repo named `Markdown`
containing markdown files.

Replace `{githubUsername}` with your github username.

````
REACT_APP_MD_REPO="https://raw.githubusercontent.com/{githubusername}/Markdown/main/"

REACT_APP_REPO="https://api.github.com/repos/{githubusername}/Markdown/git/trees/main?recursive=1"```
````
