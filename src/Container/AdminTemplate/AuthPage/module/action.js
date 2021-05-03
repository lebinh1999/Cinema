import * as TypeAction from "./constant";
import Axios from "axios";
import { TOKEN, USRELOGIN } from "./../../../../util/settings";

export const fetchAuthPageApi  = (user, history) =>{
    return (dispatch) =>{
        dispatch(actAuthPageRequest());
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method:"POST",
            data: user,
        })
        .then((res)=>{
            if(res.data.maLoaiNguoiDung === "QuanTri"){
                dispatch(actAuthPageSuccess(res.data));
                localStorage.setItem(TOKEN, res.data.accessToken)
                localStorage.setItem(USRELOGIN,JSON.stringify(res.data));

                // push về admin khi đăng nhập đúng ma loai nguoi dung thành công
                history.push("/admin");
            }
            else {
                return Promise.reject({
                    response:{data: "Tài khoản không có quyền truy cập !"},
                });
            }
        })
        .catch((err)=>{
            dispatch(actAuthPageFailed(err));
        })
    }
}


const actAuthPageRequest = () =>{
    return {
        type: TypeAction.AUTHPAGE_REQUEST,
    }
}

const actAuthPageSuccess = (data) =>{
    return {
        type: TypeAction.AUTHPAGE_SUCCESS,
        payload: data,
    }
}

const actAuthPageFailed = (data)=>{
    return {
        type: TypeAction.AUTHPAGE_FAILED,
        payload: data,
    }
}