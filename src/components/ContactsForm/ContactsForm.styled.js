import styled from 'styled-components';

export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 20px;

  border: 1px solid;
  padding: 25px;
  border-radius: 15px;
  input {
    margin-bottom: 10px;
  }
  button {
    font-family: monospace;
    margin-top: 16px;
    padding: 6px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 10px;
    transition: 500ms;

    &:hover {
      background-color: #a9a9a9;
      border: 1px solid #faf8d4;
      transform: scale(1.1);
    }
  }
`;
