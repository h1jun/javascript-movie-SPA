const headerView = () => {
    const headerTemplate = `
        <header class="my-0 mx-auto w-90vw xl:w-1200 bg-white z-20">
            <div class="flex justify-between h-7vh items-center nav-menu">
                <div class="text-2xl font-semibold home" route="/">
                    <a href="/">Movie</a>
                </div>
                <div class="flex text-2xl">
                    <div>
                        <input type="text" class="search__input" placeholder="검색" id="search">
                        <label for="search" class="w-48 mr-28">
                        <i class="fas fa-search"></i>
                        </label>
                        <div class="result__search hidden absolute top-16 overflow-y-scroll bg-white rounded-2xl py-5 px-7 z-10 h-72">
                            <ul class="pop__movielist__result">
                            </ul>
                        </div>
                    </div>
                    <div>
                        <a href="#" route="/detail/1234" class="route">좋아요</a>
                    </div>
                </div>
            </div>
        </header>
    `;

    document.querySelector('#root').innerHTML = headerTemplate;
}

export { headerView }