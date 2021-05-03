import * as ActionType from "./constant";
import Axios from "axios";

export const actFetchMovieTool = () => {
    return (dispatch) => {
        dispatch(actFetchMovieToolRequest())
        Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11`,
            method: "GET",
        })
        .then((result)=>{
            dispatch(actFetchMovieToolSuccess(result.data))
        })
        .catch((err)=>{
            dispatch(actFetchMovieToolFailed(err))
        })
    }
}

const actFetchMovieToolRequest = () => {
    return{
        type: ActionType.FETCH_TOOL_REQUEST,
    }
}

const actFetchMovieToolSuccess = (data) => {
    return{
        type: ActionType.FETCH_TOOL_SUCCESS,
        payload: data,
    }
}

const actFetchMovieToolFailed = (err) => {
    return{
        type: ActionType.FETCH_TOOL_FAILED,
        payload: err,
    }
}
