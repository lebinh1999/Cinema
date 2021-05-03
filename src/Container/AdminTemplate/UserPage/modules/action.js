import * as ActionType from "./constant";
import Axios from "axios";
import { USRELOGIN } from "../../../../util/settings";

export const actFetchAdminUser = (numb) => {
    return(dispatch) => {
        dispatch(actFetchAdminUserRequest());
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP01&soTrang=${numb}&soPhanTuTrenTrang=21`,
            method:"GET",
        })
        .then((result) => {
            dispatch(actFetchAdminUserSuccess(result.data))
        })
        .catch((err) => {
            dispatch(actFetchAdminUserFailed(err))
        })
    }
}

export const DeleteUser =(taikhoan)=>{
    let accesstoken = "";
    if(localStorage.getItem(USRELOGIN)){
        accesstoken = JSON.parse(localStorage.getItem(USRELOGIN)).accesstoken;
    }
    return (dispatch) =>{
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`,
            method:"DELETE",
            headers:{
                Authorization: `Bearer ${accesstoken}`,
            }
        })
        .then((res)=>{
            alert(res.data);
            dispatch(actFetchAdminUser());
        })
        .catch((err)=>{
            alert(err.response.data);
        })
    }
}

const actFetchAdminUserRequest = () => {
    return{
        type: ActionType.FETCH_USER_REQUEST,
    } 
}

const actFetchAdminUserSuccess = (data) => {
    return{
        type: ActionType.FETCH_USER_SUCCESS,
        payload: data,
    } 
}

const actFetchAdminUserFailed = (err) => {
    return{
        type: ActionType.FETCH_USER_FAILED,
        payload: err,
    } 
}