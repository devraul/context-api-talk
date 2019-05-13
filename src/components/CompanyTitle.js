import React from 'react';
import Box from './Box';

const CompanyTitle = ({ companyName }) => {
  return (
    <Box as="h1" color="#fffa65" content="CompanyTitle.js">
      Welcome to {companyName}
    </Box>
  );
};

export default CompanyTitle;
