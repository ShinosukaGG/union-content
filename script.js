// ---- Helper: Sanitize X username ----
function sanitizeUsername(raw) {
  if (!raw) return "";
  let u = raw.trim();
  if (u.startsWith("@")) u = u.slice(1);
  // Remove any whitespace or invalid chars for X (keep alphanum + _)
  return u.replace(/[^a-zA-Z0-9_]/g, "");
}

// ---- Content Topics (FULL LIST, 20) ----
const contentIdeas = [
  {
    heading: "Record‑breaking Trusted Setup Ceremony",
    desc: "Recap Union’s massive Groth16 ceremony with thousands of contributions and its significance ahead of mainnet.",
    link: "https://union.build/blog",
    tweet: "🚀 Union just broke the record with 5,866 contributions in its Groth16 Trusted Setup Ceremony ahead of mainnet! 🔐 #ZeroKnowledge #UnionBuild Learn more: union.build/blog\n\nVAR"
  },
  {
    heading: "Introducing Auro BTC – Union’s Native Bitcoin LST",
    desc: "Explain Auro BTC, how it leverages ZK interop to make BTC LST composable across chains.",
    link: "https://union.build/blog",
    tweet: "🪙 Meet **Auro BTC**, Union’s native Bitcoin LST — custody + composability + cross‑chain access via ZKGM! Learn how it works: union.build/blog #BTCfi #UnionBuild\n\nVAR"
  },
  {
    heading: "Union’s Chain‑Abstracted Liquid Staking",
    desc: "Teach chain‑abstracted architecture that powers liquid staking across ecosystems.",
    link: "https://union.build/blog",
    tweet: "💧 Dive into Union’s chain‑abstracted liquid staking architecture—seamless staking across chains from day one. Read: union.build/blog #DeFi #LiquidStaking\n\nVAR"
  },
  {
    heading: "Cross‑chain Governance by Union",
    desc: "Explain governance across chains—stake and vote on any connected chain.",
    link: "https://union.build/blog",
    tweet: "🗳️ Union enables **cross‑chain governance**—stake and govern across any connected chain. Power to the users. Details: union.build/blog #Web3Governance\n\nVAR"
  },
  {
    heading: "Union & NodeKit Partnership",
    desc: "Coverage of how NodeKit and Union combine to accelerate IBC transfers using Galois prover.",
    link: "https://union.build/blog",
    tweet: "⚙️ Union + NodeKit = lightning-fast IBC with Galois prover. Discover the synergy accelerating interop: union.build/blog #IBC #UnionBuild\n\nVAR"
  },
  {
    heading: "Agoric Partnership: cross‑chain orchestration",
    desc: "How Union collaborates with Agoric to expand orchestration in EVM ecosystems.",
    link: "https://union.build/blog",
    tweet: "🔗 Union teams up with Agoric to bring scalable cross-chain orchestration to EVM chains. Read more: union.build/blog #Agoric #Interop\n\nVAR"
  },
  {
    heading: "RISC Zero & Union: optimizing proof generation",
    desc: "Discuss how RISC Zero collaboration streamlines proof generation for Union.",
    link: "https://union.build/blog",
    tweet: "🔒 Union + RISC Zero = optimized ZK proof generation. Faster, cheaper, stronger — here’s how: union.build/blog #ZeroKnowledge #UnionBuild\n\nVAR"
  },
  {
    heading: "Babylon & Union launch interop provider",
    desc: "Union supporting Babylon Genesis network for limited mainnet launch.",
    link: "https://union.build/blog",
    tweet: "🚀 Union now live as interoperability provider for Babylon Genesis — bridging assets and LSTs securely. Full story: union.build/blog #Babylon #UnionBuild\n\nVAR"
  },
  {
    heading: "U Combinator & Union Fellows",
    desc: "Explain Union incubator program and projects selected as fellows.",
    link: "https://union.build/blog",
    tweet: "💡 Announcing **U Combinator**—Union’s incubator. Meet the first cohort: Esprezzo, Ensemble, Conduct and more! union.build/blog #Incubator #UnionFellows\n\nVAR"
  },
  {
    heading: "What is ZKGM / UCS03?",
    desc: "Teach the UCS03‑ZKGM standard and its role in multiplexed asset packets.",
    link: "https://docs.union.build/ucs/00",
    tweet: "🔍 Demystifying **ZKGM (UCS03‑zkgm‑0)**—Union’s multiplexed protocol for asset, NFT & intent transfers. Explained: docs.union.build/ucs/00 #ZKGM #UnionDocs\n\nVAR"
  },
  {
    heading: "Understanding CometBLS architecture",
    desc: "Breakdown CometBLS, BLS sigs, MiMC hashing, and validator rotation.",
    link: "https://docs.union.build/architecture/cometbls",
    tweet: "🧠 How does CometBLS power Union’s consensus verification? Dive into BLS sigs, MiMC hashing & more: docs.union.build/architecture/cometbls #CometBLS\n\nVAR"
  },
  {
    heading: "Union’s IBC compliance and philosophy",
    desc: "Describe Union’s integration with IBC, handling censorship, reorganizations, liveliness.",
    link: "https://docs.union.build/concepts/ibc",
    tweet: "🌐 Union extends IBC with ZK logic and consensus verification—protecting from forks, downtime & censorship. Learn: docs.union.build/concepts/ibc #IBC #UnionBuild\n\nVAR"
  },
  {
    heading: "Protocol standards UCS04, UCS05, UCS06",
    desc: "Explain Union’s UCS standards like Universal Chain ID, address types, funded dispatch.",
    link: "https://docs.union.build/concepts",
    tweet: "🏗️ A deep dive into **UCS04**, **UCS05**, **UCS06**—chain IDs, address types & dispatch logic powering Union. docs.union.build/concepts #UnionStandards\n\nVAR"
  },
  {
    heading: "Developer guide: TypeScript SDK",
    desc: "How to install and use Union Client SDK across ecosystems.",
    link: "https://docs.union.build/integrations/typescript",
    tweet: "👩‍💻 Build cross-chain apps with ease using Union’s TypeScript SDK. Setup, init & transfer flows explained: docs.union.build/integrations/typescript #DevTools\n\nVAR"
  },
  {
    heading: "Ceremony UI & MPC tooling explained",
    desc: "Walk through Union’s Trusted Setup Ceremony flow & tooling (webapp, MPC client, coordinator).",
    link: "https://docs.union.build/ceremony",
    tweet: "🔐 Join the Union **Trusted Setup Ceremony**—from web UI to MPC client and coordinator architecture. Tutorial: docs.union.build/ceremony #ZK #OpenCrypto\n\nVAR"
  },
  {
    heading: "UCS00 Ping‑Pong demo tutorial",
    desc: "Tutorial on implementing UCS00 “ping‑pong” basic message passing between chains.",
    link: "https://docs.union.build/ucs/00",
    tweet: "🏓 Let’s Ping‑Pong! Learn UCS00 demo for basic GMP messaging between chains—full tutorial: docs.union.build/ucs/00 #UnionTutorials\n\nVAR"
  },
  {
    heading: "Union Dashboard: missions, achievements & yaps",
    desc: "Describe Dashboard beta features like missions, leaderboards, yaps.",
    link: "https://union.build/blog",
    tweet: "🎯 Union Dashboard Beta is live! Complete missions, earn achievements & climb the YAPS leaderboard. Ready to join? union.build/blog #UnionDashboard\n\nVAR"
  },
  {
    heading: "Testnet 9: last testnet before mainnet",
    desc: "Share how to use Testnet 9, test transfers, integrate, report via Testnet App Explorer.",
    link: "https://union.build/blog",
    tweet: "🧪 Testnet 9 is live—final stress test before mainnet. Try out Explorer, faucets & transfers on app.union.build/explorer #UnionTestnet\n\nVAR"
  },
  {
    heading: "Ecosystem spotlight series",
    desc: "Profile partner chains & apps built on Union (Escher, Dextr, Stride, Stargaze, etc.)",
    link: "https://union.build/ecosystem",
    tweet: "🌌 Ecosystem spotlight: meet the projects building on Union—Escher, Dextr, Stride, Stargaze & more. Explore: union.build/ecosystem #BuiltOnUnion\n\nVAR"
  },
  {
    heading: "Philosophy: trust‑minimized interoperability",
    desc: "Discuss Union philosophy of consensus verification, censorship resistance, composability.",
    link: "https://union.build/learn",
    tweet: "🧭 Union’s core philosophy: trust-minimized interoperability powered by consensus verification and ZK proofs. Learn the vision: union.build/learn #Web3Philosophy\n\nVAR"
  }
];

