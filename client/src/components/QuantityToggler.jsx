import React from 'react';
import styled from 'styled-components';

const QuantityToggler = () => (
  <Container>
    <LeftButton />
    <Input value={1} />
    <RightButton />
  </Container>
);

export default QuantityToggler;

const Container = styled.div`
  display: flex;
`;
const Input = styled.input``;
const LeftButton = styled.button``;
const RightButton = styled.button``;
