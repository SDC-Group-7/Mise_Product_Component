import React from 'react';
import PropTypes from 'prop-types';

const BuyNowTab = ({ productLimit, productAvailabilityOnline, themeName }) => (
  <div className="buyNow-tab">
    <div>Available now</div>
    <div>
      This is a quantity bar
    </div>
    <div>
      {`Limit ${productLimit}`}
    </div>
    <div>
      {productAvailabilityOnline ? <button type="submit">Add to Bag</button> : null}
    </div>
    <div>
      <button type="submit">Add to Wishlist</button>
    </div>
    <div>
      Shop more like this:
    </div>
    <div>
      {themeName}
    </div>
  </div>
);

BuyNowTab.propTypes = {
  productLimit: PropTypes.number,
  productAvailabilityOnline: PropTypes.bool,
  themeName: PropTypes.string,
};

BuyNowTab.defaultProps = {
  productLimit: 3,
  productAvailabilityOnline: true,
  themeName: '',
};


export default BuyNowTab;
