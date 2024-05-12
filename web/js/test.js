// script.js
let currentOffset = 0;
const carousel = document.querySelector('.carousel');
const itemWidth = 300; // Width of each carousel item

document.getElementById('next').addEventListener('click', function() {
    currentOffset -= itemWidth;
    if (currentOffset <= -itemWidth * 3) {
        currentOffset = 0;
    }
    carousel.style.transform = `translateX(${currentOffset}px)`;
});