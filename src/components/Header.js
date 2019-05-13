import React from 'react';

import CompanyTitle from './CompanyTitle';
import Box from './Box';

const Header = ({ companyName }) => {
  return (
    <Box content="Header.js" color="#ffcccc">
      <CompanyTitle companyName={companyName} />
    </Box>
  );
};

export default Header;
