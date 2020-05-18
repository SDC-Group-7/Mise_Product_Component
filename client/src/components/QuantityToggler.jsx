import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { InfoButton, InfoButtonWrapper } from './StoreInfoHeader';

const QuantityToggler = (props) => {
  const {
    productLimit, quantity, onChange, onBlur,
  } = props;
  const handleChange = (e) => onChange(e.target.value);
  const handleDecrease = () => onChange(quantity - 1);
  const handleIncrease = () => onChange(quantity + 1);
  const handleBlur = (e) => onBlur(e.target.value);

  return (
    <>
      <QuantityContainer>
        <QuantityTogglerWrapper>
          <DecreaseButton
            data-test="decrease"
            onClick={handleDecrease}
            disabled={quantity === 1}
          >
            <svg className="minus" width="14px" height="2px" viewBox="0 0 14 2" aria-hidden="true" data-di-rand="1589763181889">
              <polygon fill={quantity === 1 ? 'rgb(224, 224, 224)' : 'black'} points="14 2 0 2 0 -6.03961325e-14 14 -6.03961325e-14" />
            </svg>
          </DecreaseButton>
          <InputWrapper>
            <Input
              type="num"
              data-testid="input"
              min="1"
              max={productLimit}
              value={quantity}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </InputWrapper>
          <IncreaseButton
            data-test="increase"
            onClick={handleIncrease}
            disabled={quantity === productLimit}
          >
            <svg className="add" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14" aria-hidden="true" data-di-rand="1589763181896">
              <polygon fill={quantity === productLimit ? 'rgb(224, 224, 224)' : 'black'} points="14 8 0 8 0 6 14 6" />
              <rect fill={quantity === productLimit ? 'rgb(224, 224, 224)' : 'black'} fillRule="nonzero" x="6" y="0" width="2" height="14" />
            </svg>
          </IncreaseButton>
        </QuantityTogglerWrapper>
      </QuantityContainer>
      <LimitWrapper>
        <LimitText>{`Limit ${productLimit}`}</LimitText>
        <LimitButtonWrapper>
          <LimitButton>i</LimitButton>
        </LimitButtonWrapper>
      </LimitWrapper>
    </>
  );
};

QuantityToggler.propTypes = {
  productLimit: PropTypes.number,
  quantity: PropTypes.number,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

QuantityToggler.defaultProps = {
  productLimit: 3,
  quantity: 1,
  onChange: () => {},
  onBlur: () => {},
};

export default QuantityToggler;

const QuantityContainer = styled.div`
  display: inline-flex;
  vertical-align: middle;
  padding-right: 1.125rem;
  min-width: 12rem;
`;
const QuantityTogglerWrapper = styled.div`
  display: flex;
  height: 2.7rem;
  border-radius: 5px;
  flex: 1 1 0%;
`;

const InputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  width: 2.5rem;
  border-top: thin solid rgb(224, 224, 224);
  border-bottom: thin solid rgb(224, 224, 224);
`;

const Input = styled.input`
  background-image: none;
  width: 100%;
  height: 100%;
  cursor: text;
  text-align: center;
  text-indent: 0px;
  text-rendering: auto;
  text-shadow: none;
  word-spacing: 0px;
  writing-mode: horizontal-tb;
  color: rgb(44, 44, 44);
  padding: 0px;
  border-radius: 0px;
  border-style: initial;
  font-size: 16px;
  font-weight: 500;
`;

const LimitButtonWrapper = styled.span`
  font-size: 0.75rem;
  line-height: 1.125rem;
  margin-left: 0.3125rem;
`;

const StyledButton = styled.button`
  position: relative;
  cursor: ${(prop) => (prop.disabled ? null : 'pointer')};
  flex-grow: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  border-image: initial;
  padding: 0px;
  background: transparent;
`;

const DecreaseButton = styled(StyledButton)`
  border-radius: 5px 0px 0px 5px;
`;
const IncreaseButton = styled(StyledButton)`
  border-radius: 0px 5px 5px 0px;
`;

const LimitWrapper = styled(InfoButtonWrapper)`
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  white-space: nowrap;
  padding: .625rem 0px;
`;

const LimitButton = styled(InfoButton)``;

const LimitText = styled.div`
  color: rgb(44, 44, 44);
  font-size: 0.875rem;
  line-height: 1.1875rem;
  font-weight: 400;
`;
