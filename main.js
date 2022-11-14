let navigation = document.querySelector(".navigation");
let toggler = document.querySelector(".header__image--close");
let closeMenu = document.querySelector(".navigation__close-menu");
let dropDownList = document.querySelectorAll(".arrow");

dropDownList.forEach((arrow) => {
  if (arrow.classList.contains("shoMenu")) {
    arrow.classList.remove("shoMenu");
  }
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("showMenu");
  });
});

toggler.addEventListener("click", isActive);
closeMenu.addEventListener("click", isActive);

function isActive() {
  navigation.classList.toggle("active");
}
// dropDownList.forEach((drop) => {
//   drop.addEventListener("click", () => {
//     let child = drop.nextElementSibling;
//     child.classList.toggle("showMenu");
//     if (child !== child) {
//       child.classList.remove("showMenu");
//     }
//   });
// });
