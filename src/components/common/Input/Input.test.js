import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Component Input', () => {
  it('should render without crashing', () => {
    const component = shallow(<Input />);
    expect(component).toBeTruthy();
  });
});