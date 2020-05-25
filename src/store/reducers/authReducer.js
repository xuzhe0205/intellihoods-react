import * as actionTypes from "../../util/AuthConstant";

const initialState = {
  authenticated: false,
  currentUser: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOCAL_SIGNIN:
      return Object.assign({}, state, {
        authenticated: true,
        currentUser: action.currentUser,
        test: "damn!",
      });
    case actionTypes.LOCAL_SIGNUP:
      return Object.assign({}, state, {
        authenticated: true,
        currentUser: action.currentUser,
      });
    case actionTypes.SIGNUP_SUCCESS:
      return Object.assign({}, state, {
        success: action.data,
      });
    default:
      return state;
  }
};

export default reducer;
