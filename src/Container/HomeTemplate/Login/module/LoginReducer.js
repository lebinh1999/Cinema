import { USRELOGIN } from "../../../../util/settings";
import * as TypeAction from "./constant";

// let taiKhoanDN = '';
// if(localStorage.getItem(USRELOGIN)) {

//     let usLogin = JSON.parse(localStorage.getItem(USRELOGIN));

//     taiKhoanDN = usLogin.taiKhoan;

// }

const initialState = {
    data: null,
    err: null,
}

export default (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case TypeAction.LOGIN_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case TypeAction.LOGIN_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case TypeAction.LOGIN_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state }

        default:
            return { ...state }
    }
}
