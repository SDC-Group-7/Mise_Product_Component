import React from 'react';
import PropTypes from 'prop-types';
import QuantityToggler from './QuantityToggler';
import AddToCartButton from './AddToCartButton';
import AddToWishlistButton from './AddToWishlistButton';

const BuyNowTab = (props) => {
  const {
    productLimit,
    productAvailabilityOnline,
    themeName,
    cartQuantity,
    handleCartAddClick,
    quantity,
    handleChangeQuantity,
    handleBlur,
  } = props;

  return (
    <div data-cartquantity={cartQuantity}>
      <div>{productAvailabilityOnline ? 'Available now' : 'Temporarily out of stock'}</div>
      {productAvailabilityOnline && cartQuantity < productLimit
        ? (
          <>
            <div>
              <QuantityToggler
                productLimit={productLimit}
                quantity={quantity}
                onChange={handleChangeQuantity}
                onBlur={handleBlur}
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
  cartQuantity: PropTypes.number,
  quantity: PropTypes.number,
  themeName: PropTypes.string,
  productAvailabilityOnline: PropTypes.number,
  handleCartAddClick: PropTypes.func,
  handleChangeQuantity: PropTypes.func,
  handleBlur: PropTypes.func,
};

BuyNowTab.defaultProps = {
  productLimit: 3,
  cartQuantity: 1,
  quantity: 1,
  themeName: '',
  productAvailabilityOnline: 1,
  handleCartAddClick: () => {},
  handleChangeQuantity: () => {},
  handleBlur: () => {},
};


export default BuyNowTab;
