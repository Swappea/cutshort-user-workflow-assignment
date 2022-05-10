/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import logo from '../assets/eden-logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 30px;

  height: 800px;
  width: 800px;
`;

const Header = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 45px;
`;

const PointerContainer = styled.div`
  display: flex;

  column-gap: 80px;
  > {
    div:not(:last-child)::after {
      content: '';
      position: absolute;
      border: 0.5px solid #664de5;
      width: 40px;
      z-index: -1;
      top: 21px;
      left: 43px;
    }

    div:not(:first-child)::before {
      content: '';
      position: absolute;
      border: 0.5px solid #e6e6e6;
      z-index: -1;
      width: 40px;
      top: 21px;
      right: 43px;
    }
  }
`;

const StageCircle = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  font-size: 18px;
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  line-height: 42px;
  text-align: center;
  background: ${({ selected }) => (selected ? '#664de5' : '#fff')};
  border: 1px solid ${({ selected }) => (selected ? '#664de5' : '#e6e6e6')};
  position: relative;

  &&&&&&::before {
    border: 0.5px solid ${({ selected }) => (selected ? '#664de5' : '#e6e6e6')};
  }

  &&&&&&::after {
    border: 0.5px solid ${({ selected }) => (selected ? '#664de5' : '#e6e6e6')};
  }
`;

const STAGES = Object.freeze([
  { key: 1, label: '1', color: '#664de5' },
  { key: 2, label: '2', color: '#664de5' },
  { key: 3, label: '3', color: '#664de5' },
  { key: 4, label: '4', color: '#664de5' },
]);

const Onboarding = () => {
  const [currentStage, setCurrentStage] = React.useState(STAGES[0].key);

  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="This is an Eden logo image" />
        <h1>Eden</h1>
      </Header>
      <PointerContainer>
        {STAGES.map(({ key, label, color }) => (
          <StageCircle selected={key < currentStage + 1} key={key}>
            {label}
          </StageCircle>
        ))}
      </PointerContainer>
    </Container>
  );
};

export default Onboarding;
