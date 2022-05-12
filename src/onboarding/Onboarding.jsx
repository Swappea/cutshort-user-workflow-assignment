/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import PointerComponent from '../components/PointerComponent';
import Stage1 from './stages/Stage1';
import Stage2 from './stages/Stage2';
import Stage3 from './stages/Stage3';
import Stage4 from './stages/Stage4';

import { STAGES } from '../constants';

import logo from '../assets/eden-logo.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  row-gap: 30px;
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

const renderSwitch = ({ currentStage, onSubmitHandler, data }) => {
  switch (currentStage) {
    case STAGES[0].key:
      return <Stage1 onSubmitHandler={(args) => onSubmitHandler({ nextKey: STAGES[0].key + 1, ...args })} />;
    case STAGES[1].key:
      return <Stage2 onSubmitHandler={(args) => onSubmitHandler({ nextKey: STAGES[1].key + 1, ...args })} />;
    case STAGES[2].key:
      return <Stage3 onSubmitHandler={(args) => onSubmitHandler({ nextKey: STAGES[2].key + 1, ...args })} />;
    case STAGES[3].key:
      return <Stage4 data={data} />;
    default:
      return null;
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
      <PointerComponent currentStage={currentStage} />
      <div>{renderSwitch({ currentStage, onSubmitHandler, data })}</div>
    </Container>
  );
};

export default Onboarding;
