import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import checkmarklogo from '../../assets/eden-checkmark-icon.png';

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

const Stage4 = ({ data }) => {
  return (
    <Container>
      <img src={checkmarklogo} alt="check mark logo" />
      <Header1>Congratulations, {data?.fullName ?? ''}!</Header1>
      <Header5>You have completed onboarding, you can start using Eden!</Header5>
      <SubmitButton
        onClick={() => {
          alert('Yay! Check console to see final data');
          // eslint-disable-next-line no-console
          console.dir(data);
        }}
      >
        Launch Eden
      </SubmitButton>
    </Container>
  );
};

Stage4.propTypes = {
  data: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Stage4;
