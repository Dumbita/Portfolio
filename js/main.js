const filters = document.querySelectorAll(".filter");
const games = document.querySelectorAll(".game");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    const value = button.dataset.filter;

    games.forEach((game) => {
      const match = value === "all" || game.dataset.engine === value;
      game.classList.toggle("is-hidden", !match);
    });
  });
});

document.querySelectorAll("video").forEach((video) => {
  video.addEventListener("mouseenter", () => video.play().catch(() => {}));
  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});
