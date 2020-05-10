import React, { useState } from 'react';
import StoreInfo from './StoreInfo';

const StoreList = ({ stores }) => {
  const [listActive, setListActive] = useState(false);
  return (
    <>
      <div>
        <div role="button" tabIndex={0} onClick={() => console.log('clicked!')}>
          <span>Select a Store</span>
          <span>{stores[0].storeName}</span>
        </div>
        <div>Carrot image</div>
      </div>
      <StoreInfo store={stores[0]} />
    </>
  );
};

export default StoreList;
