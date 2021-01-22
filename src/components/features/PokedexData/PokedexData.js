import React from 'react';
import PropTypes from 'prop-types';

import styles from './PokedexData.module.scss';

class PokedexData extends React.Component {
  render() {

    const { pokemonName } = this.props;

    return (
      <section className={styles.pokedexData}>
        <div className='container'>
          <h1 className={styles.title}>{pokemonName}</h1>
        </div>
      </section>
    );
  }
}

PokedexData.propTypes = {
  pokemonName: PropTypes.string,
};

export default PokedexData;