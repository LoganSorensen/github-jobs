import { SET_FILTERS } from "../actions/types";

const initialState = { location: null };

export const setFilters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};
