import React from 'react';
import PropTypes from 'prop-types';
import StoreList from './StoreList';
import StoreInfoHeader from './StoreInfoHeader';

const StoresContainer = ({ stores, handleChangeStore }) => (
  <>
    <StoreInfoHeader handleChangeStore={handleChangeStore} />
    {stores.length
      ? <StoreList stores={stores} />
      : <div data-test="noStore">No stores found within a 60-mile radius of your zip code</div>}
  </>
);

StoresContainer.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
  handleChangeStore: PropTypes.func,
};

StoresContainer.defaultProps = {
  stores: [],
  handleChangeStore: () => {},
};

export default StoresContainer;
