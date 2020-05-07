import React from 'react';
import PropTypes from 'prop-types';
import QuantityToggler from './QuantityToggler';
import AddToCartButton from './AddToCartButton';

const BuyNowTab = ({ productLimit, productAvailabilityOnline, themeName }) => (

  <div className="buyNow-tab">
    <div>{productAvailabilityOnline ? 'Available now' : 'Temporarily out of stock'}</div>
    <div>{productAvailabilityOnline ? <QuantityToggler /> : null}</div>
    <div>{productAvailabilityOnline ? `Limit ${productLimit}` : null}</div>
    <div>{productAvailabilityOnline ? <AddToCartButton /> : null}</div>
    <div>
      <button type="submit">Add to Wishlist</button>
    </div>
    <div>
      Shop more like this:
    </div>
    <div>
      {themeName}
    </div>
  </div>
);

BuyNowTab.propTypes = {
  productLimit: PropTypes.number,
  productAvailabilityOnline: PropTypes.bool,
  themeName: PropTypes.string,
};

BuyNowTab.defaultProps = {
  productLimit: 3,
  productAvailabilityOnline: true,
  themeName: '',
};


export default BuyNowTab;
