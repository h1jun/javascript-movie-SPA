import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"

const detailView = async (movidID) => {
    const detail = await getMovieDetail(movidID)
    
    const picFullPath = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`; 
    
    
    let movieDetailTemplate = `
        <section>
            <div class="w-screen h-60vh z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30 filter grayscale-80" style="background-image: url(${picFullPath})">
        </section>
        <section>
            <div class="flex my-0 mx-auto  w-90vw xl:w-1200">
                <img src="https://image.tmdb.org/t/p/original/${detail.poster_path}" class="w-72 -mt-16 mr-8 z-10">
                <div>
                    <div class="flex items-center">
                        <h1 class="text-2rem font-bold my-6 mr-5">${detail.title}</h1>
                        <span class="text-1.3rem mr-5">${detail.release_date}</span>
                        <button type="button" class="flex items-center justify-center bg-blue-400 py-2 px-4 rounded-lg">
                            <i class="far fa-thumbs-up mr-3"></i>    
                            <span>좋아요</span>
                        </button>
                    </div>
                    <div class="flex">
                        <div class="">⭐ ${detail.vote_average}</div>
                        <span class="">${detail.genres[0].name}</span>
                        <span class="">${detail.runtime}분</span>
                    </div>
                    <h2 class="">${detail.tagline}</h2>
                    <div>
                        <p class="">${detail.overview}</p>
                    </div>
                </div>
            </div>
    
        </section>
    `;
    
    document.querySelector('main').innerHTML = movieDetailTemplate;

}


export default detailView;