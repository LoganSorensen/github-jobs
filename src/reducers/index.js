import { combineReducers } from "redux";

import {setSearchResults} from './setSearchResultsReducer'

const rootReducer = combineReducers({
    setSearchResults,
})

export default rootReducer;