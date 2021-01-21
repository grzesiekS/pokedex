import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import styles from './Pokemon.module.scss';

const Pokemon = ({name}) => (
  <Link to={`/pokemons/${name}`} className={clsx(styles.pokemonLink, 'col-sm-12 col-md-5 col-lg-3')}>
    <p className={styles.pokemonName}>{name}</p>
  </Link>
);

Pokemon.propTypes = {
  name: PropTypes.string,
};

export default Pokemon;