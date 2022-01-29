const seasonBtns = document.querySelectorAll(".season_btn");
const seasonImg = document.querySelectorAll(".portfolio_item");
const seasenImgs = document.querySelector(".portfolio_items");
const btn = document.querySelector(".season");


btn.addEventListener("click", function (event) {
  let target = event.target.dataset.season;
  seasonBtns.forEach((button) => {
    if (target === button.dataset.season) {
      seasenImgs.classList.add("open");
      button.classList.add("active");
      seasonImg.forEach(
        (img, i) => (img.src = `./img/seasons/${target}/${i + 1}.jpg`)
      );
    } else {
      button.classList.remove("active");
    }
  });
});
