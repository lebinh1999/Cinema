import { combineReducers } from "redux";
import listMovieReducerCS from "./../../Component/MovieItemCS/modules/reducer";
import listMovieReducerNS from "./../../Component/MovieItem/modules/reducer";
import listMovieCarouselReducer from "./../../Component/Carousel/modules/reducer";
import detailMovieReducer from "./../../Container/HomeTemplate/Movie_Detail_Page/modules/reducer";
import LoaderReducer from "./../../Component/Loader/modules/LoaderReducer"
import ListCinemaReducer from "./../../Component/Theater/modules/ListCinemaReducer"
import ListTheaterReducer from "./../../Component/TheaterItem/modules/ListTheaterReducer";
import ShowTimeReducer from "./../../Component/ShowTimes/modules/ShowTimeReducer";
import LoginReducer from "./../../Container/HomeTemplate/Login/module/LoginReducer";
import RegisterReducer from "./../../Container/HomeTemplate/Register/module/RegisterReducer"
import listMovieAdminReducer from "./../../Container/AdminTemplate/MovieControlPage/modules/reducer";
import listCheckoutReducer from "./../../Container/CheckoutTemplate/CheckoutPage/modules/reducer";
import listUserAdminReducer from "./../../Container/AdminTemplate/UserPage/modules/reducer";
import AuthPageReducer from "./../../Container/AdminTemplate/AuthPage/module/AuthPageReducer";
import AddUserReducer from "./../../Container/AdminTemplate/UserPage/modal/AddUser/module/AddUserReducer";
import listToolMovieReducer from "./../../Component/BuyTicketTool/modules/reducer";
import listToolTheaterReducer from "./../../Component/BuyTicketTool/BuyTicketToolChild/modulesTheater/reducer";
import listTheaterDetailTabItemReducer from "./../../Component/DetailTabPane/modules/reducer";

const rootReducer = combineReducers({
    listMovieReducerNS,
    listMovieReducerCS,
    listMovieCarouselReducer,
    detailMovieReducer,
    LoaderReducer,
    ListCinemaReducer,
    ListTheaterReducer,
    ShowTimeReducer,
    LoginReducer,
    RegisterReducer, 
    listMovieAdminReducer,
    listCheckoutReducer,
    listUserAdminReducer,
    AuthPageReducer,
    AddUserReducer,
    listToolMovieReducer,
    listToolTheaterReducer,
    listTheaterDetailTabItemReducer,
    
});

export default rootReducer;