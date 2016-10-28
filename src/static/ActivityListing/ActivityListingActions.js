export const FETCH_ACTIVITIES_REQUEST = 'FETCH_ACTIVITIES_REQUEST'
export const FETCH_ACTIVITIES_SUCCESS = 'FETCH_ACTIVITIES_SUCCESS'
export const FETCH_ACTIVITIES_FAILURE = 'FETCH_ACTIVITIES_FAILURE'


export function fetchActivitiesRequest(){
  return {
    type: FETCH_ACTIVITIES_REQUEST,
  }
}

export function fetchActivitiesSuccess(activities){
  return {
    type: FETCH_ACTIVITIES_SUCCESS,
    activities

  }
}

export function fetchActivitiesFailure(){
  return {
    type: FETCH_ACTIVITIES_FAILURE,
  }
}