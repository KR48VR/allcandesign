(function () {
  var card = {
    title: "Team of bots",
    description: "A plain page that shows how a leader and a set of AI teammates stay in sync: who does what, what runs every week, how a link becomes a forecast, and which choices stay with you. Built to explain by building — so anyone can see the whole team at a glance.",
    cluster: "Tools & Dashboards",
    emoji: "🤖",
    date: "2026-10-05",
    tools: ["Grok Bot"],
    link: "https://kr48vr.github.io/team-of-bots/",
    links: [],
    image: "images/team-of-bots.svg"
  };
  if (typeof projects === "undefined" || !Array.isArray(projects)) return;
  if (projects.some(function (p) { return p.title === "Team of bots"; })) return;
  projects.unshift(card);
  var el = document.querySelector(".hero-overlay p");
  if (el) el.innerHTML = "47 PROJECTS MAPPED &middot; 2026";
  if (typeof buildMontage === "function") buildMontage();
  if (typeof buildGrid === "function") buildGrid();
  if (typeof layoutNodes === "function") layoutNodes();
})();
