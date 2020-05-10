import React from 'react';
import PropTypes from 'prop-types';
import StoreInfo from './StoreInfo';

const StoresContainer = ({ stores }) => (
  stores.length
    ? <StoreInfo store={stores[0]} />
    : <div data-test="noStore">No stores found within a 60-mile radius of your zip code</div>
);

StoresContainer.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
};

StoresContainer.defaultProps = {
  stores: [],
};

export default StoresContainer;
