import React, { useState } from 'react';
import styled from 'styled-components';

const AddToWishlistButton = () => {
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const clickHandler = () => setAddedToWishlist(!addedToWishlist);

  return (
    <WishListButton type="submit" data-test="wishlist" onClick={clickHandler}>{addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}</WishListButton>
  );
};

export default AddToWishlistButton;

const WishListButton = styled.button`

`;
