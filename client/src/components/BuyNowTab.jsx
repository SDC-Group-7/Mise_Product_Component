import React, { useState } from 'react';
import PropTypes from 'prop-types';
import QuantityToggler from './QuantityToggler';
import AddToCartButton from './AddToCartButton';
import AddToWishlistButton from './AddToWishlistButton';

const BuyNowTab = ({ productLimit, productAvailabilityOnline, themeName }) => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleCartAddClick = () => setCartQuantity(cartQuantity + quantity);
  const handleChange = (newQuantity) => setQuantity(newQuantity);

  return (
    <div data-test={cartQuantity}>
      <div>{productAvailabilityOnline ? 'Available now' : 'Temporarily out of stock'}</div>
      {productAvailabilityOnline && cartQuantity < productLimit
        ? (
          <>
            <div>
              <QuantityToggler
                productLimit={productLimit}
                quantity={quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              {`Limit ${productLimit}`}
            </div>
          </>
        ) : null}
      { productAvailabilityOnline ? (
        <div>
          <AddToCartButton
            productLimit={productLimit}
            handleCartAddClick={handleCartAddClick}
            cartQuantity={cartQuantity}
            productAvailabilityOnline={productAvailabilityOnline}
          />
        </div>
      ) : null}
      <AddToWishlistButton />
      <div>Shop more like this:</div>
      <div>{themeName}</div>
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
