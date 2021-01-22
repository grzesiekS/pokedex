import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

describe('Component Pokemon', () => {
  it('should render without crashing', () => {
    const component = shallow(<Pokemon />);
    expect(component).toBeTruthy();
  });
});