import * as ActionType from "./constant";
import Axios from "axios";

export const actFetchTheaterDetailTabItemApi = (id) => {
    return (dispatch) => {
        dispatch(actFetchTheaterDetailTabItemRequest())
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            method: "GET",
        })
        .then((result)=>{
            dispatch(actFetchTheaterDetailTabItemSuccess(result.data))
        })
        .catch((err)=>{
            dispatch(actFetchTheaterDetailTabItemFailed(err))
        })
    }
}

const actFetchTheaterDetailTabItemRequest = () => {
    return{
        type: ActionType.DETAIL_ITEM_THEATER_REQUEST,
    }
}

const actFetchTheaterDetailTabItemSuccess = (data) => {
    return{
        type: ActionType.DETAIL_ITEM_THEATER_SUCCESS,
        payload: data,
    }
}

const actFetchTheaterDetailTabItemFailed = (err) => {
    return{
        type: ActionType.DETAIL_ITEM_THEATER_FAILED,
        payload: err,
    }
}