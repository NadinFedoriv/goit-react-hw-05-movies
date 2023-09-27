import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  width: 600px;
`;

export const CardWrapper = styled.li`
  border: 1px solid black;
  border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;

export const MovieTitle = styled.h3`
  padding: 4px;
  margin-top: 8px;
  margin-bottom: 0;
  color: black;
`;
