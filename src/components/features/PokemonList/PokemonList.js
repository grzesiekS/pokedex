import React from 'react';
import PropTypes from 'prop-types';

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
          <div className='row'>
            {fetchStatus === undefined || fetchStatus.active
              ?
              <p>Loading</p>
              :
              pokemonList.map(pokemon => (
                <div key={pokemon.name} className='col-sm-12 col-md-6 col-lg-3'>
                  <p>{pokemon.name}</p>
                </div>
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