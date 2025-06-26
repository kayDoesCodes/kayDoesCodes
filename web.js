const openMenuBar = document.querySelector(".open-menu-bar");
const closeMenuBar = document.querySelector(".close-menu-bar");
const navLink = document.querySelector(".nav-links");

function toggleMenu() {
  if (navLink.style.display === "block") {
    navLink.style.display = "none";
    openMenuBar.style.display = "block";
    closeMenuBar.style.display = "none";
  } else {
    navLink.style.display = "block";
    closeMenuBar.style.display = "block";
    openMenuBar.style.display = "none";
  };
};

openMenuBar.addEventListener("click", () => {
  toggleMenu();
});

closeMenuBar.addEventListener("click", () => {
  toggleMenu();
});