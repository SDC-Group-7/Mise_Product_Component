import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import BuyNowTab from './BuyNowTab';
import CheckStoreTab from './CheckStoreTab';

const TabList = ({ productLimit, productAvailabilityOnline, themeName }) => {
  const [tab, setTab] = useState(true);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => setTab(!tab);
  const handleCartAddClick = () => setCartQuantity(cartQuantity + quantity);
  const handleChange = (newQuantity) => setQuantity(newQuantity);
  const handleBlur = (newQuantity) => newQuantity < 1 && setQuantity(1);

  return (
    <div>
      <Tabs>
        <Tab>
          <TabButton className="BuyNow" onClick={handleClick}>Buy Now</TabButton>
        </Tab>
        <Tab>
          <TabButton className="CheckStore" onClick={handleClick}>Check Store Stock</TabButton>
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
            handleChange={handleChange}
            quantity={quantity}
            handleBlur={handleBlur}
          />
        )
        : <CheckStoreTab />}
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
  productAvailabilityOnline: PropTypes.bool,
  themeName: PropTypes.string,
};

TabList.defaultProps = {
  productLimit: 3,
  productAvailabilityOnline: true,
  themeName: '',
};

export default TabList;
