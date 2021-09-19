import { router, navigateTo } from '../router.js';

const genereClkRoute = () => {
    const changePage = document.querySelector('.genere__section');

    changePage.addEventListener("click", event => {
        event.preventDefault();
        if (event.target.parentNode.matches("[route]")) {
            const pagePath = event.target.parentNode.getAttribute("route")
            console.log(pagePath);
            navigateTo(pagePath);
        }
    })
}

const clkRoute = () => {
    const changePage = document.querySelectorAll('.route');

    changePage.forEach(element => {
        element.addEventListener("click", event => {
            event.preventDefault();
            if (event.currentTarget.matches("[route]")) {
                const pagePath = event.currentTarget.getAttribute("route")
                navigateTo(pagePath);
            }
        })
    });
}


export { clkRoute, genereClkRoute };