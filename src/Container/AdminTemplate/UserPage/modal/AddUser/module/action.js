import * as TypeAction from "./constant";
import Axios from "axios";
import { USRELOGIN } from "../../../../../../util/settings";

export const fetchAddUserApi = (user)=>{
    let accessToken = " ";
    if(localStorage.getItem(USRELOGIN)) {
        accessToken = JSON.parse(localStorage.getItem(USRELOGIN)).accessToken;
    }
    return (dispatch) =>{
        dispatch(actAddUserRequest());
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            method:"POST",
            data:user,
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
        .then ((res)=>{
            dispatch(actAddUserSuccess(res.data));
            if(res.status === 200) {
                alert("Thêm người dùng thành công")
            }
            else {
                alert("Thêm người dùng không thành công")
            }
        })
        .catch((err)=>{
            dispatch(actAddUserFailed(err))
        })
    }
}

const actAddUserRequest = () =>{
    return {
        type: TypeAction.ADD_USER_REQUEST,
    }
}
const actAddUserSuccess = (data) =>{
    return {
        type: TypeAction.ADD_USER_SUCCESS,
        payload: data,
    }
}
const actAddUserFailed = (err) =>{
    return {
        type: TypeAction.ADD_USER_FAILED,
        payload: err,
    }
}