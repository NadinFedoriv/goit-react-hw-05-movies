import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  width: 600px;
`;

export const MovieTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;

export const CardWrapper = styled.li`
  border: 1px solid #4caf50;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: background-color 0.3s, color 0.3s;

  a {
    text-decoration: none;
    height: 100%;
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #4caf50;
    ${MovieTitle} {
      color: #fff;
    }
  }
`;


