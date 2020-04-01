import axios from "axios";
import {
  FETCH_USER,
  FETCH_USER_FAIL,
  SUBMIT_SURVEY_SUCCESS,
  SUBMIT_SURVEY_FAIL,
  FETCH_SURVEYS
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  console.log("in fetchUser, res.data:", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};
