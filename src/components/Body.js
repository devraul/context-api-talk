import React from 'react';
import styled from 'styled-components';

import Info from './Info';
import Box from './Box';

const SpanName = styled.span`
  color: #f77f00;
`;

const Body = ({ companyName }) => {
  return (
    <Box color="#cd84f1" content="Body.js">
      <h2>
        It's good to see you at <SpanName>{companyName}</SpanName>
      </h2>
      <p>Some extra information bellow:</p>
      <Info />
    </Box>
  );
};

export default Body;
