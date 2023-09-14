import {
  FETCH_SEARCH_ID_REQUEST,
  FETCH_SEARCH_ID_SUCCESS,
  FETCH_SEARCH_ID_FAILURE,
  FETCH_TICKETS_REQUEST,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  SET_STOP_FETCHING,
} from '../Action/ticket-actions';

const initialState = {
  searchId: null,
  tickets: [],
  loadingSearchId: false,
  loadingTickets: false,
  error: null,
  stop: false,
};

export const ticketAPIReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_ID_REQUEST:
      return { ...state, loadingSearchId: true, error: null };
    case FETCH_SEARCH_ID_SUCCESS:
      return { ...state, loadingSearchId: false, searchId: action.payload, error: null };
    case FETCH_SEARCH_ID_FAILURE:
      return { ...state, loadingSearchId: false, error: action.payload };
    case FETCH_TICKETS_REQUEST:
      return { ...state, loadingTickets: true, error: null };
    case FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        loadingTickets: false,
        tickets: [...state.tickets, ...action.payload],
        error: null,
      };
    case FETCH_TICKETS_FAILURE:
      return { ...state, loadingTickets: false, error: action.payload };
    case SET_STOP_FETCHING:
      return { ...state, stop: true };

    default:
      return state;
  }
};

// получение гостевой сессии
const getSessionID = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_SEARCH_ID_REQUEST });

    fetch('https://aviasales-test-api.kata.academy/search')
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        const searchId = data.searchId;
        dispatch({ type: FETCH_SEARCH_ID_SUCCESS, payload: searchId });
        dispatch(fetchTickets(searchId));
      })
      .catch((error) => {
        dispatch({ type: FETCH_SEARCH_ID_FAILURE, payload: error.message });
      });
  };
};

// получение билетов с сервера
export const fetchTickets = (searchId) => {
  return (dispatch) => {
    dispatch({ type: FETCH_TICKETS_REQUEST });

    const fetchMoreTickets = () => {
      fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`) // запрос на сервер
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json(); // если сеть стабильна - пришёл объект с билетами
        })
        .then((data) => {
          const tickets = data.tickets; // разложил билеты...распаковал массив
          dispatch({ type: FETCH_TICKETS_SUCCESS, payload: tickets }); // отправил в store...reducer

          if (data.stop) {
            dispatch({ type: SET_STOP_FETCHING, payload: data.stop });
          } else fetchMoreTickets();
        })
        .catch((error) => {
          if (error.message >= 500 && error.message < 600) {
            fetchMoreTickets();
          } else {
            dispatch({ type: FETCH_TICKETS_FAILURE, payload: error.message });
          }
        });
    };

    fetchMoreTickets();
  };
};

export default getSessionID;
