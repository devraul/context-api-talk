import React from 'react';
import styled from 'styled-components';

const CompanyTitleStyled = styled.h1`
  border: 1px dashed #fffa65;
  position: relative;
  padding: 1rem;
  text-align: center;
  &:before {
    content: 'CompanyTitle.js';
    color: #fffa65;
    font-weight: normal;
    position: absolute;
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
`;

const CompanyTitle = ({ companyName }) => {
  return <CompanyTitleStyled>Welcome to {companyName}</CompanyTitleStyled>;
};

export default CompanyTitle;
