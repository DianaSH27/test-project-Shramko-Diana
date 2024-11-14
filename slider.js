const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');
let currentIndex = 0;

function showSlide(index) {
    const slideWidth = slider.clientWidth;
    slider.style.transform = translateX(-${ index * slideWidth}px);
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slider.children.length - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slider.children.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});