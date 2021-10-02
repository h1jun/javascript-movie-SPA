const handleCreditSlide = () => {
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slides li');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next'); 

    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = 176;
    let slideItems = 7
    let currentSlidePage = 1
    let currentSlideCnt = slideItems;
    let slidePage = parseInt(slideCount / slideItems)

    slides.style.width = slideWidth * slideCount + 'px'

    function moveSlide(num) {
        slides.style.left = -num * slideWidth + 'px'
        currentIdx = num;
    }

    nextBtn.addEventListener('click', () => {        
        currentSlidePage++;
    
        if (currentSlideCnt === slideCount) {
            // 처음으로 돌아가기
            currentSlidePage = 1;
            currentSlideCnt = slideItems;
            moveSlide(0);
        } else if (currentSlidePage <= slidePage) {
            moveSlide(currentIdx + slideItems);
            currentSlideCnt += slideItems;
        } else {
            moveSlide(currentIdx + 1);
            currentSlideCnt++;
        }
    });

    // prevBtn.addEventListener('click', () => {        
    //     currentSlidePage--;
    
    //     if (currentSlidePage < 0) {
    //         // 끝 페이지로 돌아가기
    //         currentSlidePage = slidePage + 1;
    //         currentSlideCnt = slideItems;
    //         moveSlide(slideCount);
    //     } else if (currentSlidePage < 0) {
    //         moveSlide(currentIdx - slideItems);
    //         currentSlideCnt -= slideItems;
    //     } else {
    //         moveSlide(currentIdx - 1);
    //         currentSlideCnt--;
    //     }
    // });
}

export default handleCreditSlide;