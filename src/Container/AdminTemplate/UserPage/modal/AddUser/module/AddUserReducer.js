import * as TypeAction from "./constant";

const initialState = {
  data: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TypeAction.ADD_USER_REQUEST:
      state.data = null;
      state.err = null;
      return { ...state };

    case TypeAction.ADD_USER_SUCCESS:
      state.data = action.payload;
      state.err = null;

    case TypeAction.ADD_USER_FAILED:
      state.data = null;
      state.err = action.payload;
    default:
      return { ...state };
  }
};
