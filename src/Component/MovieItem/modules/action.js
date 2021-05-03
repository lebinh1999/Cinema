import * as ActionType from "./constant";
import Axios from "axios";

export const actListMovieApiNowShowing = () => {
  return (dispatch) => {
    dispatch(actListMovieNSRequest());
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      method: "GET",
    })
    .then((result) => {
      dispatch(actListMovieNSSuccess(result.data));
    })
    .catch((err) => {
      dispatch(actListMovieNSFailed(err));
    })
  }
}

const actListMovieNSRequest = () => {
    return {
      type: ActionType.LIST_MOVIENS_REQUEST,
    };
  };
  
  const actListMovieNSSuccess = (data) => {
    return {
      type: ActionType.LIST_MOVIENS_SUCCESS,
      payload: data,
    };
  };
  
  const actListMovieNSFailed = (err) => {
    return {
      type: ActionType.LIST_MOVIENS_FAILED,
      payload: err,
    };
  };