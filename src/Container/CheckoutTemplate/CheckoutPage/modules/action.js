import * as ActionType from "./constant";
import Axios from "axios";
import {TOKEN} from "./../../../../util/settings";

export const actCheckoutMovie = (id) => {
    return(dispatch) => {
        Axios({
            url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
            method:"GET",
        })
        .then((result) => {
            dispatch(actCheckoutMovieSuccess(result.data))
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
}

export const DatVeAction = (thongTinDatVe)=>{
    return async (dispatch) =>{
        try {
            const res = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinDatVe,
                headers:{
                    Authorization: `Bearer ${localStorage.getItem(TOKEN)}`
                }
            });
            if (res.status == 200) {
                alert(res.data);
                window.location.reload();
            }
        }
        catch(err){
            alert(err.response?.data);
        }
    }
}


const actCheckoutMovieSuccess = (data) => {
    return{
        type: ActionType.SET_LICH_CHIEU,
        payload: data,
    } 
}
