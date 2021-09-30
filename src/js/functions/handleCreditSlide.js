const handleCreditSlide = () => {
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slides li');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next'); 

    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 176;

    slides.style.width = slideWidth * slideCount + 'px'

    function moveSlide(num) {
        slides.style.left = -num * slideWidth + 'px'
        currentIdx = num;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIdx < slideCount) {
            moveSlide(currentIdx + 1);
            console.log(currentIdx);
        } else { // 처음으로 돌아가기
            moveSlide(0)
        }
    });

}

export default handleCreditSlide;