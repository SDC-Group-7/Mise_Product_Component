import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    <Container data-cartquantity={cartQuantity}>
      <div>{productAvailabilityOnline ? 'Available now' : 'Temporarily out of stock'}</div>
      {productAvailabilityOnline && cartQuantity < productLimit
        ? (
          <QuantityWrapper>
            <QuantityToggler
              productLimit={productLimit}
              quantity={quantity}
              onChange={handleChangeQuantity}
              onBlur={handleBlur}
            />
            <LimitWrapper>
              <LimitText>{`Limit ${productLimit}`}</LimitText>
              <LimitButton>i</LimitButton>
            </LimitWrapper>
          </QuantityWrapper>
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
    </Container>
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding-top: 1.125rem;
  border-top: 1px solid rgb(224, 224, 224);
`;

const QuantityWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const LimitWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  padding: 0.625rem 0px;
`;

const LimitButton = styled.button`
  display: block;
  color: rgb(117, 117, 117);
`;

const LimitText = styled.div`
  color: rgb(44, 44, 44);
  font-size: 0.875rem;
  line-height: 1.1875rem;
  font-weight: 400;
`;
