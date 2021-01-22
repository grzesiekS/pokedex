import Axios from 'axios';

/* SELECTORS */
export const getPokemonList = ({pokemons}) => pokemons.pokemonList === undefined 
  ? [] : pokemons.pokemonList
    .filter(pokemon => pokemon.name.includes(pokemons.searchValue || ''));

export const getFetchStatus = ({pokemons}) => pokemons.loading;
export const getPokemonStats = ({pokemons}) => pokemons.pokemonData === undefined 
  ? [] 
  : pokemons.pokemonData.stats;

export const getPokemonArtwork = ({pokemons}) => pokemons.pokemonData === undefined 
  ? null 
  : pokemons.pokemonData.sprites.other['official-artwork'].front_default;

export const getSearchValue = ({pokemons}) => pokemons.searchValue;

/* ACTIONS */

// action name creator
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

// action type
const FETCH_START = createActionName('FETCH_START');
const FETCH_MULTIPLE_SUCCESS = createActionName('FETCH_MULTIPLE_SUCCESS');
const FETCH_SELECTED_SUCESS = createActionName('FETCH_SELECTED_SUCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const HANDLE_SEARCH_VALUE = createActionName('HANDLE_SEARCH_VALUE');

// action creators
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchMultipleSuccess = payload => ({ payload, type: FETCH_MULTIPLE_SUCCESS });
export const fetchSelectedSuccess = payload => ({ payload, type: FETCH_SELECTED_SUCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const handleSearchValue = payload => ({ payload, type: HANDLE_SEARCH_VALUE});

/* thunk creators */

export const catchPokemons = () => {
  return dispatch => {
    dispatch(fetchStarted());

    Axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=1')
      .then(res => {

        Axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=${res.data.count}`)
          .then(res => {
            dispatch(fetchMultipleSuccess(res.data));
          })
          .catch(err => {
            dispatch(fetchError(err.message || false));
          });

      })
      .catch(err => {
        dispatch(fetchError(err.message || false));
      });
    

  };
};

export const catchSelectedPokemon = pokemonName => {
  return dispatch => {
    dispatch(fetchStarted());
    Axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then(res => {
        dispatch(fetchSelectedSuccess(res.data));
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
    case FETCH_MULTIPLE_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        pokemonList: action.payload.results,
      };
    }
    case FETCH_SELECTED_SUCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        pokemonData: action.payload,
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
    case HANDLE_SEARCH_VALUE: {
      return {
        ...statePart,
        searchValue: action.payload.value,
      };
    }
    default:
      return statePart;
  }
}