import React from 'react';

import styles from './PokemonList.module.scss';

class PokemonList extends React.Component {
  render() {
    return (
      <section className={styles.pokemonList}>
        <div className='container'>
          <div className='row justify-content-around'>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <p>Pokemon Name 1</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <p>Pokemon Name 2</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <p>Pokemon Name 3</p>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-3'>
              <p>Pokemon Name 4</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PokemonList;