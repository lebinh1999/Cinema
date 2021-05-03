import * as ActionType from "./constant";
import Axios from "axios";
import { USRELOGIN } from "../../../../util/settings";

export const actFetchAdminMovie = (numb) => {
    return(dispatch) => {
        dispatch(actFetchAdminMovieRequest());
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP11&soTrang=${numb}&soPhanTuTrenTrang=9`,
            method:"GET",
        })
        .then((result) => {
            dispatch(actFetchAdminMovieSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actFetchAdminMovieFailed(err))
        })
    }
}

export const DeleteMovieApi = (ma) =>{
    let accessToken = "";
    if(localStorage.getItem(USRELOGIN)) {
        accessToken = JSON.parse(localStorage.getItem(USRELOGIN)).accessToken;
    }
    return (dispatch) =>{
        Axios({
            url : `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${ma}`,
            method:"DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then((res)=>{
            alert(res.data)
            dispatch(actFetchAdminMovie());
        })
        .catch((err)=>{
            alert(err.response.data)
        })
    }
}

const actFetchAdminMovieRequest = () => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_REQUEST,
    } 
}

const actFetchAdminMovieSuccess = (data) => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_SUCCESS,
        payload: data,
    } 
}

const actFetchAdminMovieFailed = (err) => {
    return{
        type: ActionType.FETCH_MOVIEADMIN_FAILED,
        payload: err,
    } 
}