import React from 'react';
import styled from 'styled-components';

import Onboarding from './onboarding/Onboarding';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Container>
      <Onboarding />
    </Container>
  );
};

export default App;
