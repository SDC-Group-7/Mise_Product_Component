import React from 'react';
import { shallow, mount } from 'enzyme';
import StoreInfoHeader from '../client/src/components/StoreInfoHeader';
import StoresContainer from '../client/src/components/StoresContainer';

describe('Store Info Header', () => {
  describe('Display children', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<StoreInfoHeader />);
    });
    test('should display an info button', () => {
      expect(wrapper.find('[data-test="infoButton"]').exists()).toBe(true);
    });
    test('should display "Closest Store" text', () => {
      expect(wrapper.find('Closest Store').exists()).toBe(true);
    });
    test('should display a "Change Store Location" button', () => {
      expect(wrapper.find('[data-test="ChangeStoreButton"]').exists()).toBe(true);
    });
  });

  describe('Functions', () => {
    const onClickMock = jest.fn();

    test('should call an onClick handler when "Change Store Location" button is clicked', () => {
      const wrapper = shallow(<StoreInfoHeader />);
      expect(wrapper.find(onClickMock)).toHaveBeenCalled(1);
    });
  });
});
