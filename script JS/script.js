// ================= SHOW AND CLOSE THE NAV MENU =================
const navMenu = document.getElementById("nav-menu");
const closeBtn = document.getElementById("close-btn");
const showBtn = document.getElementById("show-btn");

if (showBtn) {
  showBtn.addEventListener("click", () => {
    navMenu.classList.add("show_menu");
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show_menu");
  });
}

// ================= REMOVE MENU WHEN CLICK =================
const navLink = document.querySelectorAll(".nav_link");
const removeMenu = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show_menu");
};
navLink.forEach((n) => n.addEventListener("click", removeMenu));

// ================= CHANGE NAV BACKGROUND COLOR WHEN SCROLL =================
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

// ================= SHOW & REMOVE SCROLL UP BUTTON =================
const scrollUp = () => {
  const scroll = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scroll.classList.add("show_scroll")
    : scroll.classList.remove("show_scroll");
};
window.addEventListener("scroll", scrollUp);
