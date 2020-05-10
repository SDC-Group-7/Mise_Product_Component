import React from 'react';
import styled from 'styled-components';

const StoreListItem = ({ store }) => {
  const { storeName, productAvailability } = store;

  return (
    <Container>
      <Availability data-test="availability">
        {productAvailability ? 'Y' : 'X'}
      </Availability>
      <Info>
        <StoreName data-test="storeName">{storeName}</StoreName>
      </Info>
      <Distance data-test="distance">2.2 mi</Distance>
    </Container>
  );
};

export default StoreListItem;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.75rem;
  user-select: none;
  padding: 0.75rem 1.125rem;
  border-width: 0px 1px 1px;
  border-style: solid solid solid;
  border-color: rgb(224, 224, 224) rgb(224, 224, 224) rgb(224, 224, 224);
  border-image: initial;
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
