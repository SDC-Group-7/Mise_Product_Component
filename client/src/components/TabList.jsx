import React from 'react';
import BuyNowTab from './BuyNowTab.jsx';
import CheckStoreTab from './CheckStoreTab.jsx';

const TabList = () => (
  <div>
    <ul className="tab-list" style={{display:"flex", alignItems:"stretch", width:"100%", padding:"0px", margin:"0px"}}>
      <li className="tab" style={{justifyContent:"flex-start", width:"auto", listStyleType:"none"}}>
        <button style={{background:"transparent", boxShadow:"none", cursor:"pointer", borderStyle:"initial"}}>Buy Now</button>
      </li>
      <li className="tab" style={{justifyContent:"flex-start", width:"auto", listStyleType:"none"}}>
        <button style={{background:"transparent", boxShadow:"none", cursor:"pointer", borderStyle:"initial"}}>Check Store Stock</button>
      </li>
    </ul>
    <BuyNowTab />
    <CheckStoreTab />
  </div>
)

export default TabList;