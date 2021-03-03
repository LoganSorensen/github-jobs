import { SET_FILTERS } from "./types";

export const setFilters = (filters) => {
  return { type: SET_FILTERS, payload: filters };
};
