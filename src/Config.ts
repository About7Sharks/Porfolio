import {lazy} from 'react';

export const config = {
  user: "About7Sharks",
  name: "Zachary Carlin",
  JobTitle: "Software Engineer",
  location: "Tampa, FL",
  repo: "Markdown",
  links: [
    { title: "Email", url: "mailto:zacarlin@gmail.com", },
    { title: "GitHub", url: "https://github.com/about7sharks" },
    { title: "Twitter", url: "https://twitter.com/ZacharyCarlin", },
    { title: "LinkedIn", url: "https://www.linkedin.com/mwlite/in/zachary-carlin-85402a123", },
    { title: 'Instagram', url: "https://Instagram.com/zachary_carlin" }
  ],
};

export const featuredProjects = [
  "Accubrew",
  "AI Art Gallery",
  "Meerkat",
  "Sit Up Coach",
  // "Carlin Fitness",
  "Flashloan Template",
  "Conways Game of Life using WebAssembly and Javascript",
  "Pose Bot",
];

// an array of title articles to skip
export const skip = ["README", "About"];

export const paths = [
  {
    path:["/","/home"],
    component: lazy(() => import("./components/home/Home")), 
    exact: true,
  },
  {
    path:"/journal",
    component:lazy(() => import("./components/journal/AllPosts")),
    exact: true,
  },
  {
    path:"/journal/:id",
    component:lazy(() => import("./components/journal/Post")),
    exact: false,
  },
  {
    path: '/about',
    component: lazy(() => import("./components/about")),
    exact: true,
  },
  {
    path: '/projects',
    component: lazy(() => import("./components/projects/projects")),
    exact: true,
  },
  // {
  //   path: "*",
  //   render: ()=> <Redirect to="/"/>,
  //   exact: false
  // }
]