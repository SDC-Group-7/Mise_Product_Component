import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewContainer from './ReviewContainer';
import SafetyWarning from './SafetyWarning';
import TabList from './TabList';

const getProduct = async (id) => {
  try {
    return await axios.get(`http://localhost:3000/product/${id}`);
  } catch (error) {
    return console.error(error);
  }
};

const ProductOverview = () => {
  const [productData, setProductData] = useState({});
  const randomProductId = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + 1;
  const {
    featured,
    themeImageUrl,
    productName,
    price,
    chokingHazard,
    reviewCount,
    rating,
  } = productData;

  useEffect(() => {
    getProduct(randomProductId)
      .then(({ data }) => {
        setProductData(data[0]);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <div>
      <span className="featured-badge">{featured}</span>
      <img
        src={themeImageUrl}
        alt=""
        style={{
          display: 'block', height: 'auto', maxWidth: '100%', verticalAlign: 'middle',
        }}
      />
      <h1 className="product-name">
        <span>{productName}</span>
      </h1>
      <ReviewContainer reviewCount={reviewCount} rating={rating} />
      <h1>
        <span>
          $
          {price}
        </span>
      </h1>
      {chokingHazard ? <SafetyWarning /> : null}
      <TabList />
    </div>
  );
};

export default ProductOverview;
