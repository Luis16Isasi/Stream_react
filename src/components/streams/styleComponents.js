import styled, { css } from 'styled-components';

export const FormStream = styled.form`
  width: 70%;
  max-width: 650px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const RowForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  margin: 10px 5px;

  > * {
    margin: 3px;
  }

  > label {
    font-size: 20px;
    min-width: 100px;
  }
  > input {
    padding: 6px;
    border: 1px solid #beccc2;
    border-radius: 5px;
    height: 30px;
  }
`;

export const Error = styled.h3`
  color: white;
  background-color: tomato;
  padding: 4px;
  height: 24px;
  line-height: 24px;
  border-radius: 5px;
`;

export const Btn = styled.button`
  background-color: #4a8ed1;
  border: none;
  color: white;
  border-radius: 5px;
  height: 38px;
  align-self: flex-end;
  margin-right: 18px;

  padding: 0px 15px;
  &:hover {
    background-color: #509be6;
  }
`;

export const BtnA = styled.a`
  background-color: #4a8ed1;
  border: none;
  color: white;
  font-size: 14px;
  border-radius: 5px;
  margin-right: 18px;
  padding: 8px 13px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #509be6;
  }
  ${props =>
    props.delete &&
    css`
      background: red;
      color: white;

      &:hover {
        background-color: tomato;
      }
    `}
`;
