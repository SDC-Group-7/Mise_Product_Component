import React, { useState } from 'react';
import styled from 'styled-components';

const AddToWishlistButton = () => {
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const clickHandler = () => setAddedToWishlist(!addedToWishlist);

  return (
    <Container>
      <WishListButton type="submit" data-test="wishlist" onClick={clickHandler}>
        <Heart width="100%" height="100%" viewBox="0 0 40 40" alt="" className="WishlistButtonstyles__StyledWishlistIcon-d720r1-1 hFCcpa" data-di-res-id="df6553d8-65a66aa5" data-di-rand="1589769598451">
          <rect fill="white" width="40" height="40" rx="20" />
          <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill={addedToWishlist ? 'rgb(0, 109, 183)' : 'white'} />
          <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="rgb(0, 109, 183)" />
        </Heart>
        <WishListText>
          {addedToWishlist ? 'Added to Wishlist' : 'Add to Wishlist'}
        </WishListText>
      </WishListButton>
    </Container>
  );
};

export default AddToWishlistButton;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 1.25rem 0px;
`;

const WishListButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px;
  cursor: pointer;
  border-width: 0px;
`;

const WishListText = styled.span`
  color: inherit;
  font-size: 0.75rem;
  line-height: 1.1875rem;
  font-weight: 700;
`;

const Heart = styled.svg`
  height: 1.875rem;
  width: 1.875rem;
`;
