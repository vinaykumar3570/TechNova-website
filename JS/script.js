const hamburger = document.getElementById("hamburger");
const navBtn = document.getElementById("nav-cta");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active-hamburger");
  navBtn.classList.toggle("nav-active");
});

function closeHamburger() {
  hamburger.classList.remove("active-hamburger");
  navBtn.classList.remove("nav-active");
  // console.log('hey');
}