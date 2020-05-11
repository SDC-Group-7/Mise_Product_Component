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
    <Container>
      <StoreListDropDown>
        <SelectStoreButton data-test="selectStore" tabIndex={0} onClick={clickListHandler}>
          <StyledSpan>Select a Store</StyledSpan>
          <span>{stores[0].storeName}</span>
        </SelectStoreButton>
        {listActive
          ? (
            <DropDownContent>
              {closestStoresList.slice(0, 3)}
            </DropDownContent>
          ) : null}
      </StoreListDropDown>
      <StoreInfo store={stores[0]} />
    </Container>
  );
};

export default StoreDisplay;

const Container = styled.div`
  padding-top: 1.125rem;
`;

const DropDownContent = styled.div`
  position: absolute;
  width: 100%;
  top: 100%;
  box-shadow: rgb(224, 224, 224) 0px 0.3125rem 0.75rem 0px;
  cursor: pointer;
`;


const StoreListDropDown = styled.div`
  position: relative;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  cursor: pointer;
`;

const SelectStoreButton = styled.div`
  display: flex;
  padding: 0.75rem 1.125rem;
  flex-direction: column;
`;

const StyledSpan = styled.span`
  font-size: 14px;
`;
