import { lazy } from "react";

export const config = {
  user: "About7Sharks",
  name: "Zachary Carlin",
  JobTitle: "Software Engineer",
  location: "Tampa, FL",
  repo: "Markdown",
  links: [
    { title: "Email", url: "mailto:zacarlin@gmail.com" },
    { title: "GitHub", url: "https://github.com/about7sharks" },
    { title: "Twitter", url: "https://twitter.com/ZacharyCarlin" },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/mwlite/in/zachary-carlin-85402a123",
    },
    { title: "Instagram", url: "https://Instagram.com/zachary_carlin" },
  ],
};

export const featuredProjects = [
  "Accubrew",
  "AI Art Gallery",
  "Meerkat",
  "Sit Up Coach",
  // "Carlin Fitness",
  "Conways Game of Life using WebAssembly and Javascript",
  "Pose Bot",
];

// an array of title articles to skip
export const skip = ["README", "About"];

export const paths = [
  {
    path: ["/", "/home"],
    component: lazy(() => import("./components/home/Home")),
    exact: true,
  },
  {
    path: "/journal",
    component: lazy(() => import("./components/journal/AllPosts")),
    exact: true,
  },
  {
    path: "/journal/:id",
    component: lazy(() => import("./components/journal/Post")),
    exact: false,
  },
  {
    path: "/about",
    component: lazy(() => import("./components/about")),
    exact: true,
  },
  {
    path: "/projects",
    component: lazy(() => import("./components/projects/projects")),
    exact: true,
  },
  // {
  //   path: "*",
  //   render: ()=> <Redirect to="/"/>,
  //   exact: false
  // }
];

