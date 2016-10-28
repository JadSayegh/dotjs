export const FETCH_LEADS_REQUEST = 'FETCH_LEADS_REQUEST'
export const FETCH_LEADS_SUCCESS = 'FETCH_LEADS_SUCCESS'
export const FETCH_LEADS_FAILURE = 'FETCH_LEADS_FAILURE'


export function fetchLeadsRequest(){
  return {
    type: FETCH_LEADS_REQUEST,
  }
}

export function fetchLeadsSuccess(leads){
  return {
    type: FETCH_LEADS_SUCCESS,
    leads

  }
}

export function fetchLeadsFailure(){
  return {
    type: FETCH_LEADS_FAILURE,
  }
}