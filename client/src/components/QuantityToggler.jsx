import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityToggler = ({ productLimit }) => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => setQuantity(e.target.value);
  const handleDecrease = () => setQuantity(quantity - 1);
  const handleIncrease = () => setQuantity(quantity + 1);

  return (
    <Container>
      <DecreaseButton onClick={handleDecrease} disabled={quantity === 1} />
      <Input type="number" data-type="input" min="1" max={productLimit} value={quantity} onChange={handleChange} />
      <IncreaseButton onClick={handleIncrease} disabled={quantity === productLimit} />
    </Container>
  );
};

export default QuantityToggler;

const Container = styled.div`
  display: flex;
`;
const Input = styled.input`
  -webkit-appearance: none;
  margin: 0;
`;
const DecreaseButton = styled.button`

`;
const IncreaseButton = styled.button``;
