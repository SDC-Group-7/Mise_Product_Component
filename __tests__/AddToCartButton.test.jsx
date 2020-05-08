import React from 'react';
import { mount } from 'enzyme';
import AddToCartButton from '../client/src/components/AddToCartButton';
import BuyNowTab from '../client/src/components/BuyNowTab';
import QuantityToggler from '../client/src/components/QuantityToggler';

describe('AddToCartButton', () => {
  test('should remove components except add to cart button when cart limit is reached', () => {
    const fakeBoolean = true;
    const wrapper = mount(<BuyNowTab productLimit={1} productAvailabilityOnline={fakeBoolean} />);

    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    expect(wrapper.contains('Limit 1')).toBe(false);
    expect(wrapper.find(QuantityToggler).length).toBe(0);
    expect(wrapper.find(AddToCartButton).length).toBe(1);
  });

  test('should show components if cart limit is not reached', () => {
    const fakeBoolean = true;
    const wrapper = mount(<BuyNowTab productLimit={5} productAvailabilityOnline={fakeBoolean} />);

    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    expect(wrapper.contains('Limit 5')).toBe(true);
    expect(wrapper.find(QuantityToggler).length).toBe(1);
    expect(wrapper.find(AddToCartButton).length).toBe(1);
  });

  test('should render the limit exceeded button when limit is reached', () => {
    const fakeBoolean = true;
    const wrapper = mount(<BuyNowTab productLimit={1} productAvailabilityOnline={fakeBoolean} />);

    wrapper.find('[data-test="addToCart"]').first().simulate('click');
    expect(wrapper.findWhere(() => wrapper.contains('Add to Bag')).length).toBe(0);
    expect(wrapper.findWhere(() => wrapper.contains('Limit exceeded')).length).toBeTruthy();
  });
});
