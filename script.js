const DISCORD_INVITE = "https://discord.gg/DEIN-LINK-HIER";

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

document.getElementById("discordBtn").addEventListener("click", (e) => {
  e.preventDefault();
  if (DISCORD_INVITE.includes("discord.gg/MyPnnVwbMH")) {
    alert("Bitte trage euren echten Discord-Einladungslink in script.js ein.");
    return;
  }
  window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
});
