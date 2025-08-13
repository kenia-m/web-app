//donation button
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".fade-in");

  function checkVisibility() {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      section.classList.add("fade-in");
      window.removeEventListener("scroll", checkVisibility);
    }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility();
});



let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showNextSlide() {
    slides[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000); // Change every 3 seconds
