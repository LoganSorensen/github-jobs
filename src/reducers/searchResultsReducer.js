import { SET_SEARCH_RESULTS, CHANGE_PAGE } from "../actions/types";

const initialState = {};

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      // console.log("reducer", Math.ceil(action.payload.length / 5));
      // console.clear();
      // console.log(action.payload)
      if (action.fullTime === true) {
        const jobs = action.payload.filter((job) => job.type === "Full Time");
        return {
          ...state,
          jobs: jobs,
          currentPage: 1,
          totalPages: Math.ceil(jobs.length / 5),
        };
      } else {
        return {
          ...state,
          jobs: action.payload,
          currentPage: 1,
          totalPages: Math.ceil(action.payload.length / 5),
        };
      }
      case CHANGE_PAGE:
        // console.log('reducer', action.payload)
        return {
          ...state, currentPage: action.payload
        }
    default:
      return state;
  }
};
