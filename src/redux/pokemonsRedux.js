import Axios from 'axios';

/* SELECTORS */

/* ACTIONS */

// action name creator
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

// action type
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSucess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const catchPokemons = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        console.log(res);
        dispatch(fetchSucess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });

  };
};

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}