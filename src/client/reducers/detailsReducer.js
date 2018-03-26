import { SET_URL_DETAILS } from '../actions';

// Default state for the details reducer
const defaultState = {
  isLoading : false,
  urlDetails: {}
}

// Setting the state appropriately 
export default function(state = defaultState, action){
  switch (action.type) {
    // URL Details have been fetched
    case SET_URL_DETAILS:
	    return { ...state, urlDetails: action.payload };
    default:
      return state;
  }
};