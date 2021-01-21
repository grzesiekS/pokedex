import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../Pokemon/Pokemon';

import styles from './PokemonList.module.scss';

class PokemonList extends React.Component {

  componentDidMount() {
    const {catchPokemons} = this.props;

    catchPokemons();
  }

  render() {

    const {pokemonList, fetchStatus} = this.props;

    return (
      <section className={styles.pokemonList}>
        <div className='container'>
          <div className='row justify-content-center'>
            {fetchStatus === undefined || fetchStatus.active
              ?
              <p>Loading</p>
              :
              pokemonList.map(pokemon => (
                <Pokemon key={pokemon.name} name={pokemon.name} />
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

PokemonList.propTypes = {
  catchPokemons: PropTypes.func,
  pokemonList: PropTypes.array,
  fetchStatus: PropTypes.object,
};

PokemonList.defaultProps = {
  catchPokemons: () => {},
};

export default PokemonList;