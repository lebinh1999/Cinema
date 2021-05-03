import * as ActionType from "./constant";
import Axios from "axios";

export const actListMovieCarousel = () => {
    return (dispatch) => {
        dispatch(actListMovieCarouselRequest());
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
            method: "GET",
        })
        .then((result) => {
            dispatch(actListMovieCarouselSuccess(result.data));
        })
        .catch((err) => {
            dispatch(actListMovieCarouselFailed(err));
        })
    }
}

const actListMovieCarouselRequest = () => {
    return {
        type: ActionType.LIST_MOVIE_CAROUSEL_REQUEST,
    }
}

const actListMovieCarouselSuccess = () => {
    return {
        type: ActionType.LIST_MOVIE_CAROUSEL_SUCCESS,
    }
}

const actListMovieCarouselFailed = () => {
    return {
        type: ActionType.LIST_MOVIE_CAROUSEL_FAILED,
    }
}