const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;
const totalSlides = slides.length;
const visibleSlides = 3; // Number of visible slides at a time

function showSlide(index) {
    slider.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
    highlightSlides(index + 1);
}

function highlightSlides(index) {
    slides.forEach((slide, i) => {
        const slideIndex = (i - index + Math.floor(visibleSlides / 2) + totalSlides) % totalSlides;
        if (slideIndex === Math.floor(visibleSlides / 2)) {
            slide.classList.add("highlighted");
            slide.classList.remove("non-highlighted");
        } else {
            slide.classList.add("non-highlighted");
            slide.classList.remove("highlighted");
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Initialize the first slide as highlighted
showSlide(currentIndex);
