import { connect } from 'react-redux';
import PokemonList from './PokemonList';

import { 
  catchPokemons,
  getPokemonList,
  getFetchStatus,
  handleSearchValue,
  getSearchValue,
} from '../../../redux/pokemonsRedux';

const mapStateToProps = state => ({
  pokemonList: getPokemonList(state),
  fetchStatus: getFetchStatus(state),
  searchValue: getSearchValue(state),
});

const mapDispatchToProps = dispatch => ({
  catchPokemons: () => dispatch(catchPokemons()),
  handleSearchValue: value => dispatch(handleSearchValue({value})),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);