// экшены по работе с API
export const FETCH_SEARCH_ID_REQUEST = 'FETCH_SEARCH_ID_REQUEST';
export const FETCH_SEARCH_ID_SUCCESS = 'FETCH_SEARCH_ID_SUCCESS';
export const FETCH_SEARCH_ID_FAILURE = 'FETCH_SEARCH_ID_FAILURE';

export const FETCH_TICKETS_REQUEST = 'FETCH_TICKETS_REQUEST';
export const FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS';
export const FETCH_TICKETS_FAILURE = 'FETCH_TICKETS_FAILURE';
export const SET_STOP_FETCHING = 'SET_STOP_FETCHING';

export const fetchSearchIDRequest = () => ({
  type: FETCH_SEARCH_ID_REQUEST,
});

export const fetchSearchIDSuccess = (success) => ({
  type: FETCH_SEARCH_ID_SUCCESS,
  payload: success,
});

export const fetchSearchIDFailure = (failure) => ({
  type: FETCH_TICKETS_FAILURE,
  payload: failure,
});

export const fetchTicketsRequest = () => ({
  type: FETCH_TICKETS_REQUEST,
});

export const fetchTicketsSuccess = (success) => ({
  type: FETCH_TICKETS_REQUEST,
  payload: success,
});

export const fetchTicketsFailure = (failure) => ({
  type: FETCH_SEARCH_ID_FAILURE,
  payload: failure,
});

export const setStopFetching = (stoped) => ({
  type: SET_STOP_FETCHING,
  payload: stoped,
});
