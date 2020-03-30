import { combineReducers } from "redux";
import auth from "./auth";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth,
  form: reduxForm
});
