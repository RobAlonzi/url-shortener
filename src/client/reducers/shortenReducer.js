import { SHORTEN_LOADING, SHORTEN_URL, SHORTEN_URL_ERROR, CREATED_URLS_FETCHED } from '../actions';

// Default state for the shorten reducer
const defaultState = {
  isLoading : false,
  createdURL: null,
  error: null,
  urls: []
}

// Setting the state appropriately 
export default function(state = defaultState, action){
  switch (action.type) {
    // We are in the process of fetching some data
    case SHORTEN_LOADING:
      return { ...state, isLoading: action.payload };
    // We are in the process of fetching some data
    case SHORTEN_URL_ERROR:
      return { ...state, error: action.payload };
    // A new URL has been created
	  case SHORTEN_URL:
      return { ...state, createdURL: action.payload.shortUrl};
    default:
      return state;
  }
};