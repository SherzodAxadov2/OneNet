const menu = document.querySelector(".menu");
const menuWrapper = document.querySelector(".menu-wrapper");

const textarea = document.querySelector("textarea");
const textCount = document.querySelector(".textarea span");

const showMenu = () => {
  menu.classList.toggle("open");
  menuWrapper.classList.toggle("open");
};

textarea.addEventListener("input", () => {
  console.log(textarea.value.length);
  textCount.innerHTML = "";
  textCount.innerHTML += `${textarea.value.length}/500`;
});
