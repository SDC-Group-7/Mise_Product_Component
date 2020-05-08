import React, { useState } from 'react';
import styled from 'styled-components';

const QuantityToggler = () => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => setQuantity(e.target.value);

  return (
    <Container>
      <LeftButton />
      <Input value={quantity} onChange={handleChange} />
      <RightButton />
    </Container>
  );
};

export default QuantityToggler;

const Container = styled.div`
  display: flex;
`;
const Input = styled.input``;
const LeftButton = styled.button``;
const RightButton = styled.button``;
