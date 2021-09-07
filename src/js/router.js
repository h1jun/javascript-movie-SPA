import { headerView } from "./components/header.js";
import { upcomingView } from "./components/upcoming.js";
import { genereMovieView } from "./components/genre.js";
import mainView from "./components/main";
import detailView from "./components/detail.js";
import handleSearchMovie from "./components/search.js";
import removeSearchInput from "./functions/handleSearchBox.js";

const navigateTo = (pagePath) => {
    history.pushState(null, null, window.location.origin + pagePath);
    router();
}

headerView();
mainView();
handleHomeClick();
handleSearchMovie();
removeSearchInput();

const router = () => {
    const routes = [
        {
            path: "/",
            view: async () => {
                await upcomingView();
                await genereMovieView();
                clkRoute();
            }
        },
        {
            path: "detail",
            view: () => {
                detailView(location.pathname.split("/")[2]);
            }
        },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname.split("/")[1] === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // 모두 false 경우 메인 페이지로 강제 복귀, 하나의 true가 있다면 if문 진입 x
    // find는 첫 true를 만나면 거기서 반환하고 종료 -> 페이지가 존재한다면 적어도 하나의 true는 나온다.
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }

    match.route.view();
}

window.addEventListener("popstate", router);

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


function handleHomeClick() {
    const home = document.querySelector('.home');

    home.addEventListener('click', (event) => {
        event.preventDefault();
        const pagePath = event.currentTarget.getAttribute("route")
        navigateTo(pagePath);
    })
}


export default router;