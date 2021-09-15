import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"

const genereMovieView = async () => {
    const section = document.createElement('section')
    let genreMovieList = []

    const genreName = ['액션', '어드벤처', '코미디', '애니메이션'];
    for(let i = 0; i < genreName.length; i++) {
        const generApiName = ['Action', 'Adventure', 'Comedy', 'Animation'];
        const movieList = await getMovieList(generApiName[i]);

        let genreMovieTemplate = `
            <div class="my-0 mx-auto  w-90vw xl:w-1200">
                <h2 class="text-3xl font-bold my-9">추천 ${genreName[i]} 영화!</h2>
                <ul class="flex justify-between">
                    {{__movie_list_}}
                </ul>
            </div>
        `;

        const movieLi = [];
        movieList.forEach(element => {
            const year = element.release_date.substring(0, 4);
            const vote_average = String(element.vote_average).substring(0, 3);
            const posterPath = `https://image.tmdb.org/t/p/original/${element.poster_path}`; 
            movieLi.push( `
                <li class="movie-detail cursor-pointer route" id="${element.id}" route="/detail/${element.id}">
                    <div class= "w-44 h-60 bg-left bg-no-repeat bg-contain" style="background-image: url(${posterPath})"></div>
                    <strong>${element.title}</strong>
                    <span class="block">${year}</span>
                    <span>⭐${vote_average}</span>
                </li>
            `);
        });
        genreMovieTemplate = genreMovieTemplate.replace("{{__movie_list_}}", movieLi.join(''));
        genreMovieList.push(genreMovieTemplate);
    }

    section.innerHTML = genreMovieList.join('');

    document.querySelector('main').appendChild(section);
}

export { genereMovieView }