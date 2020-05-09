import React from 'react';
import PropTypes from 'prop-types';

const StoreSearchForm = ({ query, handleSubmitQuery, handleChangeQuery }) => (
  <div>
    <p>Enter your address to find a store near you.</p>
    <form tabIndex="-1" onSubmit={handleSubmitQuery}>
      <input
        type="text"
        data-test="queryChange"
        value={query}
        onChange={handleChangeQuery}
      />
      <span tabIndex="-1">
        Enter a city and state or zip code
      </span>
      <button type="submit" data-test="queryClick">Click me</button>
    </form>
  </div>
);

StoreSearchForm.propTypes = {
  query: PropTypes.string,
  handleChangeQuery: PropTypes.func,
  handleSubmitQuery: PropTypes.func,
};

StoreSearchForm.defaultProps = {
  query: '',
  handleChangeQuery: () => {},
  handleSubmitQuery: () => {},
};

export default StoreSearchForm;
