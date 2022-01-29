import i18Obj from "./translate.js";

const wordTranslate = document.querySelectorAll("[data-i18]");
const langEn = document.querySelector(".lang-en");
const langRu = document.querySelector(".lang-ru");

langEn.addEventListener("click", function () {
  localStorage.setItem("language", "en");
  langEn.classList.add("active");
  langRu.classList.remove("active");
  wordTranslate.forEach((element) => {
    const newText = i18Obj["en"][element.dataset.i18];
    element.textContent = newText;
    if (element.placeholder) {
      element.placeholder = newText;
    }
  });
});

langRu.addEventListener("click", function () {
  localStorage.setItem("language", "ru");
  langRu.classList.add("active");
  langEn.classList.remove("active");
  wordTranslate.forEach((element) => {
    const newText = i18Obj["ru"][element.dataset.i18];
    element.textContent = newText;
    if (element.placeholder) {
      element.placeholder = newText;
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const language = localStorage.getItem("language") || "en";
  if (language === "en") {
    langEn.classList.add("active");
    langRu.classList.remove("active");
  } else {
    langRu.classList.add("active");
    langEn.classList.remove("active");
  }
  wordTranslate.forEach((element) => {
    const newText = i18Obj[language][element.dataset.i18];
    element.textContent = newText;
    if (element.placeholder) {
      element.placeholder = newText;
    }
  });
});
