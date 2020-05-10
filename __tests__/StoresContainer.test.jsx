import React from 'react';
import { shallow } from 'enzyme';
import StoresContainer from '../client/src/components/StoresContainer';
import StoreInfo from '../client/src/components/StoreInfo';

describe('Stores Container', () => {
  test('it should render a store', () => {
    const stores = [{
      storeName: 'LEGO Store University Town Center',
      storeAddress: '4545 La Jolla Village Dr University Town Center Space H23, San Diego, CA 92122',
      productAvailability: true,
    }];

    const wrapper = shallow(<StoresContainer stores={stores} />);

    expect(wrapper.find(StoreInfo).exists()).toBe(true);
  });

  test('it should display a message if there are no stores', () => {
    const stores = [];

    const wrapper = shallow(<StoresContainer stores={stores} />);

    expect(wrapper.find('[data-test="noStore"]').exists()).toBe(true);
  });
});
