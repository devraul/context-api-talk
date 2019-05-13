import React from 'react';

import Header from './Header';
import Body from './Body';
import Box from './Box';

const Page = ({ companyName }) => {
  return (
    <Box padding="2rem" content="Page.js" color="#ff6b6b">
      <Header companyName={companyName} />
      <Body companyName={companyName} />
    </Box>
  );
};

export default Page;
