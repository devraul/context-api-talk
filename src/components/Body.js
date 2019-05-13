import React, { useContext } from 'react';
import styled from 'styled-components';

import Info from './Info';
import Box from './Box';

import { ContainerContext } from './ContainerContext';
const SpanName = styled.span`
  color: #f77f00;
`;

const Body = () => {
  const value = useContext(ContainerContext);
  return (
    <Box color="#cd84f1" content="Body.js">
      <h2>
        It's good to see you at <SpanName>{value.companyName}</SpanName>
      </h2>
      <p>Some extra information bellow:</p>
      <Info />
    </Box>
  );
};

export default Body;
