import * as ActionType from "./constant";
import Axios from "axios";

export const actFetchTheaterTool = (id) => {
    return (dispatch) => {
        dispatch(actFetchTheaterToolRequest())
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
            method: "GET",
        })
        .then((result)=>{
            dispatch(actFetchTheaterToolSuccess(result.data))
        })
        .catch((err)=>{
            dispatch(actFetchTheaterToolFailed(err))
        })
    }
}

const actFetchTheaterToolRequest = () => {
    return{
        type: ActionType.FETCH_TOOL_THEATER_REQUEST,
    }
}

const actFetchTheaterToolSuccess = (data) => {
    return{
        type: ActionType.FETCH_TOOL_THEATER_SUCCESS,
        payload: data,
    }
}

const actFetchTheaterToolFailed = (err) => {
    return{
        type: ActionType.FETCH_TOOL_THEATER_FAILED,
        payload: err,
    }
}