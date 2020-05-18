import React from 'react';
import styled from 'styled-components';

const StoreListItem = ({ store, index, changeStore }) => {
  const { storeName, productAvailability, id } = store;

  return (
    <Container>
      <Availability data-test="availability" id={index} onClick={changeStore}>
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
        <StoreName data-test="storeName" id={index} onClick={changeStore}>{storeName}</StoreName>
      </Info>
      <Distance data-test="distance" id={index} onClick={changeStore}>{`${id} mi`}</Distance>
    </Container>
  );
};

export default StoreListItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 2.25rem;
  padding: 0.9rem 1.125rem;
  border-width: 1px;
  border-style: solid solid solid;
  border-color: rgb(224, 224, 224) rgb(224, 224, 224) rgb(224, 224, 224);
  border-top: 0px;
  background: rgb(255, 255, 255);
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

const Distance = styled.div`
  white-space: nowrap;
  font-weight: 700;
`;

const Availability = styled.div``;
