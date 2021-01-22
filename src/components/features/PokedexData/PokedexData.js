import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './PokedexData.module.scss';

class PokedexData extends React.Component {

  componentDidMount() {
    const { catchSelectedPokemon, pokemonName } = this.props;

    catchSelectedPokemon(pokemonName);
  }

  render() {

    const { pokemonName, pokemonStats, pokemonArtwork, fetchStatus } = this.props;

    return (
      <section className={styles.pokedexData}>
        <div className='container'>
          <h1 className={styles.title}>{pokemonName}</h1>
          {fetchStatus === undefined || fetchStatus.active
            ?
            <p>Loading</p>
            :
            <div className={clsx(styles.pokdex,'row justify-content-around')}>
              <div className='col-md-auto'>
                <img className={styles.pokemonImage} src={pokemonArtwork} alt={pokemonName} />
              </div>
              <div className='col-md-auto align-self-center'>
                <ul className='list-group'>
                  {pokemonStats.map(stats => (
                    <li key={stats.stat.name} className='list-group-item'>{`${stats.stat.name}: ${stats.base_stat}`}</li>
                  ))}
                </ul>
              </div>
            </div>
          }
        </div>
      </section>
    );
  }
}

PokedexData.propTypes = {
  pokemonName: PropTypes.string,
  catchSelectedPokemon: PropTypes.func,
  pokemonStats: PropTypes.array,
  pokemonArtwork: PropTypes.string,
  fetchStatus: PropTypes.object,
};

PokedexData.defaultProps = {
  catchSelectedPokemon: () => {},
};

export default PokedexData;