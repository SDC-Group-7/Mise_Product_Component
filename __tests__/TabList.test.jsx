import React from 'react';
import { shallow, mount } from 'enzyme';
import TabList from '../client/src/components/TabList';
import BuyNowTab from '../client/src/components/BuyNowTab';
import CheckStoreTab from '../client/src/components/CheckStoreTab';
import StoreSearchForm from '../client/src/components/StoreSearchForm';

describe('TabList', () => {
  test('should display the Buy Now tab when you click the button', () => {
    const wrapper = shallow(<TabList />);
    wrapper.find('.CheckStore').simulate('click');
    wrapper.find('.BuyNow').simulate('click');
    expect(wrapper.find(CheckStoreTab).exists()).toBe(false);
    expect(wrapper.find(BuyNowTab).exists()).toBe(true);
  });

  test('should display the Check Store tab when you click the button', () => {
    const wrapper = shallow(<TabList />);
    wrapper.find('.CheckStore').simulate('click');
    expect(wrapper.find(CheckStoreTab).exists()).toBe(true);
    expect(wrapper.find(BuyNowTab).exists()).toBe(false);
  });

  test('Buy Now tab should maintain cart data between tab switches', () => {
    const wrapper = mount(<TabList productLimit={5} />);
    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    expect(wrapper.find('[data-cartquantity=1]').length).toEqual(1);
    wrapper.find('.CheckStore').first().simulate('click');
    wrapper.find('.BuyNow').first().simulate('click');
    expect(wrapper.find('[data-cartquantity=1]').length).toEqual(1);
  });

  test('Check Store tab should stay in searched state between tab switches', async () => {
    // FAILING INTEGRATION TEST. Unable to figure out how to simulate the experience
    const wrapper = mount(<TabList productId={6} />);

    wrapper.find('.CheckStore').first().simulate('click');
    wrapper.update();
    expect(wrapper.find(CheckStoreTab).exists()).toBe(true);
    expect(wrapper.find(BuyNowTab).exists()).toBe(false);
    wrapper.find('[data-test="queryChange"]').first().instance().value = 94117;
    wrapper.update();
    wrapper.find('[data-test="queryClick"]').first().simulate('click');
    wrapper.setState({ hasSearched: true });
    wrapper.update();
    expect(wrapper.find(StoreSearchForm)).toExist();
  });
});
