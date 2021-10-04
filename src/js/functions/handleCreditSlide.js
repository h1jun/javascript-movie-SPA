const handleCreditSlide = () => {
    let slides = document.querySelector('.slides');
    let slide = document.querySelectorAll('.slides li');
    let prevBtn = document.querySelector('.prev');
    let nextBtn = document.querySelector('.next'); 

    let currentIdx = 0;
    let slideCount = slide.length;
    let slideWidth = slide[0].clientWidth;
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
            // 남은 items까지만 더해주기
            moveSlide(currentIdx + (slideCount % slideItems));
            currentSlideCnt += (slideCount % slideItems);
        }
    });


    prevBtn.addEventListener('click', () => {
        // 첫 페이지에서 뒤로가기 클릭 맨 뒤로 이동
        if (currentSlidePage === 1) {
            currentSlidePage = slidePage + 1;
            currentSlideCnt = slideCount;
            moveSlide(slideCount - slideItems)
        } else if (currentSlidePage === slidePage + 1) {
            // 맨 뒤에서 클릭 시 (slideCount % slideItems) 만큼 뒤로가기
            moveSlide(currentIdx -  (slideCount % slideItems));
            currentSlideCnt -= (slideCount % slideItems);
            currentSlidePage--;
        } else if (currentSlidePage <= slidePage) {
            moveSlide(currentIdx - slideItems);
            currentSlideCnt -= slideItems;
            currentSlidePage--;
        }
    });
}

export default handleCreditSlide;