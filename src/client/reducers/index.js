import { combineReducers } from 'redux';

import shortenReducer from "./shortenReducer";
import urlsReducer from "./urlsReducer";
import detailsReducer from "./detailsReducer";

// Combining the reducers into one object
const rootReducer = combineReducers({
	  shorten: shortenReducer,
	  urls: urlsReducer,
	  details: detailsReducer
});

export default rootReducer;
