import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app/App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rooReducer from "./store/reducers";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// import registerServiceWorker from "./registerdsddasdsaServiceWorker";

const middlewares = [thunkMiddleware];

/* istanbul ignore if */
if (process.env.NODE_ENV === "development") {
  const loggerMiddleware = createLogger();
  middlewares.push(loggerMiddleware);
}

const store = createStore(
  rooReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
