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
  "Meerkat",
  "Sit Up Coach",
  "Carlin Fitness",
  "Conways Game of Life using WebAssembly and Javascript",
  "Pose Bot",
];
export const hobbies = ["Web Development", "Bodybuilding", "Traveling"];

export const curatedArticles = [
  {
  title: "Ethereum Name Service",
  url: "local",
  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbitexpert.io%2Fwp-content%2Fuploads%2F2019%2F10%2F1Ethereum-Name-Service.jpg",
  text: "The Ethereum Name Service aims to make Ethereum easier to use, which is a key factor in the mass adoption of cryptocurrencies and blockchain technology.",
  tags: ["Blockchain"],
  },
  {
  title: "AR Business Card",
  url: "local",
  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.s-nbcnews.com%2Fj%2Fnewscms%2F2017_37%2F2152646%2F170912-augmented-reality-mn-1555_ef744fbb489d79f4a3668d5b7560dd5b.fit-760w.jpg&f=1&nofb=1",
  text: "A business card powered by Viro Augmented Reality technology.",
  tags: ["AR", "Javascript"],
  },
  {
  title: "Blockstack Platform",
  url: "local",
  img: "https://blog.blockstack.org/wp-content/uploads/2018/11/blockstack_og-86ab19adbc455cc17a097b505e20f44c-1600.png",
  text: "Blockstack makes it easy for users to access the powerful privacy features of blockchain technology through a (PoX) system backed by Bitcoin.",
  tags: ["Blockchain"],
  },
  {
  title: "Tech Uses",
  url: "local",
  img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Retrocomputer_02.jpg",
  text: "As a software engineer, I experiment with and utilize various technologies on a daily basis. Here are the ones I use most frequently.",
  tags: ["Tech", "Personal"],
  },
  {
  title: "Improving Personal Security",
  url: "local",
  img: "https://cdn.pixabay.com/photo/2019/03/03/14/38/hacker-4031973_960_720.jpg",
  text: 'A personal account of improving security, sparked by a surprising Snapchat from my girlfriend while I was browsing on my phone.',
  tags: ["Security"],
  },
  {
  title: "Why Use Crypto",
  url: "local",
  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.reviewsxp.com%2Fblog%2Fwp-content%2Fuploads%2F2021%2F06%2Fcrypto-2048x1365.jpg&f=1&nofb=1",
  text: "Discover the benefits of using cryptocurrencies, including Bitcoin, and learn why they matter in today's tech landscape.",
  tags: ["Bitcoin", "Crypto", "Tech", "Featured"],
  }  
]; 

// an array of title articles to skip
export const skip = ["README", "About"];

export const paths = [
  {
    path:["/","/home"],
    component: lazy(() => import("components/home/Home")), 
    exact: true,
  },
  {
    path:"/journal",
    component:lazy(() => import("components/journal/AllPosts")),
    exact: true,
  },
  {
    path:"/journal/:id",
    component:lazy(() => import("components/journal/Post")),
    exact: false,
  },
  {
    path: '/about',
    component: lazy(() => import("components/about")),
    exact: true,
  },
  {
    path: '/projects',
    component: lazy(() => import("components/projects/projects")),
    exact: true,
  },
  // {
  //   path: "*",
  //   render: ()=> <Redirect to="/"/>,
  //   exact: false
  // }
]