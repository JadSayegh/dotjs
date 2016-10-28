import {FETCH_LEADS_REQUEST, FETCH_LEADS_SUCCESS ,FETCH_LEADS_FAILURE} from './LeadListingActions'


const leadListing = (state = {
	isFetching : false,
	leads : []
}, action) => {
  switch (action.type) {
    case 'FETCH_LEADS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true
      })

    case 'FETCH_LEADS_SUCCESS':
      return Object.assign({}, state, {
        leads: action.leads
      })

	case 'FETCH_LEADS_FAILURE':
      console.log("Lead retrieval failed!");
      return state

    default:
      return state
  }
}

export default leadListing