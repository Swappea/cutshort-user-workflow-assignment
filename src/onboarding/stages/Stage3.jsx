import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { USAGE_TYPES } from '../../constants';

import userlogo from '../../assets/eden-user-icon.png';
import teamlogo from '../../assets/eden-team-icon.png';

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
`;

const Header1 = styled.h1`
  margin: 0;
`;

const Header5 = styled.h5`
  color: #939cad;
  margin: 0;
`;

const UsageContainer = styled.div`
  display: flex;
  column-gap: 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ selected }) => (selected ? '#664de5' : '#eaeef5')};
  width: 160px;
  border-radius: 5px;
  padding: 15px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }

  > div {
    h3 {
      font-size: 14px;
    }

    p {
      color: #9ba4b3;
      font-size: 14px;
    }
  }
`;

const SubmitButton = styled.button`
  background-color: #664de5;
  border: none;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  width: 340px;
`;

const Stage3 = ({ onSubmitHandler }) => {
  const [usage, setUsage] = React.useState(USAGE_TYPES[0].key);

  const getImage = (key) => {
    if (key === USAGE_TYPES[0].key) {
      return userlogo;
    }
    if (key === USAGE_TYPES[1].key) {
      return teamlogo;
    }
  };

  return (
    <Container>
      <Header1>How are you planning to use Eden?</Header1>
      <Header5>We&#39;ll streamline your setup experience accordingly.</Header5>
      <UsageContainer>
        {USAGE_TYPES.map(({ key, header, description }) => (
          <Card key={key} selected={key === usage} onClick={() => setUsage(key)}>
            <img src={getImage(key)} alt={description} />
            <div>
              <h3>{header}</h3>
              <p>{description}</p>
            </div>
          </Card>
        ))}
      </UsageContainer>
      <SubmitButton onClick={() => onSubmitHandler({ usage })}>Create Workspace</SubmitButton>
    </Container>
  );
};

Stage3.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default Stage3;
