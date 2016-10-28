import { connect } from 'react-redux'
import ActivityList from './activityList'
import {fetchActivitiesRequest, fetchActivitiesSuccess ,fetchActivitiesFailure} from './ActivityListingActions'


const mapStateToProps = (state) => {
  return {
    activities: state.activityListing.activities
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchActivitiesRequest: () => {
      dispatch(fetchActivitiesRequest())
    },
        fetchActivitiesSuccess: (activities) => {
      dispatch(fetchActivitiesSuccess(activities))
    },
        fetchActivitiesFailure: () => {
      dispatch(fetchActivitiesFailure())
    }
  }
}

const ActivityListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityList)

export default ActivityListContainer