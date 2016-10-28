import { connect } from 'react-redux'
import LeadList from './leadList'
import {fetchLeadsRequest, fetchLeadsSuccess ,fetchLeadsFailure} from './LeadListingActions'


const mapStateToProps = (state) => {
  return {
    leads: state.leadListing.leads
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeadsRequest: () => {
      dispatch(fetchLeadsRequest())
    },
        fetchLeadsSuccess: (leads) => {
      dispatch(fetchLeadsSuccess(leads))
    },
        fetchLeadsFailure: () => {
      dispatch(fetchLeadsFailure())
    }
  }
}

const LeadListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeadList)

export default LeadListContainer