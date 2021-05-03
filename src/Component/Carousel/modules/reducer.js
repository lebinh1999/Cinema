import * as ActionType from "./constant";

let initialState = {
    data: null,
    err: null,
}

const listMovieCarouselReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionType.LIST_MOVIE_CAROUSEL_SUCCESS:
            state.data = null;
            state.err = null;
        return { ...state };
        case ActionType.LIST_MOVIE_CAROUSEL_SUCCESS:
            state.data = action.payload;
            state.err = null;
        return { ...state }
        case ActionType.LIST_MOVIE_CAROUSEL_FAILED:
            state.data = null;
            state.err = action.payload;
        return { ...state }

        default:
            return { ...state };
    }
}
export default listMovieCarouselReducer;