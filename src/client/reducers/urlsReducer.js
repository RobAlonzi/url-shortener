import { CREATED_URLS_LOADING, CREATED_URLS_FETCHED, CREATED_URLS_ADD } from '../actions';

// Default state for the shorten reducer
const defaultState = {
  isLoading : false,
  error: null,
  urls: []
}

// Setting the state appropriately 
export default function(state = defaultState, action){
  switch (action.type) {
    // We are in the process of fetching some data
    case CREATED_URLS_LOADING:
      return { ...state, isLoading: action.payload };
    // We are in the process of fetching some data
    case CREATED_URLS_FETCHED:
	  return { ...state, urls: action.payload };
	case CREATED_URLS_ADD:
		return { ...state, urls: [action.payload, ...state.urls] }  
    default:
      return state;
  }
};