import { SET_SEARCH_RESULTS, CHANGE_PAGE, START_SEARCH } from "./types";

export const startSearch = () => {
  return {type: START_SEARCH}
}

export const setSearchResults = (results, fullTime) => {
  return { type: SET_SEARCH_RESULTS, payload: results, fullTime: fullTime };
};

export const changePage = (pageNumber) => {
  return { type: CHANGE_PAGE, payload: pageNumber };
};
