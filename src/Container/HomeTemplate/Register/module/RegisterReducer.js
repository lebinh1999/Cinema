import * as TypeAction  from "./constant"

const initialState = {
    data: null, 
    err : null,
}

export default (state = initialState, action) => {
    switch (action.type) {

    case TypeAction.REGISTER_RESQUEST:
        state.data = null;
        state.err = null;
        return { ...state }
    case TypeAction.REGISTER_SUCCESS:
        state.data = action.payload;
        state.err = null;
        return { ...state }
    case TypeAction.REGISTER_FAILED:
        state.data = null;
        state.err = action.payload;
        return { ...state }
    default:
        return {...state }
    }
}
