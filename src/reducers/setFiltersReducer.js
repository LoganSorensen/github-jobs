import { SET_FILTERS, TOGGLE_FULL_TIME } from "../actions/types";

const initialState = { location: null, fullTime: false };

export const setFilters = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return { ...state, location: action.payload };
    case TOGGLE_FULL_TIME:
      return {...state, fullTime: !state.fullTime}
    default:
      return state;
  }
};
