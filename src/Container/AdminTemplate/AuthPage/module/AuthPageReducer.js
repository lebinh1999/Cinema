import { USRELOGIN } from "../../../../util/settings";
import * as TypeAction from "./constant";

const initialState = {
    data: null, 
    err: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case TypeAction.AUTHPAGE_REQUEST:
            state.data = null;
            state.err = null;
            return { ...state }
        case TypeAction.AUTHPAGE_SUCCESS:
            state.data = action.payload;
            state.err = null;
            return { ...state }
        case TypeAction.AUTHPAGE_FAILED:
            state.data = null;
            state.err = action.payload;
            return { ...state }
        default: 
            return {...state};
    }
}
