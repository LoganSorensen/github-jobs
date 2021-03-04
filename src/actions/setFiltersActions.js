import { SET_FILTERS, TOGGLE_FULL_TIME } from "./types";

export const setFilters = (filters) => {
  return { type: SET_FILTERS, payload: filters };
};

export const toggleFullTime = () => {
  return { type: TOGGLE_FULL_TIME };
};
