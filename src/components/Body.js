import React from 'react';
import styled from 'styled-components';
import Info from './Info';

const BodyStyled = styled.div`
  height: 300px;
  padding: 1rem;
  margin-top: 2px;
  border: 1px dashed #cd84f1;
  position: relative;
  &:before {
    content: 'Body.js';
    color: #cd84f1;
    position: absolute;
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
`;

const SpanName = styled.span`
  color: #f77f00;
`;

const Body = ({ companyName }) => {
  return (
    <BodyStyled>
      <h2>
        It's good to see you at <SpanName>{companyName}</SpanName>
      </h2>
      <p>Some extra information bellow:</p>
      <Info />
    </BodyStyled>
  );
};

export default Body;
