import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Component Loading', () => {
  it('should render without crashing', () => {
    const component = shallow(<Loading />);
    expect(component).toBeTruthy();
  });
});