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

  span {
    color: #cad1e0;
  }
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

const WorkspaceInputContainer = styled.div`
  display: flex;

  width: 400px;
  margin-top: 10px;

  > span {
    border: 1px solid #eaeef5;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 10px;
    font-size: 12px;
    background-color: #f8f9fc;
  }

  && > input {
    display: block;
    flex: 1;
    padding-left: 10px;
    border: 1px solid #eaeef5;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-radius: 5px;
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    ::placeholder {
      color: #b0b8ca;
    }
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

const Stage2 = ({ onSubmitHandler }) => {
  const [workspaceName, setWorkspaceName] = React.useState('');
  const [workspaceUrl, setWorkspaceUrl] = React.useState('');

  return (
    <Container>
      <Header1>Let&#39;s set up a home for all your work</Header1>
      <Header5>You can always create another workspace later.</Header5>

      <FormContainer
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler({ workspaceName, workspaceUrl });
        }}
      >
        <Label>
          Workspace Name
          <Input
            type="text"
            name="name"
            placeholder="Eden"
            value={workspaceName}
            onChange={({ target }) => setWorkspaceName(target.value)}
          />
        </Label>
        <Label>
          Workspace URL <span>(optional)</span>
          <WorkspaceInputContainer>
            <span>www.eden.com/</span>
            <input
              type="email"
              name="name"
              placeholder="Example"
              value={workspaceUrl}
              onChange={({ target }) => setWorkspaceUrl(target.value)}
            />
          </WorkspaceInputContainer>
        </Label>
        <SubmitButton disabled={!workspaceName}>Create Workspace</SubmitButton>
      </FormContainer>
    </Container>
  );
};

Stage2.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

export default Stage2;
