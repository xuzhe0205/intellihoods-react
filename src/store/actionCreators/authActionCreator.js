import * as auth from "../actions/actions";
import * as authAPIConstant from "../../util/APIConstant";
import axios from "axios";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(authAPIConstant.ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(authAPIConstant.ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then((response) =>
    response.json().then((json) => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export const signin = (signinRequest) => {
  return (dispatch) => {
    dispatch(auth.localSignin());
    axios
      .post(
        authAPIConstant.API_BASE_URL + "/auth/login",
        JSON.stringify(signinRequest),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        localStorage.setItem(
          authAPIConstant.ACCESS_TOKEN,
          response.data.accessToken
        );
        alert("You're successfully logged in!");
        dispatch(auth.signinSuccess(response.message));
      })
      .catch((error) => {
        dispatch(auth.signinFail(error));
        alert(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  };
};

export const signup = (signupRequest) => {
  return (dispatch) => {
    dispatch(auth.localSignup());
    axios
      .post(
        authAPIConstant.API_BASE_URL + "/auth/signup",
        JSON.stringify(signupRequest),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("check authactioncreator");
        console.log(response);
        localStorage.setItem(
          authAPIConstant.ACCESS_TOKEN,
          response.data.data.accessToken
        );
        dispatch(auth.signupSuccess(response.data.success));
        alert("You're successfully registered. Please login to continue!");
      })
      .catch((error) => {
        dispatch(auth.signupFail(error));
        alert(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  };
};
