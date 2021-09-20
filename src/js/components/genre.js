import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"
import clkRoute from "../functions/handleClickRoute.js";

const genereMovieView = async () => {
    const section = document.createElement('section');
    section.classList.add('genere__section')

    const genreName = ['액션', '어드벤처', '코미디', '애니메이션', '드라마', '로맨스', '공포', '스릴러', 'SF', '코미디', '범죄'];
    const generApiName = ['Action', 'Adventure', 'Comedy', 'Animation', 'Drama', 'Romance', 'Horror', 'Thriller', 'SF', 'Comedy', 'Crime'];


    let cnt = 0;

    const pageStart = async (cnt) => {
        let genreMovieList = [];
        const movieList = await getMovieList(generApiName[cnt]);

        let genreMovieTemplate = `
            <div class="my-0 mx-auto w-90vw xl:w-1220">
                <div>
                    <h2 class="text-3xl font-bold my-9">추천 ${genreName[cnt]} 영화!</h2>
                    <ul class="flex justify-between">
                        {{__movie_list_}}
                    </ul>
                </div>
            </div>
        `;

        const movieLi = [];
        movieList.forEach(element => {
            const year = element.release_date.substring(0, 4);
            const vote_average = String(element.vote_average).substring(0, 3);
            const posterPath = `https://image.tmdb.org/t/p/original/${element.poster_path}`;
            movieLi.push(`
                <li class="movie-detail cursor-pointer" id="${element.id}" route="/detail/${element.id}">
                    <a route="/detail/${element.id}">
                    <!-- <div class= "w-44 h-60 bg-left bg-no-repeat bg-contain" style="background-image: url(${posterPath})"></div> -->
                        <img src="${posterPath}" class= "w-44 h-60 bg-left bg-no-repeat bg-contain"></img>
                        <strong class="block w-44">${element.title}</strong>
                        <span class="block" class="inline-block">${year}</span>
                        <span class="block">⭐${vote_average}</span>
                    </a>
                </li>
            `);
        });
        genreMovieTemplate = genreMovieTemplate.replace("{{__movie_list_}}", movieLi.join(''));
        genreMovieList.push(genreMovieTemplate);

        if (cnt === 0) {
            section.innerHTML = genreMovieList.join('');
            document.querySelector('main').appendChild(section);
        }
        return genreMovieList;
    }
    await pageStart(cnt);




    // 무한 스크롤
    const lastSection = document.querySelector('.genere__section');

    const io = new IntersectionObserver((entries, observer) => {
        // const ioTarget = entries[0].target;
        entries.forEach(async entry => {
            if (entry.isIntersecting) {
                io.unobserve(lastSection);

                cnt++;
                if (cnt === genreName.length) {
                    observer.disconnect();
                } else {
                    const div = document.createElement('div');
                    div.innerHTML = await pageStart(cnt);
                    document.querySelector('.genere__section').appendChild(div);
                    io.observe(div);
                }
            }
        },
            {
                threshold: 0.3
            }
        );
    });
    io.observe(lastSection);
}
export { genereMovieView }