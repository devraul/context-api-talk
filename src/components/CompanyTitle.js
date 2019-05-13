import React, { useContext } from 'react';

import Box from './Box';
import { ContainerContext } from './ContainerContext';

const CompanyTitle = () => {
  const value = useContext(ContainerContext);

  return (
    <Box as="h1" color="#fffa65" content="CompanyTitle.js">
      Welcome to {value.companyName}
    </Box>
  );
};

export default CompanyTitle;