// ---- Main Elements ----
const enterBtn = document.getElementById("enter-dashboard-btn");
const usernameInput = document.getElementById("username-placeholder");
const landingBox = document.getElementById("landing-box");
const dashboard = document.getElementById("dashboard");

// ---- Entry & Dashboard Logic ----
enterBtn.addEventListener("click", () => {
  let rawUsername = usernameInput.innerText || usernameInput.textContent;
  const cleanUsername = sanitizeUsername(rawUsername);
  if (!cleanUsername) {
    usernameInput.innerText = "@EnterXUsername";
    usernameInput.style.color = "#ff5858";
    setTimeout(() => (usernameInput.style.color = "#d7eaff"), 1000);
    return;
  }
  showDashboard(cleanUsername);
});

// Enter on Enter Key
usernameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    enterBtn.click();
  }
});

// ---- Show Dashboard: Fetch Mindshare from both files ----
async function showDashboard(username) {
  landingBox.style.display = "none";
  dashboard.style.display = "flex";

  // Get mindshare S0 and S1 from respective JSONs
  let mindshare0 = "0";
  let mindshare1 = "0";
  try {
    // S0
    const resp0 = await fetch("top_2000_from_network.json");
    const arr0 = await resp0.json();
    const user0 = arr0.find(entry =>
      entry.username?.toLowerCase() === username.toLowerCase()
    );
    mindshare0 = user0 ? (user0.mindshare || "0") : "0";
  } catch { mindshare0 = "0"; }

  try {
    // S1
    const resp1 = await fetch("season1.json");
    const arr1 = await resp1.json();
    const user1 = arr1.find(entry =>
      entry.username?.toLowerCase() === username.toLowerCase()
    );
    mindshare1 = user1 ? (user1.mindshare || "0") : "0";
  } catch { mindshare1 = "0"; }

  // Always fetch real X PFP, fallback if needed
  const userPfp = document.getElementById("user-pfp");
  userPfp.src = `https://unavatar.io/twitter/${username}`;
  userPfp.onerror = function () {
    this.onerror = null;
    this.src = "default-pfp.png";
  };
  document.getElementById("user-username").innerText = "@" + username;
  document.getElementById("user-mindshare0").innerText = `Mindshare S0: ${mindshare0}%`;
  document.getElementById("user-mindshare1").innerText = `Mindshare S1: ${mindshare1}%`;

  // Render content boxes
  renderContentBoxes(username);
}

