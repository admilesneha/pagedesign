let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slidesToShow = 4;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

function updateButtons() {
    if (currentIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentIndex >= totalSlides - slidesToShow) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }

    updateDots();
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active-dot'));
    dots[currentIndex].classList.add('active-dot');
}

function moveSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${(100 / slidesToShow) * currentIndex}%)`;

    updateButtons();
}

function moveToSlide(index) {
    currentIndex = index;
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${(100 / slidesToShow) * currentIndex}%)`;

    updateButtons();
}

updateButtons();


// slider 2 js 
$(document).ready(function() {
    let currentIndex = 0;
    const slides = $('.data-analysis-slider2-slide');
    const totalSlides = slides.length;
    const slidesToShow = 3; // Show 3 slides at a time

    const prevButton = $('.data-analysis-slider2-prev');
    const nextButton = $('.data-analysis-slider2-next');
    const dots = $('.data-analysis-slider2-dot');
    const carousel = $('.data-analysis-slider2-carousel');

    function updateButtons() {
        if (currentIndex === 0) {
            prevButton.prop('disabled', true);
        } else {
            prevButton.prop('disabled', false);
        }

        if (currentIndex >= totalSlides - slidesToShow) {
            nextButton.prop('disabled', true);  // Disable next button on the last slide
        } else {
            nextButton.prop('disabled', false);
        }

        updateDots();
    }

    function updateDots() {
        dots.removeClass('ds-active-dot'); // Remove previous active dot class
        dots.eq(currentIndex).addClass('ds-active-dot'); // Add new active dot class
    }

    function moveSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - slidesToShow;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        carousel.css('transform', `translateX(-${(100 / slidesToShow) * currentIndex}%)`);

        updateButtons();
    }

    function moveToSlide(index) {
        currentIndex = index;
        carousel.css('transform', `translateX(-${(100 / slidesToShow) * currentIndex}%)`);

        updateButtons();
    }

    prevButton.click(function() {
        moveSlide(-1);
    });

    nextButton.click(function() {
        moveSlide(1);
    });

    dots.click(function() {
        const index = $(this).index();
        moveToSlide(index);
    });

    updateButtons();
});