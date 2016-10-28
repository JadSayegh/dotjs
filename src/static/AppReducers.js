import { combineReducers } from 'redux'
import leadListing from './LeadListing/LeadListingReducers'
import activityListing from './ActivityListing/ActivityListingReducers'

const appReducers = combineReducers({
  leadListing,
  activityListing
})

export default appReducers