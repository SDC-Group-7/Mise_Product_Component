import React, { useState } from 'react';
import styled from 'styled-components';
import StoreInfo from './StoreInfo';
import StoreListItem from './StoreListItem';

const StoreDisplay = ({ stores }) => {
  const [listActive, setListActive] = useState(false);
  const clickListHandler = () => setListActive(!listActive);
  const closestStoresList = stores.map((store) => (
    <StoreListItem store={store} />
  ));

  return (
    <div>
      <SelectAStoreContainer>
        <div data-test="selectStore" role="button" tabIndex={0} onClick={clickListHandler} onKeyPress={null}>
          <span>Select a Store</span>
          <span>{stores[0].storeName}</span>
        </div>
        <div>Carrot image</div>
      </SelectAStoreContainer>
      {listActive ? (
        <StoresListContainer>
          {closestStoresList.slice(0, 3)}
        </StoresListContainer>
      ) : null}
      <StoreInfo store={stores[0]} />
    </div>
  );
};

export default StoreDisplay;

const StoresListContainer = styled.div`
  top: 100%;
  width: 100%;
  box-shadow: rgb(224, 224, 224) 0px 0.3125rem 0.75rem 0px;
`;

const SelectAStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.125rem;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
`;
