import React from 'react';
import { shallow } from 'enzyme';
import ProductOverview from '../client/src/components/ProductOverview.jsx';

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper).toExist();
  });
});
