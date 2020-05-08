import React from 'react';
import { shallow, mount } from 'enzyme';
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

  test('Buy Now tab should maintain cart data between tab switches', () => {
    const wrapper = mount(<TabList productLimit={5} />);
    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    expect(wrapper.find('[data-cartquantity=1]').length).toEqual(1);
    wrapper.find('.CheckStore').first().simulate('click');
    wrapper.find('.BuyNow').first().simulate('click');
    expect(wrapper.find('[data-cartquantity=1]').length).toEqual(1);
  });
});
