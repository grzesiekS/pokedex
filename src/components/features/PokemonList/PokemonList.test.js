import React from 'react';
import { shallow } from 'enzyme';
import PokemonList from './PokemonList';

describe('Component PokemonList', () => {
  it('should render without crashing', () => {
    const component = shallow(<PokemonList />);
    expect(component).toBeTruthy();
  });
});