import React from 'react';
import styled from 'styled-components';

const StoreInfo = ({ store }) => {
  const { storeName, storeAddress, productAvailability } = store;

  return (
    <Container>
      <Availability data-test="availability">
        {productAvailability ? 'Y' : 'X'}
      </Availability>
      <Info>
        <StoreName data-test="storeName">{storeName}</StoreName>
        <StoreAddress data-test="storeAddress">{storeAddress}</StoreAddress>
      </Info>
      <Distance data-test="distance">2.2 mi</Distance>
    </Container>
  );
};

export default StoreInfo;

const Container = styled.div`
  display: flex;
  padding-bottom: 1.125rem;
  margin-bottom: 1.125rem;
  border-bottom: 1px solid rgb(224, 224, 224);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  padding: 0px 0.9375rem;
`;

const StoreName = styled.div`
  font-weight: 500;
`;

const StoreAddress = styled.div`
  color: rgb(117, 117, 117);
  margin-bottom: 0.625rem;
  font-size: 0.9375rem;
  max-width: 9.375rem;
`;

const Distance = styled.div`
  white-space: nowrap;
  font-weight: 700;
`;

const Availability = styled.div``;
