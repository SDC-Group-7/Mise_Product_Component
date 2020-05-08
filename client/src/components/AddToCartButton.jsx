import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AddToCartButton = ({ productLimit, handleCartAddClick, cartQuantity }) => (
  cartQuantity < productLimit
    ? (
      <Button data-test="addToCart" type="submit" onClick={handleCartAddClick}>
        Add to Bag
      </Button>
    ) : <LimitedButton data-test="limitExceed">Limit exceeded</LimitedButton>
);

AddToCartButton.propTypes = {
  productLimit: PropTypes.number,
  cartQuantity: PropTypes.number,
  handleCartAddClick: PropTypes.func,
};

AddToCartButton.defaultProps = {
  productLimit: 3,
  cartQuantity: 0,
  handleCartAddClick: () => {},
};

export default AddToCartButton;


const Button = styled.button`
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  background-color: rgb(253, 128, 36);
  color: rgb(0, 0, 0);
  padding: 0.9375rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgb(253, 128, 36);
  width: 100%;
`;

const LimitedButton = styled.button`
  display: block;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.1875rem;
  background-color: rgb(224, 224, 224);
  color: rgb(0, 0, 0);
  cursor: not-allowed;
  padding: 0.9375rem;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  border-color: rgb(224, 224, 224);
`;
