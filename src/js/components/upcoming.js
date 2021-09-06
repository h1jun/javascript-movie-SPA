import { getUpcomingMovie, getMovieDetail, getSearchMovie, getMovieList } from "../api/api.js"

const upcomingView = async () => {
    
    // const main = document.createElement('main');
    // document.querySelector('#root').append(main);

    // const section = document.createElement('section');
    
    const getMovieId = await getUpcomingMovie();
    const detail = await getMovieDetail(getMovieId);
    const picFullPath = `https://image.tmdb.org/t/p/original/${detail.backdrop_path}`; 
    
    // console.log(detail);
    const upcomingTemplate = `
        <section>
            <div class="w-screen h-70vh absolute z-99- bg-cover bg-no-repeat bg-black backdrop-opacity-30" style="background-image: url(${picFullPath})">
                <div class="bg-black opacity-30 w-screen h-70vh"></div>
            </div>
            
            <div class="my-0 mx-auto  w-90vw xl:w-1200">
                <div class="flex-auto flex flex-col justify-center items-center text-white h-70vh">
                    <div class="mb-32 text-7xl font-bold">${detail.title}</div>
                    <div class="text-4xl mb-24">"${detail.tagline}"</div>
                    <a href="#" class="route border-4 border-white py-2 px-8 bg-black bg-opacity-30 movie-detail cursor-pointer" id=${detail.id} route="/detail/${detail.id}">더보기</a>
                </div>
            </div>
        </section>
    `;

    document.querySelector('main').innerHTML = upcomingTemplate;
    // document.querySelector('main').append(section);

}


export { upcomingView }