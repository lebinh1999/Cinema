import * as ActionType from "./constant";

let initialState = {
      lichChieu :{},
      danhSachGheDangDat: [],
}
const listCheckoutReducer = (state = initialState, action) => {
  // console.log(action.payload);
    switch (action.type) {
        case ActionType.SET_LICH_CHIEU:
          state.lichChieu = action.payload;
          return { ...state };
        case ActionType.DAT_VE: {
          // ktra dang đang đặt có trong danhsachdangdat ko ??
          let mangGheDangDat = [...state.danhSachGheDangDat];
          console.log("ghedangdat",action.gheDangDat.maGhe)
          let index = mangGheDangDat.findIndex(datve => datve.maGhe === action.gheDangDat.maGhe);
          if(index !== -1){
            mangGheDangDat.splice(index, 1);
          }
          else {
            mangGheDangDat.push(action.gheDangDat);
          }
          state.danhSachGheDangDat = mangGheDangDat;
          return { ...state };
        }
        default:
          return { ...state };
      }
}
export default listCheckoutReducer