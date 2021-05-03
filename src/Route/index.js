import HomePage from "./../Container/HomeTemplate/Home_Page";
import MovieDetail from "./../Container/HomeTemplate/Movie_Detail_Page";
import CheckoutPage from "../Container/CheckoutTemplate/CheckoutPage";
import UserPage from "../Container/AdminTemplate/UserPage";
import MovieControlPage from "../Container/AdminTemplate/MovieControlPage";
import MovieShowControl from "../Container/AdminTemplate/MovieShowControl";
import AdminPage from "../Container/AdminTemplate/AdminPage";
const routeHome = [
    {
        path: '/',
        component: HomePage,
        exact: true,
    },
    {
        path: "/detail/:id",
        component: MovieDetail,
        exact: false,
    },
]

const routeCheckout = [
    {
        path: "/checkout/:id",
        component: CheckoutPage,
        exact: false,
    },
]

const routeAdmin = [
    {
        path: "/admin",
        component: AdminPage,
        exact: false,
    },
    {
        path: "/movieControlPage",
        component: MovieControlPage,
        exact: false,
    },
    {
        path: "/userPage",
        component: UserPage,
        exact: false,
    },
    {
        path: "/movieShow",
        component: MovieShowControl,
        exact: false,
    },
]

export {routeHome,routeCheckout,routeAdmin};