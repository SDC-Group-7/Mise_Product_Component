import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReviewContainer from './ReviewContainer';
import SafetyWarning from './SafetyWarning';
import TabList from './TabList';

export const getProduct = async (id) => {
  try {
    return await axios.get(`http://localhost:3000/product/${id}`);
  } catch (error) {
    throw new Error(error);
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
      })
      .catch((error) => {
        throw new Error(error);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (

    <Container>
      <FeaturedBadge>{featured}</FeaturedBadge>
      <ThemeImage
        src={themeImageUrl}
        alt=""
      />
      <ProductName>{productName}</ProductName>
      <ReviewContainer reviewCount={reviewCount} rating={rating} />
      <ProductPrice>{`$${price}`}</ProductPrice>
      {chokingHazard ? <SafetyWarning /> : null}
      <TabList />
    </Container>
  );
};

export default ProductOverview;

const Container = styled.div`
  background: papayawhip;
  width: 352.797px;
  height: 617.031px;
  padding: 18px;
  font-family: "Cera Pro", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const FeaturedBadge = styled.span`
  font-size: .75rem;
  line-height: 1.1875rem;
  padding: 0.19rem;
  background: rgb(255, 207, 0);
`;

const ThemeImage = styled.img`
  display: block;
  heigh: auto;
  maxWidth: 100%;
  verticalAlign: middle;

`;

const ProductName = styled.span`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.6875rem;
`;

const ProductPrice = styled.span`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.6875rem;
`;
