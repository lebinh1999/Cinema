import * as ActionType from "./constant";

const initialState = {
  data: null,
  err: null,
};

export default (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case ActionType.LIST_THEATER_REQUEST:
      state.data = null;
      state.err = null;
      return { ...state };
    case ActionType.LIST_THEATER_SUCCESS:
      state.data = action.payload;
      state.err = null;
      return { ...state };
    case ActionType.LIST_THEATER_FAILED:
      state.data = null;
      state.err = action.payload;
      return { ...state };
    default:
      return {...state};
  }
};
