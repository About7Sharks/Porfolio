let sites = [
  {
    url: `https://accubrew.io`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5edd8a5f4d7c220008625fff/screenshot.png`,
    title: `Accubrew`,
    text: `Real time precision beer monitoring system`,
    tags: [`IOT`, `Vue`, `Javascript`],
  },
  {
    url:"https://github.com/About7Sharks/polygonDid",
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
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e3f676d077be200092f56b4/screenshot.png`,
    title: `React Terminal`,
    text: `Site which emulates a terminal within a web browser using React.js`,
    tags: [`React`, `Javascript`],
  },
  {
    url: `https://zacsdapp.netlify.com`,
    img:
      `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*N4Xyvmrm-6uMzJcKkU7BMw.png&f=1&nofb=1`,
    title: `Ethereum ERC20 Wallet`,
    text:
      `A decentralized application for reading erc20 tokens on the ethereum blockchain.`,
    tags: [`React`, `Eth`, "Web3"],
  },
  {
    url: `https://about7sharks.com`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5eec3db2df8ac17028aa9991/screenshot.png`,
    title: `Personal Site`,
    text: `This was one of the first personal sites I made for myself.`,
    tags: [`Nuxt`, `Vue`],
  },
  {
    url: `https://meerkatapp.netlify.app`,
    img:
      `https://d33wubrfki0l68.cloudfront.net/5fc12498f63c2e06d99e61f8/screenshot.png`,
    title: `Meerkat`,
    text: `A network sniffer and analyser written in react and electron`,
    tags: [`Electron`, `React`, "Node"],
  },
  {
    url: `https://metadatascrub.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5eea3a9c53d17023b94b6d6d/screenshot.png`,
    title: `Metadata scrubber`,
    text:
      `This project was inspired after seeing a BLM post that showed a siri shortcut for removing picture data. Although siri is cool, anyone without an iphone is unable to use it.`,
    tags: [`Vue`],
  },
  {
    url: `https://rokuremote.netlify.app/#/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d34ac7f21e18700072880ff/screenshot.png`,
    title: `Roku TV Remote`,
    text:
      `Web Based Roku Remote I made after my remote died and I didn't have any batteries at home.`,
    tags: [`Vue`, `IOT`],
  },
  {
    url: `https://situpcoach.netlify.app/`,
    img: `/assets/situp.png`,
    title: `Sit Up Coach`,
    text:
      `AI Trained to count sit ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  {
    url: `https://pushupcoach.netlify.app/`,
    img: `/assets/pushup.png`,
    title: `Push Up Coach`,
    text:
      `AI Trained to count push ups for you. Made during quarantine, when I was doing a lot of home workouts.`,
    tags: [`AI`, `Vue`, `Fitness`],
  },
  {
    url: `https://vuedragnotes.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d87de4bae78590008456919/screenshot.png`,
    title: `Note App`,
    text: `Simple note taking app with drag and drop notes`,
    tags: [`Vue`],
  },
  {
    url: "https://tors.netlify.app/",
    img:
      "https://d33wubrfki0l68.cloudfront.net/5f6b9b6a71789e0007e6318f/screenshot.png",
    title: "Torus Shape",
    text:
      "A dynamic torus to help you understand the propeties of this awesome shape.",
    tags: ["p5"],
  },
  {
    url: `https://todovue.netlify.app/#/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5bf822bdec8a895626261bf8/screenshot.png`,
    title: `Note App`,
    text: `Simple note taking app`,
    tags: [`Vue`],
  },
  {
    url: `https://pixt.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d7ea099a55e08000a56f4ee/screenshot.png`,
    title: `Pic to Text`,
    text:
      `Analyze text from pictures with your browser made with Vue.js and Tesseract.js (A pure Javascript port of the popular Tesseract OCR engine).`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://weliveinasim.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e0a51668d0c8a374c71465a/screenshot.png`,
    title: `Conways Game of Life using WebAssembly and Javascript`,
    text:
      `Based on some basic rules to create living and intricate systems, that mimic life. This project utilizes WASM a portable binary-code format for executable programs, which gives C like performance in the browser.`,
    tags: [`Rust`, `WASM`, `WebAssembly`],
  },
  {
    url: `https://carlinfitness.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d27966251f7040008b66bba/screenshot.png`,
    title: `Carlin Fitness`,
    text: `Suite of Fitness calculators, and Guides`,
    tags: [`Vue`, `Fitness`],
  },
  {
    url: `https://gitfolio.netlify.app/`,
    img: `/assets/gitfolio.png`,
    title: `Gitfolio`,
    text:
      `Site showing of repositories for projects, self generating on each rebuild.`,
    tags: [`React`],
  },
  {
    url: `https://tensorposebot.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d863c1312febf000832790d/screenshot.png`,
    title: `Pose Bot`,
    text:
      `Pose bot built with tensorflow.js to identify body symmetry while posing.`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://facialai.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5d3f13f6c57b7c9f194a8de8/screenshot.png`,
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
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5b5fe428b3127453bd4ffbaa/screenshot.png`,
    title: `Flappy Box`,
    text: `Flappy Bird build with Phaser a javascript game engine`,
    tags: [`HTML`, `Javascript`, `Game`],
  },
  {
    url: `https://vuecalculator.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5b6319d2792f8950d1d93e65/screenshot.png`,
    title: `Calculator`,
    text: `Calculator made with Vue`,
    tags: [`Vue`],
  },
  {
    url: `https://tensorflowjsvue.netlify.app/`,
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5bf881c1e39e7c1ebc6b9676/screenshot.png`,
    title: `Linear Regression Model`,
    text:
      `This project takes some x and y pairs and based of a linear regression model predicts a y value based off an x input`,
    tags: [`Vue`, `Nuxt`, "AI"],
  },
  {
    url: "https://stocism.netlify.app",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c074e66dd28ef0e15d75956/screenshot.png`,
    title: `Stoicism Quotes`,
    text: `Database of stoicism quotes`,
    tags: [`Vue`],
  },
  {
    url: "https://breakoutjs.netlify.app",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c2ea1dae4fe6f00081833a0/screenshot.png`,
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
  {
    url: "https://www.zacarlin.com/#/",
    img:
      `https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5c5f96bda306c00008028590/screenshot.png`,
    title: `Zacarlin`,
    text: `Bought the Domain a while back and figured I should put it to use.`,
    tags: [`Vue`],
  },
];

export default sites;
