const handleLikeBtn = () => {
    let movieIds = [];
    
    const likeBtn = document.querySelector('.like__button');
    const likeThumbs = document.querySelector('.fa-thumbs-up');
    const movieTitle = document.querySelector('.title');
    const moviePoster = document.querySelector('.poster');
    const pathNameMovieId = location.pathname.split('/')[2];
    
    function saveMovieId() {
        localStorage.setItem("id", JSON.stringify(movieIds))
    }
    
    function handleClickLike() {
         // 좋아요 O -> 클릭 -> 좋아요 취소 상태로
        if (likeThumbs.classList.contains('fas')) {
            likeThumbs.classList.remove("fas");
            movieIds = movieIds.filter((movieId) => movieId.id !== likeBtn.id);
            saveMovieId();
        } else { // 좋아요 X -> 클릭 -> 좋아요 클릭된 상태로
            likeThumbs.classList.add("fas")

            const likeObj = {
                id: likeBtn.id,
                title: movieTitle.textContent,
                path: moviePoster.src,
                time: Date.now(),
            }

            movieIds.push(likeObj);
            saveMovieId();
        }
    }
    
    likeBtn.addEventListener('click', handleClickLike);
    
    const savedMovieIds = localStorage.getItem("id")

    //로컬스토리지 내용 movidIds 배열로 복원
    if (savedMovieIds !== null) {
        const parsedMovieId = JSON.parse(savedMovieIds);
        movieIds = parsedMovieId;
    }
    
    // 로컬스토리지에 영화 id가 있으면 좋아요 클릭한 상태로 랜더링
    movieIds.forEach(element => {
        if(pathNameMovieId === element.id) {
            likeThumbs.classList.add("fas")
        }
    });
}

export default handleLikeBtn;