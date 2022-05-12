import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { STAGES } from '../constants';

const PointerContainer = styled.div`
  display: flex;

  column-gap: 70px;

  @media (max-width: 480px) {
    column-gap: 30px;

    && > {
      div:not(:last-child)::after {
        border: 1px;
        width: 15px;
        top: 16px;
        left: 32px;
      }

      div:not(:first-child)::before {
        border: 1px;
        width: 15px;
        top: 16px;
        right: 32px;
      }
    }
  }
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

const PointerComponent = ({ currentStage }) => {
  return (
    <PointerContainer>
      {STAGES.map(({ key, label }) => (
        <StageCircle selected={key < currentStage + 1} key={key}>
          {label}
        </StageCircle>
      ))}
    </PointerContainer>
  );
};

PointerComponent.propTypes = {
  currentStage: PropTypes.oneOf([...STAGES.map(({ key }) => key)]).isRequired,
};

export default PointerComponent;
