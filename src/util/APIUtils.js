import { API_BASE_URL, ACCESS_TOKEN } from "./APIConstant";
import axios from "axios";

const request = (options) => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
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

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    url: API_BASE_URL + "/user/me",
    method: "GET",
  });
}

export function login(loginRequest) {
  const request = axios.post(
    API_BASE_URL + "/auth/login",
    JSON.stringify(loginRequest),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return request;
}

export function signup(signupRequest) {
  const request = axios.post(
    API_BASE_URL + "/auth/signup",
    JSON.stringify(signupRequest),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return request;
}
