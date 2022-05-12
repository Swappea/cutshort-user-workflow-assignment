import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const Label = styled.label`
  display: block;
  color: #000;
`;

const Input = styled.input`
  display: block;
  width: 400px;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid #eaeef5;
  border-radius: 5px;

  ::placeholder {
    color: #b0b8ca;
  }

  @media (max-width: 480px) {
    width: 250px;
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
`;

const Stage1 = ({ onSubmitHandler }) => {
  const [fullName, setFullName] = React.useState('');
  const [displayName, setDisplayName] = React.useState('');

  return (
    <Container>
      <Header1>Welcome! First things first...</Header1>
      <Header5>You can always change them later.</Header5>

      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler({ fullName, displayName });
        }}
      >
        <Label>
          Full Name
          <Input
            type="text"
            name="name"
            placeholder="Steve Jobs"
            value={fullName}
            onChange={({ target }) => setFullName(target.value)}
          />
        </Label>
        <Label>
          Display Name
          <Input
            type="text"
            name="name"
            placeholder="Steve"
            value={displayName}
            onChange={({ target }) => setDisplayName(target.value)}
          />
        </Label>
        <SubmitButton disabled={!(fullName && displayName)}>Create Workspace</SubmitButton>
      </FormContainer>
    </Container>
  );
};

Stage1.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default Stage1;
