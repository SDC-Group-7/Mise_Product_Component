import React from 'react';
import ReviewContainer from './ReviewContainer.jsx';
import SafetyWarning from './SafetyWarning.jsx';
import TabList from './TabList.jsx';

const ProductOverview = () => {
  return (
    <div>
      <span className="featured-badge">Hard to find</span>
      <img src="https://legofec.s3-us-west-1.amazonaws.com/themes/HarryPotter.png" style={{display:"block", height:"auto", maxWidth:"100%", verticalAlign:"middle"}}></img>
      <h1 className="product-name">
        <span>Hogwarts Castle</span>
      </h1>
      <ReviewContainer />
      <SafetyWarning />
      <TabList />
    </div>
  )

}


export default ProductOverview;
