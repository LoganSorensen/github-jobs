import { SET_SEARCH_RESULTS, CHANGE_PAGE } from "../actions/types";

const initialState = {};

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      let firstNumber = 0;
      const pageJobs = [];

      if (action.fullTime === true) {
        // creates an array from the API response that contains only full time jobs
        const jobs = action.payload.filter((job) => job.type === "Full Time");

        let numberOfPages = Math.ceil(jobs.length / 5);

        // pushes an array of 5 (or less) jobs into the "pageJobs" array
        // each set of 5 jobs wil be rendered on a separate page
        for (let i = 0; i < numberOfPages; i++) {
          pageJobs.push(jobs.slice(firstNumber, firstNumber + 5));
          firstNumber += 5;
        }

        return {
          ...state,
          jobs: pageJobs,
          currentPage: 1,
          totalPages: Math.ceil(jobs.length / 5),
        };
      } else {
        let numberOfPages = Math.ceil(action.payload.length / 5);

        for (let i = 0; i < numberOfPages; i++) {
          pageJobs.push(action.payload.slice(firstNumber, firstNumber + 5));
          firstNumber += 5;
        }

        return {
          ...state,
          jobs: pageJobs,
          currentPage: 1,
          totalPages: numberOfPages,
        };
      }
    case CHANGE_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
