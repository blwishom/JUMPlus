// document.addEventListener("DOMContentLoaded", function() {
//     const carouselContainer = document.querySelector(".carousel-container");
//     const slides = document.querySelectorAll(".carousel-slide");
//     let currentIndex = 0;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.style.transform = `translateX(${(i - index) * 100}%)`;
//         });
//     }

//     function nextSlide() {
//         currentIndex = (currentIndex + 1) % slides.length;
//         showSlide(currentIndex);
//     }

//     function prevSlide() {
//         currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//         showSlide(currentIndex);
//     }

//     setInterval(nextSlide, 3000);
// });
