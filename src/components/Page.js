import React from 'react';
import Header from './Header';
import Body from './Body';

const Page = ({ companyName }) => {
  return (
    <div>
      <Header companyName={companyName} />
      <Body companyName={companyName} />
    </div>
  );
};

export default Page;
