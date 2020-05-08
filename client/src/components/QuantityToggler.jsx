import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityToggler = ({ productLimit, quantity, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };
  const handleDecrease = () => onChange(quantity - 1);
  const handleIncrease = () => onChange(quantity + 1);

  return (
    <Container>
      <DecreaseButton data-test="decrease" onClick={handleDecrease} disabled={quantity === 1} />
      <Input type="number" data-test="input" min="1" max={productLimit} value={quantity} onChange={handleChange} />
      <IncreaseButton data-test="increase" onClick={handleIncrease} disabled={quantity === productLimit} />
    </Container>
  );
};

export default QuantityToggler;

const Container = styled.div`
  display: flex;
`;
const Input = styled.input``;
const DecreaseButton = styled.button``;
const IncreaseButton = styled.button``;
