import { API, SET_URL_DETAILS } from "./index";

// Action dispatch to set the requested shortened URL Details
function setURLDetails(details){
	return {
		type: SET_URL_DETAILS,
		payload: details
	}
}

export function getURLDetails(id){
	return (dispatch) => {
		// Make a request to the endpoint to get detail data
		API.get(`/u/${id}/details`, null).then(response => {
			// Dispatch the successful event
			dispatch(setURLDetails(response.data));
		}).catch(e => {
			// Set error on bad request
		})
	}
}