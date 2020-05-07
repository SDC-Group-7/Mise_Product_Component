import React from 'react';
import { shallow } from 'enzyme';
import BuyNowTab from '../client/src/components/BuyNowTab';

describe('BuyNowTab', () => {
  test('should render tab if product is available online', () => {
    const fakePropValue = true;

    const wrapper = shallow(<BuyNowTab
      productAvailabilityOnline={fakePropValue}
      productLimit={3}
    />);
    expect(wrapper.contains('Available now')).toBe(true);
    expect(wrapper.contains('This is a quantity bar')).toBe(true);
    expect(wrapper.contains('Limit 3')).toBe(true);
    expect(wrapper.find('button').length).toBe(1);
  });

  // test('should not render the BuyNowTab if product is unavailable online', () => {
  //   const fakePropValue = false;

  //   const wrapper = shallow(<TabList productAvailabilityOnline={fakePropValue} />);
  //   expect(wrapper.contains(<BuyNowTab />)).toBe(false);
  //   expect(wrapper.)
  // });

});
