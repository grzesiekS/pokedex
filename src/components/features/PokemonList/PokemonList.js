import React from 'react';
import PropTypes from 'prop-types';

import Pokemon from '../Pokemon/Pokemon';
import Loading from '../../common/Loading/Loading';
import Input from '../../common/Input/Input';

import styles from './PokemonList.module.scss';

class PokemonList extends React.Component {

  componentDidMount() {
    const {catchPokemons} = this.props;

    catchPokemons();
  }

  render() {

    const {pokemonList, fetchStatus, handleSearchValue, searchValue} = this.props;

    return (
      <section className={styles.pokemonList}>
        <div className='container'>
          <Input 
            name='search'
            type='text'
            value={searchValue}
            handleValue={value => handleSearchValue(value)}
          />
          <div className='row justify-content-center'>
            {fetchStatus === undefined || fetchStatus.active
              ?
              <Loading />
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
  handleSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
};

PokemonList.defaultProps = {
  catchPokemons: () => {},
};

export default PokemonList;