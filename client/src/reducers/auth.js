import { FETCH_USER } from "../actions/types";

// const initialState = {
//   user: null,
//   loading: true,
//   error: null
// };

export default function(state = null, action) {
  console.log("action:", action);
  const { type, payload } = action;
  switch (type) {
    case FETCH_USER:
      return payload || false;
    default:
      return state;
  }
}
