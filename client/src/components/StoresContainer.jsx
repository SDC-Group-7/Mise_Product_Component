import React from 'react';
import PropTypes from 'prop-types';

const StoresContainer = ({ stores }) => (
  <div>This is where the stores container will be</div>
);

StoresContainer.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
};

StoresContainer.defaultProps = {
  stores: [],
};

export default StoresContainer;
