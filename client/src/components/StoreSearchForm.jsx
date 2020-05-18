import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StoreSearchForm = ({ query, handleSubmitQuery, handleChangeQuery }) => (
  <div>
    <p>Enter your address to find a store near you.</p>
    <form onSubmit={handleSubmitQuery}>
      <SearchWrapper>
        <SearchBarWrapper>
          <StyledLabel for="search" tabIndex="-1" >
            <StyledInput
              type="text"
              data-testid="queryChange"
              value={query}
              onChange={handleChangeQuery}
            />
            <EnterText tabIndex="-1">
              Enter a city and state or zip code
            </EnterText>
          </StyledLabel>
        </SearchBarWrapper>
        <SearchButton kind="secondary" type="submit" aria-label="Find Store" data-testid="queryClick">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 0 1-.973.412 1.28 1.28 0 0 1-.973-.412l-3.71-3.7a7.41 7.41 0 0 1-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 0 1-2.434-1.623 7.605 7.605 0 0 1-1.622-2.433A7.472 7.472 0 0 1 0 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 0 1 1.623-2.433A7.616 7.616 0 0 1 4.657.601 7.49 7.49 0 0 1 7.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 0 1 1.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 0 1-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="#006DB7" fillRule="evenodd" />
          </svg>
        </SearchButton>
      </SearchWrapper>
    </form>
  </div>
);

StoreSearchForm.propTypes = {
  query: PropTypes.string,
  handleChangeQuery: PropTypes.func,
  handleSubmitQuery: PropTypes.func,
};

StoreSearchForm.defaultProps = {
  query: '',
  handleChangeQuery: () => {},
  handleSubmitQuery: () => {},
};

export default StoreSearchForm;

const SearchWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

const SearchBarWrapper = styled.div`
  flex: 1 1 0%;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
  position: relative;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  color: rgb(44, 44, 44);
  height: 3.45rem;
  background: rgb(255, 255, 255);
  padding: 1.125rem 1.25rem 0px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(224, 224, 224);
  border-image: initial;
  font-size: 16px;
`;

const SearchButton = styled.button`
  white-space: nowrap;
  transform: translateX(-1px);
  margin-right: -1px;
  box-shadow: none;
  max-height: 100%;
  padding: 0px 15px 0px 15px;
  border-radius: 0px 0.3125rem 0.3125rem 0px;
  &:hover {
    background: rgb(230, 243, 255);
  };
  cursor: pointer;
`;

const EnterText = styled.span`
  position: absolute;
  top: 0.9375rem;
  left: 1.25rem;
  transform-origin: left top;
  transform: translate(0px, 0px);
  color: rgb(117, 117, 117);
  font-size: 1em;
  white-space: nowrap;
  transition: all 0.1s ease-in-out 0s;
  &${StyledInput}:focus {
    transform: translate(1px, -0.4375rem);
    font-size: 0.8em;
  };
`;
