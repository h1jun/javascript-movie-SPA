import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"

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
        resultSearch.classList.add("hidden");

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
        }, 500);
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

        movieList.forEach(element => {
            const li = document.createElement("li");
            li.innerHTML = element.title;
            searchMovieList.appendChild(li);
        });
    }
}

export default handleSearchMovie;