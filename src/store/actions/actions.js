import * as authActionConstant from "../../util/AuthConstant";

export const socialSignin = () => {
  return { type: authActionConstant.SOCIAL_SIGNIN };
};

export const signinSuccess = (message) => {
  return { type: authActionConstant.SIGNIN_SUCCESS, data: message };
};
export const signinFail = (message) => {
  return { type: authActionConstant.SIGNIN_FAIL, data: message };
};

export const localSignin = () => {
  return {
    type: authActionConstant.LOCAL_SIGNIN,
    data: { test: "shit", umm: "wow" },
  };
};

export const signupSuccess = (message) => {
  return { type: authActionConstant.SIGNUP_SUCCESS, data: message };
};
export const signupFail = (message) => {
  return { type: authActionConstant.SIGNUP_FAIL, data: message };
};

export const localSignup = () => {
  return { type: authActionConstant.LOCAL_SIGNUP };
};
