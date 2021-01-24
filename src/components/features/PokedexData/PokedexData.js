import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Loading from '../../common/Loading/Loading';

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
            <Loading />
            :
            <div className={clsx(styles.pokdex,'row justify-content-around')}>
              <div className='col-md-12 col-lg-6'>
                <img className={styles.pokemonImage} src={pokemonArtwork} alt={pokemonName} />
              </div>
              <div className='col-md-8 col-lg-6 align-self-center'>
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