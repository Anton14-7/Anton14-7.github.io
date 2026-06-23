const languageToggle = document.getElementById("languageToggle");
const translatableElements = document.querySelectorAll("[data-en][data-es]");
const year = document.getElementById("year");

let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageToggle.textContent = language === "en" ? "ES" : "EN";
  document.documentElement.lang = language;
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "es" : "en";
  setLanguage(nextLanguage);
});

year.textContent = new Date().getFullYear();
