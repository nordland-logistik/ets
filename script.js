const DISCORD_INVITE = "discord.gg/MyPnnVwbMH";

document.querySelector(".menu-btn").addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.body.classList.remove("menu-open"));
});

  }
  window.open(DISCORD_INVITE, "_blank", "noopener,noreferrer");
});
