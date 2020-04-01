import { FETCH_SURVEYS } from "../actions/types";

export default function(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case FETCH_SURVEYS:
      return payload;
    default:
      return state;
  }
}
