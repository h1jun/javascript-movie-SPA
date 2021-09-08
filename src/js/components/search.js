import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"
import clkRoute from "../functions/handleClickRoute.js";

const handleSearchMovie = () => {
    const searchInput = document.querySelector(".search__input");
    const resultSearch = document.querySelector(".result__search");
    const searchMovieList = document.querySelector(".pop__movielist__result");
    let cache = '';

    // 검색어 입력시 자동 입력 실행
    searchInput.addEventListener("keydown", (event) => {
        const beforeInput = searchInput.value;
        timer(beforeInput);
    })

    // 포커스 해제 시 검색 결과창 hidden
    searchInput.addEventListener("blur", (event) => {
        setTimeout(() => {
            resultSearch.classList.add("hidden");
        }, 200);
    })

    const timer = (beforeInput) => {
        setTimeout(() => {
            if (searchInput.value !== beforeInput) {
                loadData(searchInput.value);
            }
            if (searchInput.value === "") {
                resultSearch.classList.add("hidden");
            } else {
                resultSearch.classList.remove("hidden");
            }
        }, 100);
    }


    const loadData = async (input) => {
        // 이전 검색어랑 똑같으면 리턴 X
        if (cache === input) {
            return;
        } else {
            const resultSearchMovie = await getSearchMovie(input)
            makeMovieList(resultSearchMovie)
        }
    }

    const makeMovieList = (movieList) => {
        searchMovieList.innerHTML = "";

        const movieListArr = []
        movieList.forEach(element => {
            movieListArr.push(`
                <li class="route cursor-pointer hover:bg-gray-700" route="/detail/${element.id}">
                    ${element.title}
                <li>
            `);
        });

        searchMovieList.innerHTML = movieListArr.join('');
        clkRoute();
    }
}

export default handleSearchMovie;