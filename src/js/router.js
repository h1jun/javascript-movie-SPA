import { headerView } from "./components/header.js";
import { upcomingView } from "./components/upcoming.js";
import  { genereMovieView } from "./components/genre.js";
import  mainView from "./components/main";
import  detailView from "./components/detail.js";

const navigateTo = (pagePath) => {
    history.pushState(null, null, window.location.origin + pagePath);
 
    router();
}

headerView();
mainView();

const router = () => {
    const routes = [
        {
            path: "/",
            view: async () => {
                // headerView();
                // mainView();
                await upcomingView();
                genereMovieView();
                clkRoute();
            }
        },
        {
            path: "detail",
            view: () => {
                // headerView();
                // mainView();
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
    if(!match) {
        match = {
            route: routes[0],
            isMatch: true,
        };
    }
    ;
    match.route.view();

}

window.addEventListener("popstate", router);


const clkRoute = () => {
    const changePage = document.querySelectorAll('.route');
    
    changePage.forEach(element => {
        console.log(element);
        element.addEventListener("click", event => {
            event.preventDefault();
            if(event.target.matches("[route]")) {
                const pagePath = event.target.getAttribute("route")
                navigateTo(pagePath);
            }
        })
    });
}

export default router;