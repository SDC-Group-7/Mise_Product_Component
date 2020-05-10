import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import BuyNowTab from './BuyNowTab';
import CheckStoreTab from './CheckStoreTab';

const TabList = (props) => {
  const {
    productLimit, productAvailabilityOnline, themeName, productId,
  } = props;
  const [tab, setTab] = useState(true);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleTabClick = () => setTab(!tab);

  const handleCartAddClick = () => setCartQuantity(cartQuantity + quantity);

  const handleChangeQuantity = (newQuantity) => setQuantity(newQuantity);

  const handleBlur = (newQuantity) => {
    if (newQuantity < 1) {
      setQuantity(1);
    } else if (newQuantity > productLimit) {
      setQuantity(productLimit - cartQuantity);
    }
  };
  const handleChangeQuery = (e) => setQuery(e.target.value);

  const getStores = async (id, searchQuery) => {
    try {
      return await axios.get(`http://localhost:3000/product/${id}/find-store?q=${searchQuery}`);
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleSubmitQuery = (e) => {
    e.preventDefault();
    getStores(productId, query)
      .then(({ data }) => {
        setStores(data);
        setHasSearched(true);
      })
      .catch((error) => {
        const errorCode = error.message.split(' ').pop();
        if (errorCode === '404') {
          setStores([]);
          setHasSearched(true);
          console.log('Store not found');
        } else {
          console.log(error.message);
        }
      });
  };

  return (
    <>
      <Tabs>
        <BuyNowButtonContainer>
          <TabButton className="BuyNow" onClick={tab ? null : handleTabClick}>Buy Now</TabButton>
        </BuyNowButtonContainer>
        <CheckStoreButtonContainer>
          <TabButton className="CheckStore" onClick={tab ? handleTabClick : null}>Check Store Stock</TabButton>
        </CheckStoreButtonContainer>
      </Tabs>
      {tab
        ? (
          <BuyNowTab
            cartQuantity={cartQuantity}
            handleCartAddClick={handleCartAddClick}
            productLimit={productLimit}
            productAvailabilityOnline={productAvailabilityOnline}
            themeName={themeName}
            handleChangeQuantity={handleChangeQuantity}
            quantity={quantity}
            handleBlur={handleBlur}
          />
        )
        : (
          <CheckStoreTab
            stores={stores}
            query={query}
            hasSearched={hasSearched}
            handleChangeQuery={handleChangeQuery}
            handleSubmitQuery={handleSubmitQuery}
          />
        )}
    </>
  );
};

const Tabs = styled.ul`
`;

const CheckStoreButtonContainer = styled.li`
`;

const BuyNowButtonContainer = styled.li`
`;

const TabButton = styled.button`
`;

TabList.propTypes = {
  productLimit: PropTypes.number,
  productAvailabilityOnline: PropTypes.number,
  themeName: PropTypes.string,
  productId: PropTypes.number,
};

TabList.defaultProps = {
  productLimit: 3,
  productAvailabilityOnline: 1,
  themeName: '',
  productId: 1,
};

export default TabList;
