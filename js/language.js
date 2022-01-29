import i18Obj from './translate.js';

const wordTranslate = document.querySelectorAll("[data-i18]");
const langEn = document.querySelector(".lang-en");
const langRu = document.querySelector(".lang-ru");

langEn.addEventListener("click", function () {
    langEn.classList.add('active')
    langRu.classList.remove('active')
    wordTranslate.forEach((element) => {
      const newText = i18Obj["en"][element.dataset.i18];
      element.textContent = newText;
      if (element.placeholder) {
        element.placeholder = newText;
      }
    });
  });
  
  langRu.addEventListener("click", function () {
    langRu.classList.add('active')
    langEn.classList.remove('active')
    wordTranslate.forEach((element) => {
      const newText = i18Obj["ru"][element.dataset.i18];
      element.textContent = newText;
      if (element.placeholder) {
        element.placeholder = newText;
      }
    });
  });

