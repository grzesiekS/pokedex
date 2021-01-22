import React from 'react';
import PropTypes from 'prop-types';

const PokedexPage = props => (
  <h1>{props.match.params.pokemonName}</h1>
);

PokedexPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemonName: PropTypes.string,
    }),
  }),
};

export default PokedexPage;