import { combineReducers } from "redux";
import auth from "./auth";
import surveys from "./surveys";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth,
  surveys,
  form: reduxForm
});
