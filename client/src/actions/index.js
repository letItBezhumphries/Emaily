import axios from "axios";
import { FETCH_USER, FETCH_USER_FAIL } from "./types";

// export const fetchUser = () => async dispatch => {
//   try {
//     const res = axios.get("/api/current_user");

//     console.log("fetchUser res.data:", res.data);

//     dispatch({ type: FETCH_USER, payload: res.data });
//   } catch (err) {
//     dispatch({ type: FETCH_USER_FAIL, payload: err });
//   }
// };

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  console.log("in fetchUser, res.data:", res.data);

  dispatch({ type: FETCH_USER, payload: res.data });
};
