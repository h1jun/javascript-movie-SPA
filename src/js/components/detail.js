import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"

const detailView = async (movidID) => {
    const detail = await getMovieDetail(movidID)
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
                        <span class="text-2xl mr-7">${detail.genres[0].name}</span>
                        <span class="text-2xl">${detail.runtime}분</span>
                    </div>
                    <h2 class="text-2xl font-bold mb-7">"${detail.tagline === "" ? "정보가 없습니다.": detail.tagline}"</h2>
                    <div>
                        <p class="leading-6">${detail.overview === "" ? "정보가 없습니다.": detail.overview}</p>
                    </div>
                </div>
            </div>
    
        </section>
    `;
    
    document.querySelector('main').innerHTML = movieDetailTemplate;

}


export default detailView;