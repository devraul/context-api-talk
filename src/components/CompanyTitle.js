import React from 'react';

import Box from './Box';
import { ContainerConsumer } from './ContainerContext';

const CompanyTitle = () => {
  return (
    <ContainerConsumer>
      {value => {
        return (
          <Box as="h1" color="#fffa65" content="CompanyTitle.js">
            Welcome to {value.companyName}
          </Box>
        );
      }}
    </ContainerConsumer>
  );
};

export default CompanyTitle;
