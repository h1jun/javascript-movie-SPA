import likeView from "../components/like";
import clkRoute from "../functions/handleClickRoute.js";
const handleCancelLike = () => {
    const cancelBtn = document.querySelectorAll('.cancel__buton');

    // 로컬스토리지 value 배열로 저장
    let movieIds = [];
    const savedMovieIds = localStorage.getItem("id")
    
    if (savedMovieIds !== null) {
        const parsedMovieId = JSON.parse(savedMovieIds);
        movieIds = parsedMovieId;
    }
 
    function saveMovieId() {
        localStorage.setItem("id", JSON.stringify(movieIds))
    }


    cancelBtn.forEach(element => {
        console.log(element);
        element.addEventListener('click', event => {
            event.preventDefault();
            movieIds = movieIds.filter((movieId) => movieId.id !== event.target.id);
            saveMovieId();
            likeView();
            handleCancelLike();
            clkRoute();
        });
    });
}

export default handleCancelLike