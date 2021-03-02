import { SET_SEARCH_RESULTS } from "../actions/types";

const initialState = {};

export const setSearchResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      console.log(action.payload);
      return { jobs: action.payload };
    default:
      return state;
  }
};
