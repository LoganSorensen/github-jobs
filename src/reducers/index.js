import { combineReducers } from "redux";

import { setSearchResults } from "./setSearchResultsReducer";
import { setFilters } from "./setFiltersReducer";

const rootReducer = combineReducers({
  setSearchResults,
  setFilters,
});

export default rootReducer;
