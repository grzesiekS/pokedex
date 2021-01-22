import React from 'react';
import PropTypes from 'prop-types';

import PokedexData from '../features/PokedexData/PokedexDataContainer';

const PokedexPage = props => (
  <PokedexData pokemonName={props.match.params.pokemonName} />
);

PokedexPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      pokemonName: PropTypes.string,
    }),
  }),
};

export default PokedexPage;