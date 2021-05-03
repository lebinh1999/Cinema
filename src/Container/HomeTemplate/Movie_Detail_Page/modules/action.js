import * as ActionType from "./constant";
import Axios from "axios";

export const actDetailMovieApi = (id) => {
    return (dispatch) => {
        dispatch(actDetailRequest());
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
            method: "GET",
        })
        .then((result) => {
            dispatch(actDetailSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actDetailFailed(err))
        })
    }
}

const actDetailRequest = () => {
    return {
        type: ActionType.DETAIL_MOVIE_REQUEST
    }
}

const actDetailSuccess = (data) => {
    return {
        type: ActionType.DETAIL_MOVIE_SUCCESS,
        payload: data,
    }
}

const actDetailFailed = (err) => {
    return {
        type: ActionType.DETAIL_MOVIE_FAILED,
        payload: err,
    }
}