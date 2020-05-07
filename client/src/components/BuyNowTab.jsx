import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import QuantityToggler from './QuantityToggler';
import AddToCartButton from './AddToCartButton';

const BuyNowTab = ({ productLimit, productAvailabilityOnline, themeName }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const handleCartAddClick = () => {
    setCartQuantity(cartQuantity + 1);
  };

  return (
    <div className="buyNow-tab">
      <div>{productAvailabilityOnline ? 'Available now' : 'Temporarily out of stock'}</div>
      <div>
        {productAvailabilityOnline && cartQuantity < productLimit
          ? <QuantityToggler />
          : null}
      </div>
      <div>
        {productAvailabilityOnline && cartQuantity < productLimit
          ? `Limit ${productLimit}`
          : null}
      </div>
      <div>
        <AddToCartButton
          productLimit={productLimit}
          handleCartAddClick={handleCartAddClick}
          cartQuantity={cartQuantity}
        />
      </div>
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
};

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
