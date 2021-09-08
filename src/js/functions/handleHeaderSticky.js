const handleHeaderSticky = () => {
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav-menu');
    const headerHeight = header.clientHeight;

    const scrollPosition = pageYOffset;
    if (headerHeight <= pageYOffset) {
        header.classList.remove("my-0", "mx-auto", "w-90vw", "xl:w-1200");
        header.classList.add("fixed", "w-full");
        nav.classList.add("my-0", "mx-auto", "w-9/12");
    } else {
        nav.classList.remove("my-0", "mx-auto", "w-9/12");
        header.classList.remove("fixed", "w-full");
        header.classList.add("my-0", "mx-auto", "w-90vw", "xl:w-1200");
    }
}

export default handleHeaderSticky;