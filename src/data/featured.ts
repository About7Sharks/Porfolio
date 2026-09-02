// Featured work — real outcomes, not "proof of concept"
export interface Featured {
  title: string;
  tag: string;
  blurb: string;
  bullets: string[];
  url: string;
  period: string;
  accent?: "accent" | "blue" | "pink" | "yellow";
}

export const featured: Featured[] = [
  {
    title: "The Fly — MCP Server & AI Chat",
    tag: "Production · B2B Finance",
    accent: "blue",
    blurb:
      "Frontend technical lead at The Fly (formerly Main Street Data). Exposed the entire platform as an MCP server so agents can call it, and built the AI chat widget end-to-end with streaming, retrieval grounding, and human-gated behavior.",
    bullets: [
      "Production MCP tooling at mcp.thefly.com — agents can query live market data, run screeners, read earnings transcripts",
      "AI chat widget: streaming responses, retrieval-grounded answers, human-gated actions before state changes",
      "Automatic code review + CI/CD gates on every PR — no unreviewed change lands in production",
    ],
    url: "https://thefly.com",
    period: "2023 — Now",
  },
  {
    title: "Accubrew — IoT Beer Monitoring",
    tag: "End-to-end · IoT + Web",
    accent: "pink",
    blurb:
      "Led the full engineering effort at Gulf Photonics: an IoT embedded sensor for fermentation monitoring using photonics, shipped to accubrew.io, plus its web dashboard.",
    bullets: [
      "Built the Node.js / Vue dashboard and real-time data pipeline",
      "Managed MongoDB + Firebase across desktop and mobile",
      "Product is live: accubrew.io",
    ],
    url: "https://accubrew.io",
    period: "2018 — 2020",
  },
  {
    title: "Z4C & AI Reliability Systems",
    tag: "Independent · Production",
    accent: "yellow",
    blurb:
      "Designed, built, deployed, and operate a customer-facing platform end-to-end — timezone-aware intake, concurrency-safe storage, analytics, and automated tests with production verification on every change. Also build private AI evaluation infrastructure with deterministic regression comparison and human-gated promotion.",
    bullets: [
      "React + TypeScript + Cloudflare — fully independent stack",
      "z4cllc.com is live and verifiable",
      "AI reliability: deterministic evals, redaction of persisted output, rollback-aware promotion",
    ],
    url: "https://z4cllc.com",
    period: "2024 — Now",
  },
];

export interface Experiment {
  title: string;
  blurb: string;
  url: string;
  tags: string[];
}

export const experiments: Experiment[] = [
  {
    title: "Conway's Game of Life (WASM)",
    blurb: "Rust → WebAssembly for C-like performance in the browser",
    url: "https://weliveinasim.netlify.app/",
    tags: ["Rust", "WASM"],
  },
  {
    title: "React Terminal",
    blurb: "Full terminal emulator in the browser using React",
    url: "https://reactterminal.netlify.app/",
    tags: ["React", "JS"],
  },
  {
    title: "Sit-Up & Push-Up Coach",
    blurb: "TensorFlow.js pose estimation for rep counting",
    url: "https://situpcoach.netlify.app/",
    tags: ["AI", "TensorFlow.js"],
  },
  {
    title: "Roku TV Remote",
    blurb: "Web-based remote control for Roku devices",
    url: "https://rokuremote.netlify.app/",
    tags: ["Vue", "IoT"],
  },
  {
    title: "Metadata Scrubber",
    blurb: "Strip EXIF/metadata from images in the browser",
    url: "https://metadatascrub.netlify.app/",
    tags: ["Vue"],
  },
  {
    title: "Flashloan Template",
    blurb: "Solidity template for DeFi flashloan projects",
    url: "https://github.com/About7Sharks/flashloan-template",
    tags: ["Solidity", "DeFi"],
  },
  {
    title: "Pose Bot",
    blurb: "Body symmetry detection with TensorFlow.js",
    url: "https://tensorposebot.netlify.app/",
    tags: ["AI", "Vue"],
  },
  {
    title: "Gitfolio",
    blurb: "Self-generating GitHub portfolio on each rebuild",
    url: "https://gitfolio.netlify.app/",
    tags: ["React"],
  },
];
