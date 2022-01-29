const switchThemeBtn = document.querySelector("#switch-theme");

switchThemeBtn.addEventListener("click", () => {
  const isLight = switchThemeBtn.checked ? "add" : "remove";
  document.body.classList[isLight]("light");
});
