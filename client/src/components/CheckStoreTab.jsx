import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import StoreSearchForm from './StoreSearchForm';
import StoresContainer from './StoresContainer';

const CheckStoreTab = ({ productId }) => {
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => setQuery(e.target.value);
  const getStores = async (id, searchQuery) => {
    try {
      return await axios.get(`http://localhost:3000/product/${id}/find-store?q=${searchQuery}`);
    } catch (error) {
      throw new Error(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getStores(productId, query)
      .then(({ data }) => {
        setStores(data);
        setHasSearched(true);
      })
      .catch((error) => {
        const errorCode = error.message.split(' ').pop();
        if (errorCode === '404') {
          setStores([]);
          setHasSearched(true);
          console.log('Oops! Product not found.');
        } else {
          console.log(error.message);
        }
      });
  };

  return (
    hasSearched
      ? <StoresContainer stores={stores} />
      : <StoreSearchForm query={query} handleChange={handleChange} handleSubmit={handleSubmit} />
  );
};

CheckStoreTab.propTypes = {
  productId: PropTypes.number,
};

CheckStoreTab.defaultProps = {
  productId: 1,
};

export default CheckStoreTab;
