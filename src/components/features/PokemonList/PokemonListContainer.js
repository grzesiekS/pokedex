import { connect } from 'react-redux';
import PokemonList from './PokemonList';

import { catchPokemons, getPokemonList, getFetchStatus } from '../../../redux/pokemonsRedux';

const mapStateToProps = state => ({
  pokemonList: getPokemonList(state),
  fetchStatus: getFetchStatus(state),
});

const mapDispatchToProps = dispatch => ({
  catchPokemons: () => dispatch(catchPokemons()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);