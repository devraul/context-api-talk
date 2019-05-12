import React from 'react';
import styled from 'styled-components';

import Container from './components/Container';

const AppStyled = styled.div`
  background-color: #282c34;
  color: white;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <AppStyled>
      <Container />
    </AppStyled>
  );
}

export default App;
