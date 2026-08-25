const DISCORD_INVITE = "https://discord.gg/MyPnnVwbMH";

// Mobile Menü umschalten
const menuBtn = document.querySelector(".menu-btn");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}

// Menü automatisch schließen, wenn ein Link angeklickt wird
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});

// Discord Button Klick-Handler
const discordBtn = document.getElementById("discordBtn");
if (discordBtn) {
  discordBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
  });
}
