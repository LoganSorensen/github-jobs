import { SET_SEARCH_RESULTS } from "./types";

export const setSearchResults = (results, fullTime) => {
  return { type: SET_SEARCH_RESULTS, payload: results, fullTime: fullTime };
};
