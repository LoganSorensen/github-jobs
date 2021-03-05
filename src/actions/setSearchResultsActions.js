import { SET_SEARCH_RESULTS, CHANGE_PAGE } from "./types";

export const setSearchResults = (results, fullTime) => {
  return { type: SET_SEARCH_RESULTS, payload: results, fullTime: fullTime };
};

export const changePage = (pageNumber) => {
  console.log('action', pageNumber)
  return { type: CHANGE_PAGE, payload: pageNumber };
};
