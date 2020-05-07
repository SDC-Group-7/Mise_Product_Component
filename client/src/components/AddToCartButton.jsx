import React, { useState } from 'react';
import styled from 'styled-components';

const AddToCartButton = ({ productLimit, handleCartAddClick, cartQuantity }) => (
  <Button className="addToCart" type="submit" onClick={handleCartAddClick}>Add to Bag</Button>
);

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
