import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StoreInfoHeader = ({ handleChangeStore }) => (
  <Container>
    <div data-test="closestStoreText">Closest Store</div>
    <button data-test="infoButton" type="button">i</button>
    <button data-test="changeStoreButton" type="button" onClick={handleChangeStore}>
      Change Store Location
    </button>
  </Container>
);

export default StoreInfoHeader;

const Container = styled.div`
  display: flex;
`;

StoreInfoHeader.propTypes = {
  handleChangeStore: PropTypes.func,
};

StoreInfoHeader.defaultProps = {
  handleChangeStore: () => {},
};
