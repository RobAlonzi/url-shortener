
import { API, CREATED_URLS_LOADING, CREATED_URLS_FETCHED } from "./index";

// Action dispatch to set loading state
function createdURLsLoading(status){
	return {
        type: CREATED_URLS_LOADING,
        payload: status
	}
}

// Action dispatch to set the data of the retrieved created URLs
function createdURLsFetched(urls){
	return {
        type: CREATED_URLS_FETCHED,
        payload: urls
	}
}


export function getURLs(){
	return (dispatch) => {
		// Make a request to the endpoint to get all created URLs
        API.get('/u', null).then(response => {
			// Dispatch the successful request
            dispatch(createdURLsFetched(response.data));
        }).catch(e => {
			// Error out bad request
        })
	}
}