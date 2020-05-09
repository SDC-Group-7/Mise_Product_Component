import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const getStores = async (id, query) => {
  try {
    return await axios.get(`http://localhost:3000/product/${id}/find-store?q=${query}`);
  } catch (error) {
    throw new Error(error);
  }
};

const CheckStoreTab = ({ productId }) => {
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState('');
  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Clicked!');
    getStores(productId, query)
      .then(({ data }) => {
        console.log(data);
        setStores(data);
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <div>
      <p>Enter your address to find a store near you.</p>
      <form tabIndex="-1" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <span tabIndex="-1">
          Enter a city and state or zip code
        </span>
        <button name="searchStore" type="submit">Click me</button>
      </form>
    </div>
  );
};

CheckStoreTab.propTypes = {
  productId: PropTypes.number,
};

CheckStoreTab.defaultProps = {
  productId: 1,
};

export default CheckStoreTab;
