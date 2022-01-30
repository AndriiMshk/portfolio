const switchThemeBtn = document.querySelector("#switch-theme");

switchThemeBtn.addEventListener("click", () => {
  localStorage.setItem('theme', switchThemeBtn.checked ? 'light' : 'dark')
  const isLight = switchThemeBtn.checked ? "add" : "remove";
  document.body.classList[isLight]("light");
});

document.addEventListener("DOMContentLoaded", function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'light'){
    switchThemeBtn.checked = true;
    document.body.classList.add("light");
  }
})