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
            console.log("1");
            currentSlidePage = 1;
            currentSlideCnt = slideItems;
            moveSlide(0);
        } else if (currentSlidePage <= slidePage) {
            console.log("2");
            moveSlide(currentIdx + slideItems);
            currentSlideCnt += slideItems;
        } else {
            // 남은 items까지만 더해주기
            console.log("3");
            moveSlide(currentIdx + (slideCount % slideItems));
            currentSlideCnt += (slideCount % slideItems);
        }
    });

    console.log(currentSlidePage);
    console.log(slideCount);
    prevBtn.addEventListener('click', () => {
        if (currentSlidePage === 1) {
            console.log('5');
            currentSlidePage = slidePage + 1;
            currentSlideCnt = slideCount;
            moveSlide(slideCount - slideItems)
        } else if (currentSlidePage === slidePage + 1) {
            console.log("5-1");
            console.log(currentSlideCnt);
            moveSlide(currentSlideCnt - (slideCount % slideItems));
            currentSlideCnt -= (slideCount % slideItems);
        } else if (currentSlidePage <= slidePage) {
            console.log('6');
            moveSlide(currentIdx - slideItems);
            currentSlideCnt -= slideItems;
        }
        else if (currentSlideCnt === slideCount) {
            console.log('4');
            moveSlide(currentIdx - (slideCount % slideItems));
            currentSlideCnt -= (slideCount % slideItems);
        }
        if (currentSlidePage !== 1) {
            currentSlidePage--;
        }

        // if (currentSlidePage < 0) {
        //     // 끝 페이지로 돌아가기
        //     currentSlidePage = slidePage + 1;
        //     currentSlideCnt = slideItems;
        //     moveSlide(slideCount);
        // } else if (currentSlidePage < 0) {
        //     moveSlide(currentIdx - slideItems);
        //     currentSlideCnt -= slideItems;
        // } else {
        //     moveSlide(currentIdx - 1);
        //     currentSlideCnt--;
        // }
    });
}

export default handleCreditSlide;