import React from 'react';
import { shallow } from 'enzyme';
import ProductOverview from '../client/src/components/ProductOverview';
import axios from 'axios';
import

jest.mock('axios')

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper).toExist();
  });
});

describe('Data fetcher', () => {
  test('should fetch data from database', async () => {

    expect(
  })
});