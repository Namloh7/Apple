const menuButton = document.getElementById("menuButton");
const mobileSizeNav = document.querySelector(".div--rolledOut");
const normalSizeNav = document.querySelector(".div--normalSize");

isOpen = false;

menuButton.addEventListener("click", function () {
  if (!isOpen) {
    isOpen = true;
    mobileSizeNav.style.display = "flex";
    normalSizeNav.style.display = "none";
    menuButton.style.display = "flex";
    menuButton.src = "images/x.png";
  } else {
    isOpen = false;
    mobileSizeNav.style.display = "none";
    normalSizeNav.style.display = "flex";
    menuButton.src = "images/menu.png";
  }
});
