import * as TYPELOADER from "./constant";

const initialState = {
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPELOADER.DISPLAY_LOADER:
      state.isLoading = true;
      return { ...state };
    case TYPELOADER.HIDE_LOADER:
      state.isLoading = false;
      return { ...state };

    default:
      return state;
  }
};
