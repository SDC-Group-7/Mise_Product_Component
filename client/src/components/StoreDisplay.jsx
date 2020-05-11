import React, { useState } from 'react';
import styled from 'styled-components';
import StoreInfo from './StoreInfo';
import StoreListItem from './StoreListItem';

const StoreDisplay = ({ stores }) => {
  const [listActive, setListActive] = useState(false);
  const [storesList, setStoresList] = useState(stores);
  const [selectedStore, setSelectedStore] = useState(stores[0]);

  const clickListHandler = () => setListActive(!listActive);
  const reorderStores = (storeId, oldStore) => {
    const reorderedList = storesList;

    reorderedList.splice(storeId, 1);
    reorderedList.push(oldStore);
    reorderedList.sort((a, b) => ((a.id > b.id) ? 1 : -1));

    setStoresList(reorderedList);
  };
  const changeStore = (e) => {
    const currentStore = selectedStore;
    setSelectedStore(storesList[Number(e.target.id)]);
    setListActive(false);
    reorderStores(Number(e.target.id), currentStore);
  };

  const closestStoresList = storesList.map((store, index) => (
    <StoreListItem store={store} index={index} changeStore={changeStore} />
  ));

  return (
    <Container>
      <StoreListDropDown>
        <SelectStoreButton data-test="selectStore" tabIndex={0} onClick={clickListHandler}>
          <StyledSpan>Select a Store</StyledSpan>
          <span>{selectedStore.storeName}</span>
        </SelectStoreButton>
        {listActive
          ? (
            <DropDownContent>
              {closestStoresList.slice(1, 4)}
            </DropDownContent>
          ) : null}
      </StoreListDropDown>
      <StoreInfo store={selectedStore} />
    </Container>
  );
};

export default StoreDisplay;

const Container = styled.div`
  padding-top: 1.125rem;
`;

const StoreListDropDown = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  cursor: pointer;
`;

const DropDownContent = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  box-shadow: rgb(224, 224, 224) 0px 0.3125rem 0.75rem 0px;
  cursor: pointer;
  padding-top: .09rem;
  &:active ${StoreListDropDown} {
    box-shadow: rgb(224, 224, 224) 0px 0.3125rem 0.75rem 0px;
    border-color: blue;
  };
`;

const SelectStoreButton = styled.div`
  display: flex;
  padding: 0.75rem 1.125rem;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;