// ---- Render 20 Content Boxes ----
function renderContentBoxes(username) {
  const container = document.getElementById("content-boxes");
  container.innerHTML = "";
  const quoteUrl = "https://x.com/Shinosuka_eth/status/1951538402957914181"; // Use your X link as quote VAR
  contentIdeas.forEach((item, i) => {
    const box = document.createElement("div");
    box.className = "content-box";
    // Heading
    const heading = document.createElement("div");
    heading.className = "content-heading";
    heading.textContent = item.heading;
    // Desc
    const desc = document.createElement("div");
    desc.className = "content-desc";
    desc.textContent = item.desc;
    // Buttons
    const btnRow = document.createElement("div");
    btnRow.className = "btn-row";
    // Create Content = Tweet intent
    const tweetText = encodeURIComponent(item.tweet.replace("VAR", quoteUrl));
    const tweetBtn = document.createElement("button");
    tweetBtn.className = "create-btn";
    tweetBtn.textContent = "Create Content";
    tweetBtn.onclick = () => {
      window.open(
        `https://twitter.com/intent/tweet?text=${tweetText}`,
        "_blank"
      );
    };
    // Read More
    const readBtn = document.createElement("button");
    readBtn.className = "readmore-btn";
    readBtn.textContent = "Read More";
    readBtn.onclick = () => window.open(item.link, "_blank");
    btnRow.appendChild(tweetBtn);
    btnRow.appendChild(readBtn);

    // Add to box
    box.appendChild(heading);
    box.appendChild(desc);
    box.appendChild(btnRow);
    container.appendChild(box);
  });
}

// ---- UI: Username box styling ----
usernameInput.addEventListener("focus", () => {
  if (
    usernameInput.innerText.trim() === "" ||
    usernameInput.innerText === "@YourXUsername"
  ) {
    usernameInput.innerText = "";
    usernameInput.style.color = "#d7eaff";
  }
});
usernameInput.addEventListener("blur", () => {
  if (usernameInput.innerText.trim() === "") {
    usernameInput.innerText = "@YourXUsername";
    usernameInput.style.color = "#8997a3";
  }
});

// Optional: On page load, set username placeholder color
if (
  usernameInput.innerText.trim() === "" ||
  usernameInput.innerText === "@YourXUsername"
) {
  usernameInput.style.color = "#8997a3";
}
