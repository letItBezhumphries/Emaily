import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import reducers from "./reducers/index";
//this was to enable the ability to make post request within the google chrome console with the axios library
//because of the difficulty oauth flow doesn't allow for the post request with postman
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log(
  "process.env.REACT_APP_STRIPE_KEY :",
  process.env.REACT_APP_STRIPE_KEY
);
console.log("process.env.NODE_ENV :", process.env.NODE_ENV);
