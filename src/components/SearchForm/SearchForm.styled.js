import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;

  input {
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: #4caf50;
    }
  }

  button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #388e3c;
    }
  }
`;