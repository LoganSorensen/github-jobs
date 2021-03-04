import { SET_SEARCH_RESULTS } from "../actions/types";

const initialState = {};

export const setSearchResults = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      if (action.fullTime === true) {
        const jobs = action.payload.filter((job) => job.type === "Full Time");
        return { ...state, jobs: jobs };
      } else {
        return { ...state, jobs: action.payload };
      }
    default:
      return state;
  }
};
