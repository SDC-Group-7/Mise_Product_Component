import React from 'react';
import ReviewContainer from './ReviewContainer.jsx';
import SafetyWarning from './SafetyWarning.jsx';

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
    </div>
  )

}




  <div>






    <ul className="tab-list" style={{display:"flex", alignItems:"stretch", width:"100%", padding:"0px", margin:"0px"}}>
      <li className="tab" style={{justifyContent:"flex-start", width:"auto", listStyleType:"none"}}>
        <button style={{background:"transparent", boxShadow:"none", cursor:"pointer", borderStyle:"initial"}}>Buy Now</button>
      </li>
      <li className="tab" style={{justifyContent:"flex-start", width:"auto", listStyleType:"none"}}>
        <button style={{background:"transparent", boxShadow:"none", cursor:"pointer", borderStyle:"initial"}}>Check Store Stock</button>
      </li>
    </ul>
    <div className="buyNow-tab">
      <div>
        This is a quantity bar
      </div>
      <div>
        Limit 3
      </div>
      <div>
        <button>Add to Bag</button>
      </div>
      <div>
        <button>Add to Wishlist</button>
      </div>
    </div>
  </div>


export default ProductOverview;
