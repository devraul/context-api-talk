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

const LinkStyled = styled.a`
  color: white;
  position: absolute;
  top: 30px;
  right: 30px;
`;

function App() {
  return (
    <AppStyled>
      <Container />
      <LinkStyled href="https://devraul.github.io/context-api-talk/slides-context-api.html">
        Slides link
      </LinkStyled>
    </AppStyled>
  );
}

export default App;
