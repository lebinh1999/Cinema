import * as ActionType from "./constant";
import Axios from "axios";
import { DISPLAY_LOADER, HIDE_LOADER } from "../../Loader/modules/constant";

export const actListMovieApi = () => {
  return (dispatch) => {
    dispatch(actListMovieRequest());
    dispatch({
      type: DISPLAY_LOADER,
    })
    Axios({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP11",
      method: "GET",
    })
    .then((result) => {
      dispatch(actListMovieSuccess(result.data));
      dispatch({
        type: HIDE_LOADER,
      })
    })
    .catch((err) => {
      dispatch(actListMovieFailed(err));
    })
  }
}

const actListMovieRequest = () => {
    return {
      type: ActionType.LIST_MOVIE_REQUEST,
    };
  };
  
  const actListMovieSuccess = (data) => {
    return {
      type: ActionType.LIST_MOVIE_SUCCESS,
      payload: data,
    };
  };
  
  const actListMovieFailed = (err) => {
    return {
      type: ActionType.LIST_MOVIE_FAILED,
      payload: err,
    };
  };