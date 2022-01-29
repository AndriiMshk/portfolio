const seasonBtns = document.querySelectorAll(".season_btn");
const seasonImg = document.querySelectorAll(".portfolio_item");
const seasenImgs = document.querySelector(".portfolio_items");

const handleChangeSeason = (season) => {
  seasonBtns.forEach((button) => {
    seasenImgs.classList.add("open");
    if (button.dataset.season === season) {
      button.classList.add("active");
      seasenImgs;
      seasonImg.forEach(
        (img, i) => (img.src = `./img/seasons/${season}/${i + 1}.jpg`)
      );
    } else {
      button.classList.remove("active");
    }
  });
};
