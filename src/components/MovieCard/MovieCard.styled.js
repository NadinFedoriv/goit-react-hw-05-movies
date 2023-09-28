import styled from 'styled-components';

export const MovieInfoWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  background-color: #f5f5f5; 
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);

  img {
    max-width: 300px;
    height: auto;
    margin-right: 20px;
    border-radius: 8px;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #4caf50; 
  }

  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #4caf50; 
  }
`; 