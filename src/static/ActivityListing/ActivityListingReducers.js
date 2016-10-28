import {FETCH_ACTIVITIES_REQUEST, FETCH_ACTIVITIES_SUCCESS ,FETCH_ACTIVITIES_FAILURE} from './ActivityListingActions'


const activityListing = (state = {
	isFetching : false,
	activities : []
}, action) => {
  switch (action.type) {
    case 'FETCH_ACTIVITIES_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'FETCH_ACTIVITIES_SUCCESS':
            console.log("Activity retrieval success!");

      return Object.assign({}, state, {
        activities: action.activities
      })

	case 'FETCH_ACTIVITIES_FAILURE':
      console.log("Activity retrieval failed!");
      return state

    default:
      return state
  }
}

export default activityListing