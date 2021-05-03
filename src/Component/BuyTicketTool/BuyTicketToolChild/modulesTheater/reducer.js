import * as ActionType from "./constant";

let initialState = {
    data: null,
    err: null,
}

const listToolTheaterReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.FETCH_TOOL_THEATER_REQUEST:
            state.data = null;
            state.err = null;
        return { ...state };
        case ActionType.FETCH_TOOL_THEATER_SUCCESS:
            state.data = action.payload;
            state.err = null;
        return { ...state }
        case ActionType.FETCH_TOOL_THEATER_FAILED:
            state.data = null;
            state.err = action.payload;
        return { ...state }

        default:
            return { ...state };
    }
}
export default listToolTheaterReducer;