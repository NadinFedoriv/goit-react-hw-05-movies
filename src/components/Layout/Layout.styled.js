import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 960px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 20px;
  display: flex;
  gap: 50px;
  margin: 0px;
  border-bottom: 3px solid #4caf50;

  li {
    a {
      text-decoration: none;
      color: #333;
      font-size: 20px;
      font-weight: bold;
      height: 100%;
      transition: color 0.3s;

      &.active {
        color: #4caf50;
      }
    }
  }
`;

export const MainContent = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
`;
