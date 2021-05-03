import * as TypeAction  from "./constant";
import Axios from "axios";

export const fetchRegisterApi = (user) =>{
    return (dispatch) =>{
        dispatch(actRegisterRequest());
        Axios({
            url:"https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            method:"POST",
            data: user,
        })
        .then((res)=>{
            dispatch(actRegisterSuccess(res.data));
            console.log(res)
            if(res.status === 200){
                alert("Bạn đã đăng ký thành công!!!")
            }
            else if (res.status === 500){
                console.log(res)
            }
        })
        .catch((err)=>{
            dispatch(actRegisterFailed(err))
        })

    }
}
const actRegisterRequest = () =>{
    return {
        type: TypeAction.REGISTER_RESQUEST,
    }
}

const actRegisterSuccess = (data) =>{
    return {
        type: TypeAction.REGISTER_SUCCESS,
        payload: data,
    }
}

const actRegisterFailed = (data)=>{
    return {
        type: TypeAction.REGISTER_FAILED,
        payload: data,
    }
}
