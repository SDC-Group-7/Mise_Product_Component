import React, { useState } from 'react';
import axios from 'axios';

const getStores = async (id) => {
  try {
    return await axios.get(`http://localhost:3000/product/${id}`);
  } catch (error) {
    throw new Error(error);
  }
};


const CheckStoreTab = () => {
  const [stores, setStores] = useState([]);
  const [query, setQuery] = useState('');
  const handleChange = (e) => setQuery(e.target.value);
  const handleSubmit = () => {
    getStores(query)
  }
  return (
    <div>
      <p>Enter your address to find a store near you.</p>
      <label tabIndex="-1">
        <input />
          <span tabIndex="-1">
            Enter a city and state or zip code
          </span>
      </label>
      <button></button>
    </div>
  );
};

export default CheckStoreTab;
