import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList, getCredits } from "../api/api.js"

const detailView = async (movidID) => {
    const detail = await getMovieDetail(movidID)
    let credits = await getCredits(movidID);
    let picFullPath;
    detail.backdrop_path === null ? picFullPath = "https://via.placeholder.com/1470x600/4E4D53/FFFFFF/?text=NO%20Image" : picFullPath = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`;   
    
    let movieDetailTemplate = `
        <section>
            <div class="w-screen h-60vh z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30 filter grayscale-80 bg-center" style="background-image: url(${picFullPath})">
        </section>
        <section>
            <div class="flex my-0 mx-auto  w-90vw xl:w-1220">
                <img src=${detail.poster_path === null ? "https://via.placeholder.com/300x400/B2B2B2/FFFFFF/?text=NO%20Image" : `https://image.tmdb.org/t/p/original/${detail.poster_path}`} class="w-72 -mt-16 mr-8 z-10 poster">
                <div>
                    <div class="flex items-center">
                        <h1 class="text-2rem font-bold my-6 mr-5 title">${detail.title}</h1>
                        <span class="text-1.3rem mr-5">${detail.release_date}</span>
                        <button type="button" class="flex items-center justify-center bg-blue-400 py-2 px-4 rounded-lg like__button" id="${detail.id}">
                            <i class="far fa-thumbs-up mr-3"></i> 
                            <span>좋아요</span>
                        </button>
                    </div>
                    <div class="flex mb-7">
                        <div class="text-2xl mr-7">⭐ ${detail.vote_average}</div>
                        <span class="text-2xl mr-7"> {{__genres__}} </span>
                        <span class="text-2xl">${detail.runtime}분</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-7">"${detail.tagline === "" ? "정보가 없습니다.": detail.tagline}"</h2>
                    <div>
                        <p class="leading-6">${detail.overview === "" ? "정보가 없습니다.": detail.overview}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-20">
            <div class="flex flex-col my-0 mx-auto w-90vw h-72 xl:w-1220">
                <h2 class="text-4xl font-bold mb-11">출연진</h2>
                <div class="relative h-72 w-90vw xl:w-1220 overflow-hidden">
                    <ul class="absolute slides flex left-0 top-0 transition-left delay-500 ease-out">
                        {{__credits__}}
                    </ul>
                </div>
                <div class="relative">
                    <i class="prev fas fa-angle-double-left absolute cursor-pointer -left-4 bottom-28"></i>
                    <i class="next fas fa-angle-double-right absolute cursor-pointer -right-4 bottom-28"></i>
                </div>
            </div>
        </section>
    `;

    // 영화 장르
    let genresArr = [];

    detail.genres.forEach(genre => {
        genresArr.push(' ' + genre.name + ' ')
        genresArr.push('|')
    });
    genresArr.pop()
    movieDetailTemplate = movieDetailTemplate.replace('{{__genres__}}', genresArr.join(''))


    // 출연진
    let creditsArr = []
    console.log(credits.cast);
    credits.cast.forEach(credit => {
        creditsArr.push(`
            <li class="my-0 mx-auto flex flex-col items-center text-center">
                <img src=${credit.profile_path === null ? "https://via.placeholder.com/96x144/B2B2B2/FFFFFF/?text=NO%20Image" : `https://image.tmdb.org/t/p/original/${credit.profile_path}`} class="w-24">
                <strong class="block w-44">${credit.name}</strong>
                <span class="text-xs text-gray-800">${credit.character} 역</span>
            </li>
        `)
    })
    movieDetailTemplate = movieDetailTemplate.replace('{{__credits__}}', creditsArr.join(''))

    document.querySelector('main').innerHTML = movieDetailTemplate;

}


export default detailView;