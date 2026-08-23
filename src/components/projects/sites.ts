import { Site } from "../../types";

// Slide images live in /public/assets so the portfolio does not depend on
// third-party CDNs. The previous rackcdn + tokenized raw.githubusercontent
// URLs all 404/403 (verified 2026-08-23) and one embedded an expired GitHub
// access token. Local screenshots were captured fresh of each live site.
const sites: Site[] = [
  {
    url: `https://accubrew.io`,
    img: `/assets/accubrew.png`,
    title: `Accubrew`,
    text: `Real time precision beer monitoring system`,
    tags: [`IOT`, `Vue`, `Javascript`],
  },
  {
    url: "https://mainstreetdata.com",
    img: "/assets/msd.png",
    title: "Main Street Data",
    text: "Stock data analytics platform",
    tags: ["Next.js", "Typescript", "Finance"],
  },
  {
    url: "https://github.com/About7Sharks/flashloan-template",
    img: "/assets/flashloan.png",
    title: "Flashloan Template",
    text: "Template for flashloan projects",
    tags: ["Ethereum", "Solidity", "Flashloan"],
  },
  {
    url: `https://reactterminal.netlify.app/`,
    img: `/assets/reactterminal.png`,
    title: `React Terminal`,
    text: `Site which emulates a terminal within a web browser using React.js`,
    tags: [`React`, `Javascript`],
  },
  {
    url: `https://metadatascrub.netlify.app/`,
    img: `/assets/metadatascrub.png`,
    title: `Metadata scrubber`,
    text: `This project was inspired after seeing a BLM post that showed a siri shortcut for removing picture data. Although siri is cool, anyone without an iphone is unable to use it.`,
    tags: [`Vue`],
  },
  {
    url: `https://rokuremote.netlify.app/#/`,
    img: `/assets/rokuremote.png`,
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
  {
    url: `https://weliveinasim.netlify.app/`,
    img: `/assets/weliveinasim.png`,
    title: `Conways Game of Life using WebAssembly and Javascript`,
    text: `Based on some basic rules to create living and intricate systems, that mimic life. This project utilizes WASM a portable binary-code format for executable programs, which gives C like performance in the browser.`,
    tags: [`Rust`, `WASM`, `WebAssembly`],
  },
  {
    url: `https://carlinfitness.netlify.app/`,
    img: `/assets/carlinfitness.png`,
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
    img: `/assets/tensorposebot.png`,
    title: `Pose Bot`,
    text: `Pose bot built with tensorflow.js to identify body symmetry while posing.`,
    tags: [`Vue`, `AI`],
  },
  {
    url: `https://facialai.netlify.app/`,
    img: `/assets/facialai.png`,
    title: `Face Recognizer`,
    text: `Simple Facial recognition build in the browser`,
    tags: [`AI`, `HTML`, `Javascript`],
  },
  {
    url: "https://stocism.netlify.app",
    img: `/assets/stoicism.png`,
    title: `Stoicism Quotes`,
    text: `Database of stoicism quotes`,
    tags: [`Vue`],
  },
  {
    url: "https://github.com/About7Sharks",
    img: `/assets/about7sharks.png`,
    title: `About7Sharks`,
    text: `My GitHub profile — all my public projects live here.`,
    tags: [`GitHub`],
  },
];

export default sites;
