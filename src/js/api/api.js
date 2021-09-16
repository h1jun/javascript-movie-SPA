import storeInfo from "../store.js";

const API_KEY = storeInfo.API_KEY;

const getUpcomingMovie = async () => {
    try {
        while (true) {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KO&page=1`);
            const dataCount = response.data.results.length; // 가져온 data 배열 길이
            const rndNum = Math.floor(Math.random() * dataCount); // 랜덤 숫자
            const movieId = response.data.results[rndNum].id;

            const detail = await getMovieDetail(movieId);

            if (detail.tagline === "" || detail.tagline === " ") {
                continue;
            }
            return movieId;
        }
    } catch (error) {
        console.log(error);
    }
}

const getMovieDetail = async (movieId) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko`);

        return response.data;

    } catch (error) {
        console.log(error);
    }
}

const getSearchMovie = async (keyword) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KO&query=${keyword}&page=1&include_adult=false`);

        return response.data.results;

    } catch (error) {
        console.log(error);
    }
}

const getMovieList = async (genre) => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${storeInfo.genres[genre]}/recommendations?api_key=${API_KEY}&language=ko&page=1`);

        const movieArr = [];
        const check = [];

        while (movieArr.length !== 6) {
            const dataCnt = response.data.results.length;
            const rndNum = Math.floor(Math.random() * dataCnt);
            if (check.indexOf(rndNum) === -1) {
                check.push(rndNum);
                movieArr.push(response.data.results[rndNum]);
            }
        }

        return movieArr;

    } catch (error) {
        console.log(error);
    }
}


export { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList };