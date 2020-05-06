import React from 'react';
import { shallow } from 'enzyme';
import ProductOverview, { getProduct } from '../client/src/components/ProductOverview';
import axios from 'axios';

jest.mock('axios');

describe('Unit Tests', () => {
  test('should render the app component on the screen', () => {
    const wrapper = shallow(<ProductOverview />);
    expect(wrapper).toExist();
  });
});

describe('Data fetcher', () => {
  test('should fetch data from database', async () => {
    const data = { data: [{ chokingHazard: true }] };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getProduct(1)).resolves.toEqual(data);
  });
});
