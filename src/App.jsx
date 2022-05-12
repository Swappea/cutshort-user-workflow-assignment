import React from 'react';
import styled from 'styled-components';

import Onboarding from './onboarding/Onboarding';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 50px;
`;

const App = () => {
  return (
    <Container>
      <Onboarding />
    </Container>
  );
};

export default App;
