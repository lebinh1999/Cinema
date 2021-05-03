import * as TypeAction from "./constant";
import Axios from "axios"

export const actShowTimeApi = (ma) =>{
    return (dispatch) =>{
        dispatch(actShowTimeRequest);
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${ma}`,
            method:'GET',
        })   
        .then(res=>{
            dispatch(actShowTimeSuccess(res.data))
        })
        .catch(err=>{
            dispatch(actShowTimeFailed(err))
        })
    }
}

const actShowTimeRequest = () =>{
    return {
        type: TypeAction.SHOWTIMES_REQUEST,
    }
};

const actShowTimeSuccess = (data) =>{
    return {
        type: TypeAction.SHOWTIMES_SUCCESS,
        payload: data,
    }
}

const actShowTimeFailed = (err) =>{
    return {
        type: TypeAction.SHOWTIMES_SUCCESS,
        payload: err,
    }
}





