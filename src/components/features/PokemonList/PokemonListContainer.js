import { connect } from 'react-redux';
import PokemonList from './PokemonList';

import { catchPokemons } from '../../../redux/pokemonsRedux';

const mapDispatchToProps = dispatch => ({
  catchPokemons: () => dispatch(catchPokemons()),
});

export default connect(null, mapDispatchToProps)(PokemonList);