import React from 'react';

const StoreSearchForm = ({ query, handleSubmit, handleChange }) => (
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

export default StoreSearchForm;
