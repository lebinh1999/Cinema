import * as TypeAction from "./constant";
import Axios from "axios";
import { TOKEN, USRELOGIN } from "../../../../util/settings";

export const fetchLoginApi  = (user, history) =>{
    return (dispatch) =>{
        dispatch(actLoginRequest());
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method:"POST",
            data: user,
        })
        .then((res)=>{
            // if(res.data.maLoaiNguoiDung === "KhachHang"){
                dispatch(actLoginSuccess(res.data));
                localStorage.setItem(TOKEN, res.data.accessToken)
                localStorage.setItem(USRELOGIN,JSON.stringify(res.data));

                // push về trang chủ khi đăng nhập thành công
                history.push("/");
            // }
            // else {
            //     return Promise.reject({
            //         response:{data: "Tài khoản không có quyền truy cập !"},
            //     });
            // }
        })
        .catch((err)=>{
            dispatch(actLoginFailed(err));
        })
    }
}


const actLoginRequest = () =>{
    return {
        type: TypeAction.LOGIN_REQUEST,
    }
}

const actLoginSuccess = (data) =>{
    return {
        type: TypeAction.LOGIN_SUCCESS,
        payload: data,
    }
}

const actLoginFailed = (data)=>{
    return {
        type: TypeAction.LOGIN_FAILED,
        payload: data,
    }
}