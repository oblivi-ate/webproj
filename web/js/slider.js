// Slider JavaScript

let slideIndex = 0;
const box = document.querySelector('.slider');
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const sliderControls = document.querySelector('.slider-controls');

// 初始显示第一张图片
showSlide(slideIndex);

// 下一张图片
function nextSlide() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// 上一张图片
function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlide(slideIndex);
}

// 显示指定图片
function showSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    updateSliderControls(index);
}

// 更新指示器
function updateSliderControls(index) {
    sliderControls.querySelectorAll('button').forEach((btn, i) => {
        if (btn !== null) {
            if (i === index) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        }
    });
}

// 自动播放
setInterval(nextSlide, 10000);

// 按钮点击事件
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// 指示器点击事件
box.addEventListener('mouseenter', function () {
    nextBtn.style.display = 'block';
    prevBtn.style.display = 'block';
});
box.addEventListener('mouseleave', function () {
    nextBtn.style.display = 'none';
    prevBtn.style.display = 'none';
});