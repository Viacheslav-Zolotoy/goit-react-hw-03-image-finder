import { styled } from 'styled-components';

const FormWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #787882;
  border-radius: 5px;
  background-color: #cbe5ee;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 15px;
  &:hover {
    background-color: #0730d3;
  }
`;

export { FormWrapper, StyledForm, StyledButton, StyledInput };