export let sites = [
  {
    url: "https://public.sockastle.com",
    img: "https://public.sockastle.com:433/api/files/4u7atfzk7jmzdxg/jrx7dnn88a0ueg5/paint_modern_art_like_a_5_year_old_LM9TNHd7ff.png",
    title: `AI Art Gallery`,
    text: `AI generated art gallery`,
    tags: [`AI`, `React`, `Javascript`],
  },
  {
    url: `https://accubrew.io`,
    img: `data:image/jpeg;base64,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`,
    title: `Accubrew`,
    text: `Real time precision beer monitoring system`,
    tags: [`IOT`, `Vue`, `Javascript`],
  },
  {
    url: "https://github.com/About7Sharks/polygonDid",
    img: "data:image/png;base64,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",
    title: `Polygon DID POC`,
    text: `Polygon DID POC`,
    tags: [`Polygon`, `Blockchain`, `DID`],
  },
  {
    url: "https://github.com/About7Sharks/Woozles-NFT",
    img: "https://cloudfront-us-east-1.images.arcpublishing.com/coindesk/ROBDVO4PFNFULOLBIK3DGUO5KQ.jpg",
    title: "Woozles NFT",
    text: "A NFT example for Woozles",
    tags: ["NFT", "Ethereum", "Solidity"],
  },
  {
    url: `https://reactterminal.netlify.app/`,
    img: `https://upload.wikimedia.org/wikipedia/commons/9/9f/DEC_VT100_terminal_transparent.png`,
    title: `React Terminal`,
    text: `Site which emulates a terminal within a web browser using React.js`,
    tags: [`React`, `Javascript`],
  },
  {
    url: `https://zacsdapp.netlify.com`,
    img: `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*N4Xyvmrm-6uMzJcKkU7BMw.png&f=1&nofb=1`,
    title: `Ethereum ERC20 Wallet`,
    text: `A decentralized application for reading erc20 tokens on the ethereum blockchain.`,
    tags: [`React`, `Eth`, "Web3"],
  },
  // {
  //   url: `https://about7sharks.com`,
  //   img: `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5eec3db2df8ac17028aa9991/screenshot.png`,
  //   title: `Personal Site`,
  //   text: `This was one of the first personal sites I made for myself.`,
  //   tags: [`Nuxt`, `Vue`],
  // },
  {
    url: `https://meerkatapp.netlify.app`,
    img: `https://d33wubrfki0l68.cloudfront.net/5fc12498f63c2e06d99e61f8/screenshot.png`,
    title: `Meerkat`,
    text: `A network sniffer and analyser written in react and electron`,
    tags: [`Electron`, `React`, "Node"],
  },
  {
    url: `https://metadatascrub.netlify.app/`,
    img: `https://zeenea.com/wp-content/uploads/2019/09/metadata-iceberg.jpg`,
    title: `Metadata scrubber`,
    text: `This project was inspired after seeing a BLM post that showed a siri shortcut for removing picture data. Although siri is cool, anyone without an iphone is unable to use it.`,
    tags: [`Vue`],
  },
  {
    url: `https://rokuremote.netlify.app/#/`,
    img: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nuon-N2000-Remote-Control.jpg/800px-Nuon-N2000-Remote-Control.jpg`,
    title: `Roku TV Remote`,
    text: `Web Based Roku Remote I made after my remote died and I didn't have any batteries at home.`,
    tags: [`Vue`, `IOT`],
  },
  {
    url: `https://situpcoach.netlify.app/`,
    img: `/assets/situp.png`,
    title: `Sit Up Coach`,
    text: `AI Trained to count sit ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  {
    url: `https://pushupcoach.netlify.app/`,
    img: `/assets/pushup.png`,
    title: `Push Up Coach`,
    text: `AI Trained to count push ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  // {
  //   url: `https://vuedragnotes.netlify.app/`,
  //   img: `https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-1206008726_530271_rhxjqd.jpg`,
  //   title: `Note App`,
  //   text: `Simple note taking app with drag and drop notes`,
  //   tags: [`Vue`],
  // },
  {
    url: "https://tors.netlify.app/",
    img: "https://d33wubrfki0l68.cloudfront.net/5f6b9b6a71789e0007e6318f/screenshot.png",
    title: "Torus Shape",
    text: "A dynamic torus to help you understand the propeties of this awesome shape.",
    tags: ["p5"],
  },
  {
    url: `https://todovue.netlify.app/#/`,
    img: `https://img-cdn.inc.com/image/upload/w_1024,h_576,c_fill/images/panoramic/GettyImages-1206008726_530271_rhxjqd.jpg`,
    title: `Note App`,
    text: `Simple note taking app`,
    tags: [`Vue`],
  },
  {
    url: `https://pixt.netlify.app/`,
    img: `https://camo.githubusercontent.com/25f07224a3523c0235402494c1b60cee0d15f9d473abe65030043752bf5b0dea/687474703a2f2f7777772e6f6372746f776f72642e636f6d2f696e632f75706c6f6164732f657874726163747465787466726f6d696d616765732e6a7067`,
    title: `Pic to Text`,
    text: `Analyze text from pictures with your browser made with Vue.js and Tesseract.js (A pure Javascript port of the popular Tesseract OCR engine).`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://weliveinasim.netlify.app/`,
    img: `https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif`,
    title: `Conways Game of Life using WebAssembly and Javascript`,
    text: `Based on some basic rules to create living and intricate systems, that mimic life. This project utilizes WASM a portable binary-code format for executable programs, which gives C like performance in the browser.`,
    tags: [`Rust`, `WASM`, `WebAssembly`],
  },
  {
    url: `https://carlinfitness.netlify.app/`,
    img: `https://cdn.dribbble.com/users/5501300/screenshots/15456745/media/ebfa85d44e6577c89166446d06840c28.gif`,
    title: `Carlin Fitness`,
    text: `Suite of Fitness calculators, and Guides`,
    tags: [`Vue`, `Fitness`],
  },
  {
    url: `https://gitfolio.netlify.app/`,
    img: `/assets/gitfolio.png`,
    title: `Gitfolio`,
    text: `Site showing of repositories for projects, self generating on each rebuild.`,
    tags: [`React`],
  },
  {
    url: `https://tensorposebot.netlify.app/`,
    img: `https://media.tenor.com/v_qPOJw06Q0AAAAC/flexing-flex.gif`,
    title: `Pose Bot`,
    text: `Pose bot built with tensorflow.js to identify body symmetry while posing.`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://facialai.netlify.app/`,
    img: `https://media.tenor.com/B8ra2i-OK9QAAAAC/face-recognition.gif`,
    title: `Face Recognizer`,
    text: `Simple Facial recognition build in the browser`,
    tags: [`AI`, `HTML`, `Javascript`],
  },
  {
    url: `https://ticzactoe.netlify.app/`,
    img: `/assets/tictactoe.png`,
    title: `Tic-tac-toe`,
    text: `Tic-tac-toe built in the browser with an AI opponent`,
    tags: [`AI`, `HTML`, `Javascript`, `Game`],
  },
  {
    url: `https://phasergame.netlify.app`,
    img: `https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGwzbDh5djNxdnM4MW1uc2R3djk5N2xveWpqMDc0OHdub3NzZzVxcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/euuaA2cwLEUuI/giphy.gif`,
    title: `Flappy Box`,
    text: `Flappy Bird build with Phaser a javascript game engine`,
    tags: [`HTML`, `Javascript`, `Game`],
  },
  {
    url: `https://vuecalculator.netlify.app/`,
    img: `https://i.gifer.com/EH9E.gif`,
    title: `Calculator`,
    text: `Calculator made with Vue`,
    tags: [`Vue`],
  },
  {
    url: `https://tensorflowjsvue.netlify.app/`,
    img: `https://cdn-images-1.medium.com/max/640/1*eeIvlwkMNG1wSmj3FR6M2g.gif`,
    title: `Linear Regression Model`,
    text: `This project takes some x and y pairs and based of a linear regression model predicts a y value based off an x input`,
    tags: [`Vue`, `Nuxt`, "AI"],
  },
  {
    url: "https://stocism.netlify.app",
    img: `https://thumbs.gfycat.com/LazyWindingBuckeyebutterfly-max-1mb.gif`,
    title: `Stoicism Quotes`,
    text: `Database of stoicism quotes`,
    tags: [`Vue`],
  },
  {
    url: "https://breakoutjs.netlify.app",
    img: `https://i.gifer.com/origin/d4/d4a4d3e4d33743708a5d0181ce1468ff_w200.gif`,
    title: `Breakout Game`,
    text: `simple breakout game made with javascript`,
    tags: [`HTML`, `Game`, `Javascript`],
  },
  {
    url: "https://zaframe.netlify.app/",
    img: `/assets/zaframe.png`,
    title: `Zaframe`,
    text: `Virtual Reality site in the browser`,
    tags: [`VR`],
  },
  // {
  //   url: "https://www.zacarlin.com/#/",
  //   img: `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c5f96bda306c00008028590/screenshot.png`,
  //   title: `Zacarlin`,
  //   text: `Bought the Domain a while back and figured I should put it to use.`,
  //   tags: [`Vue`],
  // },
];
