[![Netlify Status](https://api.netlify.com/api/v1/badges/17f4b637-9044-4b4c-87ec-c113fe782332/deploy-status)](https://app.netlify.com/sites/zacs/deploys)
This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app). I've maitained it to be as simple as possible to use. Do note create-react-app is no longer best practice. This is a simple portfolio website that I use for my own personal use. I've made it open source so that others can use it as well.

## Available Scripts
```
npm i # install deps
npm run start # for dev
npm run build # for production (locally)
```

## Release metadata

Production: `npm run build` with `PUBLIC_URL` unset. Private preview:
`npm run build:staging`. Both require a clean committed checkout and stamp the
successful artifact with its actual source revision and UTC build completion time.
Netlify's `COMMIT_REF`, when present, must match the checkout. A dirty tree,
source movement during a build, or failed build prevents stamping.

Generated outputs in `build/` (or explicit `BUILD_PATH`):
- `deployment.json`: bounded revision/build-time record, no credentials or host paths.
- `_headers`: preserves `public/_headers` and appends deployment response headers
  for Netlify. Do not hand-write a current HEAD onto an existing deployed artifact.
- `deployment-headers.conf`: same metadata as nginx `add_header` directives for
  the private preview. Its nginx server includes this file from the served artifact.

`npm run test:release` verifies clean-source enforcement and metadata consistency.
Build into a separate `BUILD_PATH` for local releases; retain the old build,
replace the served artifact only after build success, and recreate the preview
container if replacing its bind-mounted directory. Verify nginx syntax and actual
front-door headers after the deployment. Reloading alone does not replace a
single-file or directory bind mount after an atomic path replacement.

GitHub `main` is connected to Netlify production. Private Gitea delivery alone
does not publish the public site; obtain approval before pushing to GitHub.
Matching revisions establish matching source, not identical bytes: preview and
public builds use different base paths and can have different build times.

## Customize

> 🏗️ Under development

You can change the website for your own personal use by tweaking the `Config.ts`
file.
