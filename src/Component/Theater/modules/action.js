import * as ActionType from "./constant";
import Axios from "axios";
import { DISPLAY_LOADER, HIDE_LOADER } from "../../Loader/modules/constant";


export const actListCinemaApi = () =>{
    return (dispatch) =>{
        dispatch({
            type: DISPLAY_LOADER,
        })
        dispatch(actListCinemaRequest())
        Axios({
            url: "https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
            method: 'GET',
        })
        .then((res)=>{
            dispatch(actListCinemaSuccess(res.data));
            dispatch({
                type: HIDE_LOADER,
            })
        })
        .catch((err)=>{
            dispatch(actListCinemaFailed(err))
        })
    }
}


const actListCinemaRequest = () =>{
    return {
        type: ActionType.LIST_CINEMA_REQUEST,
    }
}
const actListCinemaSuccess = (data) =>{
    return {
        type: ActionType.LIST_CINEMA_SUCCESS,
        payload: data,
    }
}
const actListCinemaFailed = (err) =>{
    return {
        type: ActionType.LIST_CINEMA_FAILED,
        payload: err,
    }
}

