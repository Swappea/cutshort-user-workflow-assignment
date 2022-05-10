/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import Stage1 from './Stage1';

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
  column-gap: 5px;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 30px;
`;

const PointerContainer = styled.div`
  display: flex;

  column-gap: 70px;
  > {
    div:not(:last-child)::after {
      content: '';
      position: absolute;
      border: 0.5px solid #664de5;
      width: 35px;
      z-index: -1;
      top: 16px;
      left: 34px;
    }

    div:not(:first-child)::before {
      content: '';
      position: absolute;
      border: 0.5px solid #e6e6e6;
      z-index: -1;
      width: 35px;
      top: 16px;
      right: 34px;
    }
  }
`;

const StageCircle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 18px;
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
  line-height: 31px;
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
  { key: 1, label: '1' },
  { key: 2, label: '2' },
  { key: 3, label: '3' },
  { key: 4, label: '4' },
]);

const renderSwitch = ({ currentStage, onSubmitHandler }) => {
  switch (currentStage) {
    case STAGES[0].key:
      return <Stage1 onSubmitHandler={(args) => onSubmitHandler({ nextKey: STAGES[0].key + 1, ...args })} />;
    case STAGES[1].key:
      return 'bar';
    case STAGES[2].key:
      return 'bar';
    case STAGES[3].key:
      return 'bar';
    default:
      return 'foo';
  }
};

const Onboarding = () => {
  const [currentStage, setCurrentStage] = React.useState(STAGES[0].key);
  const [data, setData] = React.useState({});

  const onSubmitHandler = ({ nextKey, ...data }) => {
    setCurrentStage(nextKey);

    setData((prevData) => {
      return {
        ...prevData,
        ...data,
      };
    });
  };

  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="This is an Eden logo image" />
        <h2>Eden</h2>
      </Header>
      <PointerContainer>
        {STAGES.map(({ key, label, color }) => (
          <StageCircle selected={key < currentStage + 1} key={key}>
            {label}
          </StageCircle>
        ))}
      </PointerContainer>
      <div>{renderSwitch({ currentStage, onSubmitHandler })}</div>
    </Container>
  );
};

export default Onboarding;
