import { connect } from 'react-redux';
import PokedexData from './PokedexData';

import { 
  catchSelectedPokemon,
  getPokemonStats,
  getPokemonArtwork,
  getFetchStatus,
} from '../../../redux/pokemonsRedux';

const mapStateToProps = state => ({
  pokemonStats: getPokemonStats(state),
  pokemonArtwork: getPokemonArtwork(state),
  fetchStatus: getFetchStatus(state),
});

const mapDispatchToProps = dispatch => ({
  catchSelectedPokemon: pokemonName => dispatch(catchSelectedPokemon(pokemonName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PokedexData);