const likeView = () => {

    let movieLikeTemplate = `
        <section class="my-0 mx-auto  w-90vw xl:w-1220">
            <h1 class="text-3xl font-bold my-9">내가 좋아하는 영화 모음</h1>
            <div>
                <ul class="grid  grid-cols-4 gap-4 h-screen">
                    {{__like_movie_list__}}
                </ul>
            </div>
        </section>
    `;

    const parsedLikeMovie = JSON.parse(localStorage.id)
    const movieLi = [];

    parsedLikeMovie.forEach(element => {
        movieLi.push(`
            <li class="flex flex-col items-center">
                <a href="#" class="route flex flex-col items-center" route="/detail/${element.id}">
                    <img src="${element.path}" class="w-64 h-96 pb-4">
                    <h3 class="pb-4 text-lg font-bold">${element.title}</h3>
                </a>
                <button type="button" class="bg-red-600 w-28 h-8 rounded-xl font-semibold text-white cancel__buton" id="${element.id}">좋아요 취소</button>
            </li>
        `);
    
    });
    
    movieLikeTemplate = movieLikeTemplate.replace('{{__like_movie_list__}}', movieLi.join(''))
    
    document.querySelector('main').innerHTML = movieLikeTemplate;
}

export default likeView;