const logoElement = document.querySelector(".js-header__logo");
const buttonLogoElement = document.querySelector(".js-button__logo");

buttonLogoElement.addEventListener("click", () => {
    logoElement.classList.toggle("js-header__blockLogo--possition");
});