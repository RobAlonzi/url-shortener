
import { API, SHORTEN_LOADING, SHORTEN_URL, SHORTEN_URL_ERROR, CREATED_URLS_ADD } from "./index";

// Action dispatch to flag that a URL shorten request is loading
function setShortenLoading(isLoading){
	return {
		type: SHORTEN_LOADING,
		payload: isLoading
	}
}

// Action dispatch to set a URL Shorten error
function setShortenError(message){
	return {
		type: SHORTEN_URL_ERROR,
		payload: message
	}
}

// Action dispatch to set a successful URL shorten.
function setShortenCreatedURL(url){
	return {
		type: SHORTEN_URL,
		payload: url
	}
}

// Action dispatch to add the successful shortened URL into the list of created URLs
function createdURLsAdd(status){
	return {
		type: CREATED_URLS_ADD,
		payload: status
	}
}

// This function calls the backend shortening API
export function shortenURL(url){
	return (dispatch) => {
		// Set page loading to true
		dispatch(setShortenLoading(true));
		// Remove any errors
		dispatch(setShortenError(null));
		// Remove current created URL
		dispatch(setShortenCreatedURL({shortUrl: null}));

		API.post("/api/shorten", {url}).then(response => {
			// Set successful shorten
			dispatch(setShortenCreatedURL(response.data));
			// Add successful shorten to list
			dispatch(createdURLsAdd(response.data));
			// Set loading to false
			dispatch(setShortenLoading(false));
		}).catch(e => {
			// Set error
			dispatch(setShortenError(e.response.data));
			// Set loading to false
			dispatch(setShortenLoading(false));
		})

	}
}

// Clear error 
export function clearPanels(){
	return (dispatch) => {
		dispatch(setShortenError(null));
		dispatch(setShortenCreatedURL({shortUrl: null}));
	}
}