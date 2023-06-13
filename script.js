var prevScrollpos = window.scrollY;

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-menu");

// ini buat munculin menu pas ngeklik hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
})
// ini buat balik ke home pas ngeklik salah satu menunya
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menu.classList.remove("active");
}))

// ini buat ngilangin navbar pas lg scroll ke bawah
window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    hamburger.classList.remove("active");
  } else {
    document.getElementById("navbar").style.top = "-100px";
    menu.classList.remove("active");
  }
  prevScrollpos = currentScrollPos;
}