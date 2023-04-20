import styled from 'styled-components';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 77px;
  h2 {
    font-size: 32px;
  }
  label {
    margin-right: 10px;
  }
  li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
  }
  span {
    margin-right: 8px;
  }
  button {
    padding: 6px 12px;
    margin-left: auto;
    border-radius: 15px;
    border: none;
    background-color: #8cada6;
    cursor: pointer;
    transition: 500ms;
    &:hover {
      background-color: rgb(255, 0, 51);
    }
  }
`;
