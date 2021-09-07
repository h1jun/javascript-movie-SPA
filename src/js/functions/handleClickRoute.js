import { router, navigateTo } from '../router.js';

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


export default clkRoute;