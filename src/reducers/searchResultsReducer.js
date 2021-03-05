import { SET_SEARCH_RESULTS, CHANGE_PAGE } from "../actions/types";

const initialState = {};

export const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      let firstNumber = 0;
      const pageJobs = [];

      if (action.fullTime === true) {
        const jobs = action.payload.filter((job) => job.type === "Full Time");

        let numberOfPages = Math.ceil(jobs.length / 5);

        for (let i = 0; i < numberOfPages; i++) {
          if (i === numberOfPages - 1) {
            pageJobs.push(jobs.slice(firstNumber, jobs.length));
          } else {
            pageJobs.push(jobs.slice(firstNumber, firstNumber + 5));
            firstNumber += 5;
          }
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
          if (i === numberOfPages - 1) {
            pageJobs.push(
              action.payload.slice(firstNumber, action.payload.length)
            );
          } else {
            pageJobs.push(action.payload.slice(firstNumber, firstNumber + 5));
            firstNumber += 5;
          }
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
