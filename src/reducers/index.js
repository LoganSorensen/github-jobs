import { combineReducers } from "redux";

import { searchResultsReducer } from "./searchResultsReducer";
import { filtersReducer } from "./filtersReducer";

const rootReducer = combineReducers({
  searchResultsReducer,
  filtersReducer,
});

export default rootReducer;
