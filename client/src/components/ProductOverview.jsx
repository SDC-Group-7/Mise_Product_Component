import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReviewContainer from './ReviewContainer';
import SafetyWarning from './SafetyWarning';
import TabList from './TabList';

const ProductOverview = () => {
  const [data, setData] = useState({});
  const randomProductId = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + 1;

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const response = await axios.get(`http://localhost:3000/product/${id}`);
        console.log(response.data[0]);
        setData(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getProduct(randomProductId);
  }, []);

  return (
    <div>
      <span className="featured-badge">{data.featured}</span>
      <img
        src={data.theme_image_url}
        alt=""
        style={{
          display: 'block', height: 'auto', maxWidth: '100%', verticalAlign: 'middle',
        }}
      />
      <h1 className="product-name">
        <span>{data.product_name}</span>
      </h1>
      <ReviewContainer />
      <h1>
        <span>
          $
          {data.price}
        </span>
      </h1>
      {data.choking_hazard ? <SafetyWarning /> : null}
      <TabList />
    </div>
  );
};

export default ProductOverview;
