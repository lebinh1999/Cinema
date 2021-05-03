import * as ActionType from "./constant";
import Axios from "axios";
import { DISPLAY_LOADER, HIDE_LOADER } from "../../Loader/modules/constant";

export const  actListTheaterApi = (id) =>{
    return async (dispatch)=>{
        dispatch(actListTheaterRequest);
        await Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${id}`,
            method:"GET",
        })
        .then((res)=>{
            dispatch(actListTheaterSuccess(res.data));
        })
        .catch((err)=>{
            dispatch(actListTheaterFailed(err));
        })
    }
}

const actListTheaterRequest = () =>{
    return {
        type: ActionType.LIST_THEATER_REQUEST,
    }
}
const actListTheaterSuccess = (data) =>{
    return {
        type: ActionType.LIST_THEATER_SUCCESS,
        payload: data,
    }
}
const actListTheaterFailed = (err) =>{
    return {
        type: ActionType.LIST_THEATER_FAILED,
        payload: err,
    }
}