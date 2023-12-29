let currentIndex = 0;


function showSlides(index) {
    const rinzin = document.querySelector('.slider');
    const totalSlider = document.querySelectorAll('.slide').length;

    if (index < 0) {
        index = totalSlider - 1;

    }
    else if  (index >= totalSlider ) {
        index = 0;
    }

    currentIndex = index;
   const translateValue = -index * 100 + '%';
   rinzin.style.transform = 'translateX(' + translateValue  + ')';

}

function prevSlide() {   
    showSlides(currentIndex - 1);
}

function nextSlide() {
    showSlides(currentIndex +  1);
}
