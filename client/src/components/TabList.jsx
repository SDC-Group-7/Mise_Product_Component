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
    <div>
      <Tabs>
        <Tab>
          <TabButton className="BuyNow" onClick={handleTabClick}>Buy Now</TabButton>
        </Tab>
        <Tab>
          <TabButton className="CheckStore" onClick={handleTabClick}>Check Store Stock</TabButton>
        </Tab>
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
    </div>
  );
};

const Tabs = styled.ul`
  display: flex;
  align-items: stretch;
  width: 100%;
  padding: 0px;
  margin: 0px;
`;

const Tab = styled.li`
  justifyContent: flex-start;
  width: auto;
  list-style-type: none;
`;

const TabButton = styled.button`
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  border-style: initial;
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
