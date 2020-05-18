import React from 'react';
import styled from 'styled-components';

const StoreInfo = ({ store }) => {
  const {
    storeName, storeAddress, productAvailability, id,
  } = store;

  return (
    <Container>
      <Availability data-test="availability">
        {productAvailability ? (
          <svg width="20px" height="13px" viewBox="0 0 20 13">
            <path d="M0 5.703L7.177 13 20 0h-4.476L7.177 8.442 4.476 5.723H2.238z" fill="rgb(0,133,55)" fillRule="evenodd" />
          </svg>
        ) : (
          <svg viewBox="0 0 17 17" width="17px" height="17px">
            <path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="rgb(208, 2, 27)" fillRule="evenodd" />
          </svg>
        )}
      </Availability>
      <Info>
        <StoreName data-test="storeName">{storeName}</StoreName>
        <AvailabilityMessage>{productAvailability ? 'In Stock at this time' : 'Out of Stock'}</AvailabilityMessage>
        <StoreAddress data-test="storeAddress">{storeAddress}</StoreAddress>
      </Info>
      <Distance data-test="distance">{`${id} mi`}</Distance>
    </Container>
  );
};

export default StoreInfo;

const Container = styled.div`
  display: flex;
  padding-top: 1.125rem;
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
  padding-left: .25rem;
  padding-right: .25rem;
`;

const Availability = styled.div`
  padding-left: .25rem;
  padding-right: .25rem;
`;

const AvailabilityMessage = styled.div`
  color: rgb(117, 117, 117);
  font-size: 0.75rem;
  font-weight: 500;
`;
