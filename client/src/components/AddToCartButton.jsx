import React, { useState } from 'react';
import styled from 'styled-components';

const AddToCartButton = ({ productLimit, handleCartAddClick, cartQuantity }) => (
  <button className="addToCart" type="submit" onClick={handleCartAddClick}>Add to Bag</button>
);

export default AddToCartButton;
