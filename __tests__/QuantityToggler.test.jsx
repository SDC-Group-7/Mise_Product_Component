import React from 'react';
import { shallow, mount } from 'enzyme';
import QuantityToggler from '../client/src/components/QuantityToggler';
import BuyNowTab from '../client/src/components/BuyNowTab';

describe('Quantity Toggler', () => {
  describe('Input quantity', () => {
    let wrapper;
    beforeEach(() => {
      const fakePropValue = true;
      wrapper = mount(
        <BuyNowTab
          productAvailabilityOnline={fakePropValue}
          productLimit={7}
        />,
      );
    });
    test('should change input quantity when value is inputted', () => {
      wrapper.find('[data-test="input"]').first().simulate('change', { target: { value: 5 } });
      expect(wrapper.find('[value=5]').length).toBeTruthy();
      expect(wrapper.find('[value=3]').length).toEqual(0);
    });

    test('should increase input quantity by 1 when increase button is clicked', () => {
      wrapper.find('[data-test="increase"]').first().simulate('click');
      expect(wrapper.find('[value=2]').length).toBeTruthy();
      expect(wrapper.find('[value=3]').length).toEqual(0);
    });

    test('should decrease input quantity by 1 when decrease button is clicked', () => {
      wrapper.find('[data-test="increase"]').first().simulate('click');
      wrapper.find('[data-test="increase"]').first().simulate('click');
      wrapper.find('[data-test="decrease"]').first().simulate('click');
      expect(wrapper.find('[value=2]').length).toBeTruthy();
      expect(wrapper.find('[value=3]').length).toEqual(0);
    });

    test('should add input quantity to cart quantity when add to cart button is clicked', () => {
      wrapper.find('[data-test="input"]').first().simulate('change', { target: { value: 5 } });
      wrapper.find('[data-test="addToCart"]').first().simulate('click');
      expect(wrapper.find('[data-test=5]').length).toBeTruthy();
      expect(wrapper.find('[data-test=3]').length).toEqual(0);
    });
  });
});
