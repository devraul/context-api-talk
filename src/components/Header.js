import React from 'react';
import CompanyTitle from './CompanyTitle';

import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: 1rem;
  border: 1px dashed #ffcccc;
  position: relative;
  &:before {
    content: 'Header.js';
    color: #ffcccc;
    position: absolute;
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
`;

const Header = ({ companyName }) => {
  return (
    <HeaderStyled>
      <CompanyTitle companyName={companyName} />
    </HeaderStyled>
  );
};

export default Header;
