import * as actionTypes from "../../util/AuthConstant";

const initialState = {
  authenticated: false,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCAL_SIGNIN:
      const newState = Object.assign({}, state);
      newState.authenticated = true;
      newState.currentUser = action.currentUser;
      return newState;
    case actionTypes.LOCAL_SIGNUP:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
