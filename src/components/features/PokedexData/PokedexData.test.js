import React from 'react';
import { shallow } from 'enzyme';
import PokedexData from './PokedexData';

describe('Component PokedexData', () => {
  it('should render without crashing', () => {
    const component = shallow(<PokedexData />);
    expect(component).toBeTruthy();
  });
});