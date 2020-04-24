import * as actionTypes from "./types";

const initialState = {
  authenticated: false,
  loading: false,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCAL_LOGIN:
      return state;
    case actionTypes.LOCAL_SIGNUP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
