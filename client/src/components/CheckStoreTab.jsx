import React from 'react';
import PropTypes from 'prop-types';
import StoreSearchForm from './StoreSearchForm';
import StoresContainer from './StoresContainer';

const CheckStoreTab = (props) => {
  const {
    stores, query, handleChangeQuery, handleSubmitQuery, hasSearched, handleChangeStore,
  } = props;

  return (
    hasSearched
      ? <StoresContainer stores={stores} handleChangeStore={handleChangeStore} />
      : (
        <StoreSearchForm
          query={query}
          handleChangeQuery={handleChangeQuery}
          handleSubmitQuery={handleSubmitQuery}
        />
      )
  );
};

CheckStoreTab.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.string,
  hasSearched: PropTypes.bool,
  handleChangeQuery: PropTypes.func,
  handleSubmitQuery: PropTypes.func,
  handleChangeStore: PropTypes.func,
};

CheckStoreTab.defaultProps = {
  stores: [],
  query: '',
  hasSearched: false,
  handleChangeQuery: () => {},
  handleSubmitQuery: () => {},
  handleChangeStore: () => {},
};

export default CheckStoreTab;
