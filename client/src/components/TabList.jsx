import React from 'react';
import { PropTypes } from 'prop-types';
import BuyNowTab from './BuyNowTab';
import CheckStoreTab from './CheckStoreTab';

const TabList = ({ productLimit, productAvailabilityOnline, themeName }) => (
  <div>
    <ul
      className="tab-list"
      style={{
        display: 'flex', alignItems: 'stretch', width: '100%', padding: '0px', margin: '0px',
      }}
    >
      <li className="tab" style={{ justifyContent: 'flex-start', width: 'auto', listStyleType: 'none' }}>
        <button
          type="submit"
          style={{
            background: 'transparent', boxShadow: 'none', cursor: 'pointer', borderStyle: 'initial',
          }}
        >
          Buy Now
        </button>
      </li>
      <li className="tab" style={{ justifyContent: 'flex-start', width: 'auto', listStyleType: 'none' }}>
        <button
          type="submit"
          style={{
            background: 'transparent', boxShadow: 'none', cursor: 'pointer', borderStyle: 'initial',
          }}
        >
          Check Store Stock
        </button>
      </li>
    </ul>
    {productAvailabilityOnline ? (
      <BuyNowTab
        productLimit={productLimit}
        productAvailabilityOnline={productAvailabilityOnline}
        themeName={themeName}
      />
    ) : 'Temporarily out of stock'}
    <CheckStoreTab />
  </div>
);

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
