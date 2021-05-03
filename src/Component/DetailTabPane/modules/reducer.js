import * as ActionType from "./constant";

let initialState = {
    data: null,
    err: null,
}

const listTheaterDetailTabItemReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.DETAIL_ITEM_THEATER_REQUEST:
            state.data = null;
            state.err = null;
        return { ...state };
        case ActionType.DETAIL_ITEM_THEATER_SUCCESS:
            state.data = action.payload;
            state.err = null;
        return { ...state }
        case ActionType.DETAIL_ITEM_THEATER_FAILED:
            state.data = null;
            state.err = action.payload;
        return { ...state }

        default:
            return { ...state };
    }
}
export default listTheaterDetailTabItemReducer;