import React from 'react';
import { shallow } from 'enzyme';
import TabList from '../client/src/components/TabList';
import BuyNowTab from '../client/src/components/BuyNowTab';
import CheckStoreTab from '../client/src/components/CheckStoreTab';

describe('TabList', () => {
  test('should display the Buy Now tab when you click the button', () => {
    const wrapper = shallow(<TabList />);
    wrapper.find('.CheckStore').simulate('click');
    wrapper.find('.BuyNow').simulate('click');
    expect(wrapper.find(BuyNowTab).length).toBe(1);
    expect(wrapper.find(CheckStoreTab).length).toBe(0);
  });

  test('should display the Check Store tab when you click the button', () => {
    const wrapper = shallow(<TabList />);
    wrapper.find('.CheckStore').simulate('click');
    expect(wrapper.find(BuyNowTab).length).toBe(0);
    expect(wrapper.find(CheckStoreTab).length).toBe(1);
  });
});
